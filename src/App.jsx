import './App.css'
import { useState } from "react"
import ToDoCard from './components/ToDoCard';
import ToDoInput from './components/ToDoInput';

function App() {
  let [toDoList,setToDo] = useState([]);
  function onAdd(text) {
    setToDo(prev => [...prev, {id: Date.now(), text: text, finished: false}])
  }

  function onRemove(toDoItem) {
    let update = toDoList.filter(item => item.id !== toDoItem.id);
    setToDo(update);
  }

  function toggleComplete(toDoItem){
        setToDo(prev => prev.map(item => item.id === toDoItem.id? {...item, finished: !item.finished}: item));
    }
  return (
    <>
      <ToDoInput onAdd={onAdd}/>
      {toDoList.map(toDoItem => <ToDoCard toggleComplete={toggleComplete} onRemove={onRemove} toDoItem={toDoItem} key={toDoItem.id}/>)}
    </>
  );
};



export default App

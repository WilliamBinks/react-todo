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
    setToDo(prev => prev.filter(item => item.id !== toDoItem.id));
  }

  function toggleComplete(toDoItem){
        setToDo(prev => prev.map(item => item.id === toDoItem.id? {...item, finished: !item.finished}: item));
    }
  return (
    <>
      <h1 id="heading">To-Do List</h1>
      <div id="list-container">
      {toDoList.map(toDoItem => <ToDoCard toggleComplete={toggleComplete} onRemove={onRemove} toDoItem={toDoItem} key={toDoItem.id}/>)}
      </div>
      <ToDoInput onAdd={onAdd}/>
      
    </>
  );
};



export default App

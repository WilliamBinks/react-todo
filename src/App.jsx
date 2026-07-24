import './App.css'
import { useState } from "react"
import ToDoCard from './components/ToDoCard';
import TaskInput from './components/ToDoInput';
import ToDoInput from './components/ToDoInput';

function App() {
  let [toDoList,setToDo] = useState([]);
  function onAdd(text) {
    setToDo(prev => [...prev, {id: Date.now(), text: text, finished: false}])
  }


  return (
    <>
      <ToDoInput onAdd={onAdd}/>
      {toDoList.map(toDoItem => <ToDoCard toDoItem={toDoItem} key={toDoItem.id}/>)}
    </>
  );
};



export default App

import {useState} from "react";

function ToDoInput({ onAdd }) {
    const [toDoItem, setToDo] = useState("");

    const addToDo = (e) => {
        e.preventDefault();
        if (!toDoItem.trim()) return;
        onAdd(toDoItem);
        setToDo("");
    }
    return (
        <div className="toDo-input-container">
            <label htmlFor="toDo-input">Task: </label>
            <input id="toDo-input" type="text" value={toDoItem} onChange={(e) => setToDo(e.target.value)}/>
            <button onClick={addToDo}>press</button>
        </div>
        
    );
}

export default ToDoInput

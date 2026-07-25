import {useState} from "react";

function ToDoInput({ onAdd }) {
    const [toDoItem, setToDo] = useState("");
    const [error, setError] = useState("");

    const addToDo = (e) => {
        e.preventDefault();
        if (!toDoItem.trim()){
            setError("Please enter a valid input");
            
        }else{
            setError("");
            onAdd(toDoItem);
            setToDo("");}
    }
    return (<>
        <div className="toDo-input-container">
            <label htmlFor="toDo-input" id="input-label">Task: </label>
            <form onSubmit={addToDo}>
                <input id="toDo-input" type="text" value={toDoItem} onChange={(e) => setToDo(e.target.value)}/>
                <button onClick={addToDo} id="input-button" aria-label="Add task">Add</button>
            </form>
        </div>
        {error && <p className="error">{error}</p>}
        </>
    );
}

export default ToDoInput

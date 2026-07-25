function ToDoCard({toDoItem, onRemove, toggleComplete}) {

    return <div className={toDoItem.finished? "toDo-Card finished" : "toDo-Card"}>
        <CompleteButton toDoItem={toDoItem} toggleComplete={toggleComplete}/>
        <p>{toDoItem.text}</p>
        <RemoveButton onRemove={() => onRemove(toDoItem)}/>
        
    </div>
}

function CompleteButton({toDoItem,toggleComplete}){

    return <div className="complete-btn-container">
        <button className="complete-btn" aria-label="complete task" onClick={() => toggleComplete(toDoItem)} ></button>
    </div>
}

function RemoveButton({onRemove}){
    
    return <button onClick={onRemove} aria-label="remove task" className="remove-btn"></button>
}
export default ToDoCard


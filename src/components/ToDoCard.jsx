function ToDoCard({toDoItem, onRemove, toggleComplete}) {

    return <div className={toDoItem.finished? "toDo-Card finished" : "toDo-Card"}>
        <RemoveButton onRemove={() => onRemove(toDoItem)}/>
        <p>{toDoItem.text}</p>
        <CompleteButton toDoItem={toDoItem} toggleComplete={toggleComplete}/>
    </div>
}

function CompleteButton({toDoItem,toggleComplete}){

    return <div className="complete-btn-container">
        <button className="complete-btn" onClick={() => toggleComplete(toDoItem)} >complete</button>
    </div>
}

function RemoveButton({onRemove}){
    
    return <button onClick={onRemove}>X</button>
}
export default ToDoCard


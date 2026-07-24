function ToDoCard({toDoItem}) {

    return <div className="toDo-Card">
        <p>{toDoItem.text}</p>
        <CompleteButton toDoItem={toDoItem}/>
    </div>
}

function CompleteButton(toDoItem){
    function toggleComplete(){
        alert("complete");
    }

    return <div className="complete-btn-container">
        <button className="complete-btn" onClick={toggleComplete} >complete</button>
    </div>
}

export default ToDoCard


import React from "react"

// Step 4 - add `props` as argument
function TodoItem(props) {
    return (
        // Step 5 - add property of item.task
        // Step 6 - include `checked` based on property item.isCompleted
        <div className="todo-item">
            <input type="checkbox" checked={props.item.isCompleted}/>
            <p>{props.item.task}</p>
        </div>
    )
}

export default TodoItem
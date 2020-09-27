// Fix `checked` prop
/*
Get rid of the warning about not having an onChange on input. For now, the function that runs onChange, can simply console.log sth
*/

import React from 'react'

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={props.item.isCompleted}
                onChange={() => console.log("Changed!")}
            />
            <p>{props.item.task}</p>
        </div>
    )
}

export default TodoItem
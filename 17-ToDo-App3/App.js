/*
Using the array map method, render a child component for each todo item in the todosData array and pass the relevant data to it.
*/

import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

function App() {
    // Step 1 - create array with map() for todosData into const todosItems
    // Step 3 - add key{}
    const todosItems = todosData.map(item => <TodoItem key={item.id} item={item} />)

    return (
        /* Step 2 - from hardcoded `<TodoItem />` put array of `todosItems` */
        <div className="todo-list">
            {todosItems}
        </div>
    )
}

export default App
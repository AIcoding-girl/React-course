/*
Change the App component into a stateful class component and load the imported `todosData` into state
*/

import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
    }

    render() {
        const todosItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} />)

        return (
            <div className="todo-list">
                {todosItems}
            </div>
        )
    }
}

export default App
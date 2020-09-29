import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(previousState => {
            const updatedTodos = previousState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    render() {
        const todosItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)

        return (
            <div className="todo-list">
                {todosItems}
            </div>
        )
    }
}

export default App
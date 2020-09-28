/*
Let's make it so a checkbox can actually mark our todo as complete or incomplete!

1. Create and event handler in the App component for when the checkbox is clicked (which is an `onChange` event);
2. Pass the method down to the TodoItem component
3. In the TodoItem component, make it so when the `onChange` event happens, it calls the `handleChange` method and passes the id of the todo into the function
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
        this.handleChange = this.handleChange.bind(this)
    }

    // Update state so that the item with the given id flips `completed` from false to true
    // Remember not to modify previousState directly, but instead to return a new version of state with the change you want included in that update (using map())
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
        const todosItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)

        return (
            <div className="todo-list">
                {todosItems}
            </div>
        )
    }
}

export default App
import React, { Component } from 'react'
import Conditional from './Conditional'

class App extends Component {
    constructor() {
        super()
        this.state = {
            unreadMessages: [
                "Call your mom!",
                "New spam email evailable."
            ]
        }
    }

    render() {
        return (
            <div>
                <h2>You have {this.state.unreadMessages.length} unread messages</h2>
            </div>
        )
    }
}

export default App
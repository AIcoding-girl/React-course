import React from 'react'

/*
Given a stateless functional component:
1. Follow the steps necessary to add state to it
    hints: class-based ; constructor()
2. Have state keep track of whether the user is logged in or out
    hints: isLoggedIn - boolean
3. Add button that logs the user in/out
    hints: event listener(onClick), conditional rendering
4. Display text that says "Logged in" if the user is logged in, or "Logged out"
*/

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(previousState => {
            return {
                isLoggedIn: !previousState.isLoggedIn
            }
        })
    }

    render() {
        let buttonText = this.state.isLoggedIn ? "Log out" : "Log in"
        let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out"
        return (
            <div>
                <button onClick={this.handleClick}>{buttonText}</button>
                <h3>{displayText}</h3>
            </div >
        )
    }
}

export default App
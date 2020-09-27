import React from 'react'

/*
Given a stateless functional component, add state to it
State should have a property called `isLoggedIn` which is boolean
(true if logged in, false if not)

Then, at rendering, use 'in' if the user is logged in or
'out' of the user is logged out
*/

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        let wordDisplay
        if (this.state.isLoggedIn) {
            wordDisplay = 'in'
        } else {
            wordDisplay = 'out'
        }
        return (
            <div>You are currently logged {wordDisplay}</div>
        )
    }
}

export default App
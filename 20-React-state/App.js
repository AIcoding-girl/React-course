// Props are immutable
// State needs class based components

// The only way how to pass information from one component to another, is through props

import React from 'react'

class App extends React.Component {
    // constructor - place where to initialise the values
    constructor() {
        super()
        this.state = {  // state alwas will be object
            answer: "Yes"
        }
    }

    render() {
        return (
            <div>
                <h1>Is state important to know? {this.state.answer}</h1>
                <ChildComponent answer={this.state.answer} />
            </div>
        )
    }
}

export default App
// https://scrimba.com/learn/reacthooks

import React from ' react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
    }

    imcrement() {
        this.setState(previousState => {
            return {
                count: previousState.count + 1
            }
        })
    }

    componentDidMount() {
        console.log("Mounted")  // Executes second
    }

    componentDidUpdate() {
        console.log("Did update")  // Executes fourth(last)
    }

    render() {
        console.log("Render") // Executes first and third
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Increment!</button>
            </div>
        )
    }
}

export default App
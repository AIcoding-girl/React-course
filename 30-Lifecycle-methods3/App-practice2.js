// https://scrimba.com/learn/reacthooks

import React from ' react'
import randomcolor from 'randomcolor'  // needs to install new dependency

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            color: ""
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)

    }

    imcrement() {
        this.setState(previousState => {
            return {
                count: previousState.count + 1
            }
        })
    }

    decrement() {
        this.setState(previousState => {
            return {
                count: previousState.count - 1
            }
        })
    }

    componentDidUpdate(previousProps, previousState) {
        if (previousState.count !== this.state.count) {
            const newColor = randomcolor()
            this.setState({ color: newColor })
        }
    }

    render() {
        return (
            <div>
                <h1 style={{ color: this.state.color }}>{this.state.count}</h1>
                <button onClick={this.increment}>Increment!</button>
                <button onClick={this.decrement}>Decrement!</button>
            </div>
        )
    }
}

export default App
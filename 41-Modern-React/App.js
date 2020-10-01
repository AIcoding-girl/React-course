import React, { Component } from 'react'

class App extends Component {
    // B1 - change to use class properties, no need for constructor
    state = {
        firstName: ""
    }

    // constructor() {
    //     super()
    //     this.state = {
    //         firstName: ""
    //     }
    // A2 No need for bind() anymore
    // this.handleChange = this.handleChange.bind(this)
    // }

    // A1 - change to use arrow functions
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default App

/*
Other modern/advanced React features/topics to learn:

Official React Context API
Error Boundaries
render props
Higher Order Components
React Router
React Hooks
React lazy, memo and Suspence
*/
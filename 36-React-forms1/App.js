import React, { Component } from 'react'

// https://reactjs.org/docs/forms.html

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        // to declare variable of event.target BEFORE setState()
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type="name"
                        value={this.state.firstName}
                        name="firstName"
                        placeholder="First name"
                        onChange={this.handleChange} />
                    <br />
                    <input
                        type="name"
                        value={this.state.lastName}
                        name="lastName"
                        placeholder="Last name"
                        onChange={this.handleChange} />

                    <h1>{this.state.firstName} {this.state.lastName}</h1>
                </form>

            </div>
        )
    }
}

export default App
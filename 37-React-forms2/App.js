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
        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({
            [name]: value
        })
    }
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

                {/* 
                        Other useful form elements:
                            <textarea />
                            <input type="checkbox" />
                            <input type="radio" />
                            <select> and <option> elements
                        */}

                <textarea value={"Some text"}
                    onChange={this.handleChange}
                />

                <label>
                    <input
                        type="checkbox"
                        name="isChecked"
                        checked={this.state.isChecked}
                        onChange={this.handleChange}
                    /> Is checked?
                    </label>

            </form>

        </div>
    )
}

export default App
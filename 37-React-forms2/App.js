import React, { Component } from 'react'

// https://reactjs.org/docs/forms.html
// Formik library for writing React forms

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isChecked: false,
            gender: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
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

                    {/* radio button is using properties from checkbox and input type="text" - `value` and checked */}

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        /> Male
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender = "female"}
                            onChange={this.handleChange}
                        /> Female
                    </label>

                    <label>Favourite color:</label>
                    <select
                        value={this.state.favouriteColor}
                        onChange={this.handleChange}
                        name="favouriteColor"
                    >
                        <option value="red">Red</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                    </select>

                    <h2>You are a {this.state.gender}</h2>
                    <h2>Your favourite color is {this.state.favouriteColor}</h2>

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default App
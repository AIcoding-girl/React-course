import React from "react"
import ReactDOM from "react-dom"

function App() {
    const personName = "Ana"
    const personSurname = "Carol"

    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }

    return (
        <div>
            <h1>Hello {`${personName} ${personSurname}`}!</h1>
            <p>It is currently about {date.getHours() % 12} o.clock!</p>
            <p>Good {timeOfDay}!</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
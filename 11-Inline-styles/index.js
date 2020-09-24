import React from "react"
import ReactDOM from "react-dom"

function App() {
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

    const styles = {
        color: "blue",
        backgroundColor: "black",
        fontSize: 24,
        padding: "1.5rem"
    }

    return (
        // JSX experts style to be not the string but JavaScript object
        <h1 style={styles}>Good {timeOfDay}!</h1>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
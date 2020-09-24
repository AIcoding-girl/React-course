import React from "react"
import ReactDOM from "react-dom"

function App() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const styles = {
        fontSize: 30
    }

    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "yellow"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        styles.color = "green"
    } else {
        timeOfDay = "night"
        styles.color = "purple"
    }

    return (
        <h1 style={styles}>Good {timeOfDay}!</h1>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
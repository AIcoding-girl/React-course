import React from "react"
import ReactDOM from "react-dom"

function MyInfo {
    return (<div>
        <h1>
            Lorem
        </h1>
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <ol>
            <li>Germany</li>
            <li>Austria</li>
            <li>Norway</li>
        </ol>
    </div>)
}

ReactDOM.render(
    <MyInfo />,
    document.getElementById("root")
)
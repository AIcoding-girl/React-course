// Converting functional based components into class based components

import React from 'react'

// function App(props) {
//     return (
//         <div>
//             <h1>{props.whatever}</h1>
//         </div>
//     )
// }

// Class based comp
class App extends React.Component {

    myMethodHere() {

    }

    render() {
        const style = this.myMethodHere()

        return (
            <div>
                <h1>{this.props.whatever}</h1>
            </div>
        )
    }
}

export default App
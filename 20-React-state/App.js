// Props are immutable
// State needs class based components

import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    
    render() {
        return (
            <div>
                <h1>Is state important to know?</h1>
            </div>
        )
    }
}

export default App
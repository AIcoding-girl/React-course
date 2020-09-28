// https://blog.bitsrc.io/react-16-lifecycle-methods-how-and-when-to-use-them-f4ad31fb2282

// https://reactjs.org/blog/2018/03/29/react-v-16-3.html

import React from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {}
    }

    // For API calls; called once
    componentDidMount() {
        // Get the data needed to correctly display
    }

    // this method is being depricated
    componentWillReceiveProps(nextProps) {
        if (nextProps.whatever != this.props.whatever) {
            // do sth important here
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        // return true if want it to update
        // or false
    }

    componentWillUnmount() {
        // remove event listener
        // teardown or cleanup code before component disappears
    }

    render() {
        return (
            <div>
                I am learning!
            </div>
        )
    }
}

export default App
import React, { Component } from 'react'

// Update of Lifecycle methods which are being depricated

class App extends Component {
    constructor() {
        super()
        this.state = {}
    }

    // 1)
    // componentWillMount() {

    // }

    // 2)
    // componentWillReceiveProps() {

    // }

    // 3)
    // componentWillUpdate() {

    // New methods:

    static getDerivedStateFromProps(props, state) {
        // return the new, updated state based upon props
        // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
    }

    getSnapshotBeforeUpdate() {
        // create a backup of the current way things are
    }

}
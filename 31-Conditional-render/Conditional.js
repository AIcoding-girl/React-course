import React from 'react'

function Conditional(props) {
    // condition ? statement if true : statement if false
    return (
        <div>
            {props.isLoading ? <h1>Loading...</h1> : <h1>Finally loaded</h1>}
        </div>
    )

    // if (props.isLoading === true) {
    //     return (
    //         <h1>Loading...</h1>
    //     )
    // }
    // return (
    //     <h1>Finally loaded</h1>
    // )
}

export default Conditional
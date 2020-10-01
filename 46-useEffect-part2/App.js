import React, { useEffect, useState } from 'react'
import randomcolor from 'randomColor'

function App() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("")

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(previousCount => previousCount + 1)
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    useEffect(() => {
        setColor(randomcolor())
    }, [count])

    return (
        <div>
            <h1 style={{ color: color }}>{count}</h1>
        </div>
    )
}

export default App
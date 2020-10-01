import React from 'react'
import Header from './Header'
import MemeGenerator from './MemeGenerator'

// Step 1: create 2 new components - Header and NameGenerator
// Header will only display things
// Meme generator will be calling to an API and holding on to data

function App() {
    return (
        <div>
            <Header />
            <MemeGenerator />
        </div>
    )
}

export default App
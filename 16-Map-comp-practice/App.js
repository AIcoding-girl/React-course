/*
Given a list of products (as an array of objects), render a <Product /> component for each product in the list.

Use the array's `.map()` method to create these components, and pass a `key` prop to it to avoid the warning.
*/

import React from 'react'
import Product from './Product'
import productsData from './products'

function App() {
    const productsComponents = productsData.map(item => <Product key={item.id} product={item} />)
    return (
        <div>
            {productsComponents}
        </div>
    )
}

export default App
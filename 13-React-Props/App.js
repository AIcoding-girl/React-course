import React from "react"
import ContactCard from "./ContactCard"

function App() {
    return (
        <div className="contacts">
            <ContactCard
                contact={{ name="lorem", imgURL="http://placecar.com/300/200", phone="(454) 453-576", email="lorem@lorem.com" }}
            />

            <ContactCard
                contact={{ name="lorem", imgURL="http://placecar.com/300/200", phone="(454) 453-576", email="lorem@lorem.com" }}
            />

            <ContactCard
                contact={{ name="lorem", imgURL="http://placecar.com/300/200", phone="(454) 453-576", email="lorem@lorem.com" }}
            />

            <ContactCard
                contact={{ name="lorem", imgURL="http://placecar.com/300/200", phone="(454) 453-576", email="lorem@lorem.com" }}
            />
        </div>
    )
}

export default App
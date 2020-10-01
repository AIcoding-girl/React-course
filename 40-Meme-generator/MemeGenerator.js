import React, { Component } from 'react'

/*
Step 2:
Initialize state to save the following data:
    top text
    bottom text
    random image ("http://i.imgflip.com/1bij.jpg")
*/

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch("https://")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                this.setState({ allMemeImgs: memes })
            })
    }
    /*
    Step 3:
    Make an API call to "https://api.imgflip.com/get_memes" and save the data that comes back (an array - 'responce.data.memes') to a new state property called 'allMemeImgs'
    */

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    // Step 6: create a method that, when the 'Generate' button is clicked, chooses one of the memes from our 'allMemeImgs' array at random and makes it so that is the meme image that shows up in the bottom portion of our meme generator site

    handleSubmit(event) {
        event.preventDefault()
        // get a random int (index in the array)
        // get the meme from that index
        // set 'randomImg' to the '.url' of the random item it is grabbed

        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg })
    }

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>

                    {/* Step 4: Create 2 input fields, one for topText and other for bottomText. These will be 'comtrolled forms', so add all the attributes what need for that to work
                     */}

                    {/* Step 5: create the onChange handler method; it should update the corresponding state on every change of the input box */}

                    <input
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />

                    <input
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />


                    <button>Generate</button>
                </form>

                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>

                </div>
            </div>
        )
    }
}

export default MemeGenerator
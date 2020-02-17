import React, { Component } from 'react'

class Message extends Component {
    state = {
        text: 'Hello 2'
    }
    sayHi = () => {
        this.setState()
    }
    render() {
        return (
            <div>
                <h3>{this.state.text}</h3>
                <button onClick={this.sayHi}>Say Hi</button>
            </div>
        )
    }
}

export default Message

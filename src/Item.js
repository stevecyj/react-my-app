import React from 'react'

class Item extends React.Component {
    render() {
        return <li>{this.props.text}</li>
    }
}

export default Item

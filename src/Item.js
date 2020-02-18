import React from 'react'

class Item extends React.Component {
    render() {
        return (
            <li>
                {this.props.text} ({this.props.price + 21})
            </li>
        )
    }
}

export default Item

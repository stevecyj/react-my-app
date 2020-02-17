import React from 'react'
import Item from './Item'

class List extends React.Component {
    render() {
        return (
            <ol>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </ol>
        )
    }
}

export default List

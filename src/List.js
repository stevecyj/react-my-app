import React from 'react'
import Item from './Item'

class List extends React.Component {
    render() {
        return (
            <ol>
                <Item text="Learn JavaScript" price={300} />
                <Item text="Learn React" />
                <Item text="Make Money" />
            </ol>
        )
    }
}

export default List

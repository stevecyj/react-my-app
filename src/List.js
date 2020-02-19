import React from 'react'
import Item from './Item'

const steps = ['Learn JavaScript', 'Learn React', 'Make Money', 'Buy a House']

class List extends React.Component {
    render() {
        return (
            <div>
                {steps.map((text, i) => (
                    <Item text={text} key={i}></Item>
                ))}
                <Item>{123}</Item>
            </div>
        )
    }
}

export default List

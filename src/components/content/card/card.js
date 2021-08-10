import React from 'react'
import './card.css'

const card = props => {
    return (
        <div className='card'>
            <div className={'cardPhoto ' + props.id} />
            <h2>{props.name}</h2>
            <h4>{props.description}</h4>
            <button>Подробнее</button>
        </div>
    )
}

export default card
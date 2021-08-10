import React, { Component } from 'react'
import { Carousel } from '3d-react-carousal'
import Card from '../card/card'

class carousel extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let slides = [
            <Card
                id='K'
                name='Артем Кульнев'
                description='Главный профессор'
            />,
            <Card
                id='E'
                name='Егор Тришкин'
                description='Директор'
            />,
            <Card
                id='A'
                name='Александр Абаничев'
                description='Основатель'
            />
        ]
        return (
            <div>
                <Carousel slides={slides} autoplay={true} interval={5000} />
            </div>
        )
    }
}

export default carousel
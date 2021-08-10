import React from 'react'
import './content.css'
import About from './about/about'
import { Parallax } from 'react-parallax';
import Arrow from '../../UI/arrow'

const Content = () => {
    return (
        <div className='content'>
            <Parallax strength={400} blur={4} bgImage={'https://kartinkinaden.ru/uploads/posts/2021-04/1617287049_19-p-bravl-fon-21.jpg'}>
                <div className='main' style={{ height: '50vh' }}>
                    <div className='subTitle' >
                        <h2>У нас тренируются</h2>
                        <h1>ЛУЧШИЕ</h1>
                    </div>
                    <div className='Kulnev'></div>
                </div>
            </Parallax>
            <About />
            <Parallax strength={400} blur={4} bgImage={'https://i.ibb.co/W6gLk0g/1610903995-32-p-zheltii-fon-dlya-shapki-yutuba-47.png'}>
                <div className='delete' style={{ height: '80vh' }}>
                    <div className='motivation'>
                        <h2>Еще не играешь в Brawl Stars?!?</h2>
                        <h1>УДАЛЯЙ СТРАНИЧКУ!</h1>
                    </div>
                    
                </div>
            </Parallax>
            <div style={{ height: '500vh', textAlign:'center' }}>
                <h1>НОВАСТИ</h1>
            </div>
        </div>
    )
}

export default Content
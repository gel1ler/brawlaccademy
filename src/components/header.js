import React from 'react'
import Switch from '@material-ui/core/Switch'
import './components.css'

const Header = () => {
    return (
        <header>
            <a href='/'><h2>Главная</h2></a>
            <a href='/'><h2>О нас</h2></a>
            <a href='/'><div className='logo'></div></a>
            <a href='/'><h2>Новости</h2></a>
            <a href='/'><h2>Наши партнеры</h2></a>
        </header>
    )
}

export default Header
import React from 'react'
import Header from './components/header'
import Content from './components/content/content'
import { createMuiTheme } from '@material-ui/core/styles';
import './style.css'
import TopSlide from './UI/topSlide'
import Carousel from './UI/carousel/carousel'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Content />
      <Carousel />
      <TopSlide />
    </div>
  )
}

export default App;

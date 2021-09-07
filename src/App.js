import React from 'react'
import Header from './components/header'
import Content from './components/content/content'
import './style.css'
import TopSlide from './UI/topSlide'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Content />
      <TopSlide />
    </div>
  )
}

export default App;

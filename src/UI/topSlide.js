import React, { useState } from 'react'
import './UI.css'

window.onscroll = () => {
    if (window.outerHeight / window.pageYOffset < 1.4) {
        //change state
     }
}

const topSlide = () => {
    return (
        <div className='topSlide'>
            topArrow
        </div>
    )
}

export default topSlide
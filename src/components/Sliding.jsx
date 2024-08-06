import React, { useState } from 'react'
import Post from './Post'

const Sliding = () => {

    const [translateX, setTranslateX] = useState(0)
    
    const handleSlideLeft = () => {
        setTranslateX(translateX - 350)
    }

    
    const handleSlideRight = () => {
        setTranslateX(translateX + 350)
    }
  return (
      <>
      
      </>
  )
}

export default Sliding
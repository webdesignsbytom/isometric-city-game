import React from 'react'
import CanvasBg from './CanvasBg'
import CanvasFg from './CanvasFg'
import BigCanvas from './game/BigCanvas'

function GameContainer() {
  return (
    <div className='grid relative'>
        <BigCanvas />
    </div>
  )
}

export default GameContainer
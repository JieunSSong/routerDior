import React from 'react'

function MainVisual() {
  return (
    <div className='main_visual'>
      <img src={ process.env.PUBLIC_URL + '/img/main_visual.avif' } />
    </div>
  )
}

export default MainVisual
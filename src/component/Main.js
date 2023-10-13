import React from 'react'
import MainVisual from './MainVisual'
import MainList from './MainList'
function Main({data}) {
  return (
    <main className='main'>
      <MainVisual/>
      <MainList data={data}/>
    </main>
  )
}

export default Main
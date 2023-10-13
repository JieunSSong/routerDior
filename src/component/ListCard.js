import React from 'react'
import {Link} from 'react-router-dom';
function ListCard({item}) {
  return (
    <>
      <div className='imgCon'>
        <img src={`${process.env.PUBLIC_URL}/img/${item.img}`} alt={item.title}/>        
      </div>
      <p className='listTitle'>{item.title}</p>
      <p>{item.price}원</p>
    </>
  )
}

export default ListCard
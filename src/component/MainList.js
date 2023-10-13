import React from 'react'
import {Link} from 'react-router-dom'
import ListCard from './ListCard';
function MainList({data}) {
  let dataList = data.filter(
    (item) => item.category =="fa"
  );
  return (
    <section className='mainList'>
      <ul className='listCon'>
        {dataList.map((item)=>{
          return(
            <li className='list' key={item.id}><ListCard item={item}/></li>
          )})
        }
      </ul>
    </section>
  )
}

export default MainList
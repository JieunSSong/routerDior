import React from 'react'
import ListCard from './ListCard';
function Bag({data}) {
  let dataList = data.filter(
    (item) => item.category =="bag"
  );
  return (
    <section className='bag'>
      <div className='bag_text'>
        <h3>핸드백 전체 보기</h3>
        <p>팔에 착용하거나 손 끝에 드는 이브닝 백과 파우치는 여성스럽고 세련된 실루엣을 완성하는 마지막 터치입니다.
모든 의상에 어울리는 컬러와 스타일로 재해석된 백은 언제 어디서든 우아한 아름다움을 연출합니다.</p>
      </div>
      <div className='mainList'>
        <ul className='listCon'>
          {dataList.map((item)=>{
            return(
              <li className='list' key={item.id}><ListCard item={item}/></li>
            )})
          }
        </ul>
      </div>
    </section>
  )
}

export default Bag
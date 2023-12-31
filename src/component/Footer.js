import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer className='footer'>
      <div className='footer_top'>
        <ul>
          <li>온라인 서비스</li>
          <li>La Collection Privée</li>
        </ul>
      </div>
      <div className='footer_bottom'>
        <p>
        크리스챤디올꾸뛰르코리아주식회사 | 04539 서울특별시 중구 을지로5길 19, 26층(수하동) | 사업자등록번호: 120-81-74197 <br/>
        대표자: 트렁히엔트란, Khong May Wan Sharon | 통신판매업
        신고번호: 2021-서울중구-01116 | 사업자정보확인 <br/>
        개인정보관리책임자: 김지혜I 고객센터: 02-3280-0104 (contactdiorkr@christiandior.com) | 호스팅 서비스: Smile Hosting <br/>
        COPYRIGHT © CHRISTIAN DIOR COUTURE KOREA ALL RIGHTS RESERVED. <br/>
        토스페이먼츠 구매안전서비스 이용 확인증 확인하기 <br/>
        크리스챤디올꾸뛰르코리아㈜는 통신판매중개자로서 본 웹사이트와 연결된 사이트에서 엘브이엠에치코스메틱스(유)가 판매하는 뷰티 제품의 거래당사자가 아니며, <br/>
        엘브이엠에치코스메틱스(유)가 등록한 상품, 거래정보 및 거래에 대해 크리스챤디올꾸뛰르코리아㈜는 일체 책임을 지지 않습니다.
        </p>
        <div className="icon">
          <Link to="">
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link to="">
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link to="">
            <i className="fa-brands fa-twitter"></i>
          </Link>
          <Link to="">
            <i className="fa-regular fa-star"></i>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
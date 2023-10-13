import React from 'react'
import {Link} from 'react-router-dom';
function Header() {
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>
          <img src={ process.env.PUBLIC_URL + '/img/logo.svg' } />
        </Link>
      </div>
      <nav className='gnb'>
        <ul>
          <li><Link to='/'>패션</Link></li>
          <li><Link to='/Bag'>가방</Link></li>
          <li><Link to='/Jewellery'>쥬얼리</Link></li>
          <li><Link to='/Perfume'>향수</Link></li>
          <li><Link to='/Skin'>스킨케어</Link></li>
          <li><Link to='/Show'>패션쇼</Link></li>
        </ul>
        <div className='login'>
          <Link to='/Login'>로그인</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
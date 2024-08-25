import React from 'react';

function Header({headerMenu}) {
  return (
    <header className={`l-header ${headerMenu ? 'is-active' : ''}`}>
      <button className='l-header__button'>ME<br />NU</button>
    </header>
  )
}

export default Header;
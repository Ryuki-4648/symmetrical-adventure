import React from 'react';

function Header({headerMenu}) {
  const handleClickHeaderButton = () => {
    const headerContent = document.querySelector('.l-headerContent');
    headerContent.classList.add('is-open');
  }
  const handleCloseHeaderContent = () => {
    const headerContent = document.querySelector('.l-headerContent');
    headerContent.classList.remove('is-open');
  }
  return (
    <>
      <header className={`l-header ${headerMenu ? 'is-active' : ''}`} onClick={handleClickHeaderButton}>
        <button className='l-header__button'>ME<br />NU</button>
      </header>

      <div className='l-headerContent'>
        <button className='l-headerContent__button' onClick={handleCloseHeaderContent}>
          <span className='l-headerContent__buttonBorder'></span>
          <span className='l-headerContent__buttonBorder'></span>
          <p className='l-headerContent__buttonText'>Close</p>
        </button>
      </div>
    </>
  )
}

export default Header;
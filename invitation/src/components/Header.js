import React from 'react';

function Header({headerMenu}) {

  /* メニュー */
  const headerMenuList = [
      {name: 'Top', url: '/'},
      {name: 'Date', url: '#date'},
      {name: 'Access', url: '#access'},
      {name: 'Rsvp', url: '#rsvp'},
      {name: 'Gift money', url: '#gift'},
      {name: 'Facility Information', url: '#facility'},
      // {name: 'Profile', url: '#prof'},
  ];

  /* ハンバーガーメニュー */
  const headerContent = document.querySelector('.l-headerContent');
  const headerNav = document.querySelector('.l-headerNav');

  const handleClickHeaderButton = () => {
    headerContent.classList.add('is-open');
    headerNav.classList.add('is-open');
  };
  const handleCloseHeaderContent = () => {
    headerContent.classList.remove('is-open');
  };
  const handleMenuClick = () => {
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
        <nav className='l-headerNav'>
          <ul className='l-headerNav__list'>
            {headerMenuList.map((menu, index) => (
              <li className='l-headerNav__item'>
                <a href={menu.url} className='l-headerNav__link' onClick={handleMenuClick}>{menu.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header;
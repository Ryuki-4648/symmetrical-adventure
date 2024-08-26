import React from 'react';

function TopButton({topButton}) {

  // トップへ戻るボタン
  const handleClickBackTopButton = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className={`c-buttonTop ${topButton ? 'is-active' : ''}`} onClick={handleClickBackTopButton}></div>
  )
}

export default TopButton;
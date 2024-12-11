import React from 'react';

function MenuModal({ children, onClose }) {
  return (
    <div className='l-giftModal'>
      <div className='l-giftModal__wrap'>
        {children}
        <button onClick={onClose} className='l-giftModal__button'>閉じる</button>
      </div>
    </div>
  );
}

export default MenuModal;

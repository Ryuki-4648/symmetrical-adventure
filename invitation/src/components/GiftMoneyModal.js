import React from 'react';

function GiftMoneyModal({ selectedPerson, onClose }) {
  return (
    <div className='l-giftModal'>
      <h2>GIFT MONEY</h2>
      <dl>
        <dt>銀行名</dt>
        <dd>{selectedPerson === 'groom' ? process.env.REACT_APP_GROOM_BANK : process.env.REACT_APP_BRIDE_BANK}</dd>
      </dl>
      <dl>
        <dt>支店名</dt>
        <dd>{selectedPerson === 'groom' ? process.env.REACT_APP_GROOM_BANK_BRANCH : process.env.REACT_APP_BRIDE_BANK_BRANCH}</dd>
      </dl>
      <dl>
        <dt>口座番号</dt>
        <dd>{selectedPerson === 'groom' ? process.env.REACT_APP_GROOM_BANK_NUMBER : process.env.REACT_APP_BRIDE_BANK_NUMBER}</dd>
      </dl>
      <dl>
        <dt>名義</dt>
        <dd>{selectedPerson === 'groom' ? process.env.REACT_APP_GROOM_NAME_KANA : process.env.REACT_APP_BRIDE_NAME_KANA}</dd>
      </dl>
      <p className='c-text02'>
        手数料を除いた金額をお振込ください。<br />
        お振込いただいた方は、ご連絡いただけますと幸いです。
      </p>
      <button onClick={onClose} className='l-giftModal__button'>閉じる</button>
    </div>
  );
}

export default GiftMoneyModal;

import logo from './logo.svg';
import './App.scss';
import { useState } from 'react';

function App() {

  // ご祝儀モーダル
  const [giftMoneyModal, setGiftMoneyModal] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(''); // 新郎か新婦かを保持する状態

  const handleClickGiftMoneyModal = (groomOrBride) => {
    setSelectedPerson(groomOrBride);
    setGiftMoneyModal(true);
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <header className='l-header'>
        <button>Menu</button>
      </header>

      <main className='l-container'>
        <img src="/dummy/img01.png" alt="トップのメイン画像" className='main-image' />

        <h1 className=''>Wedding<br />Invitation</h1>

        <section className='l-greeting'>
          <p className='l-greeting__text'>謹啓<br />皆様にはご健勝のこととお慶び申し上げます</p>
          <p className='l-greeting__text'>このたび　私たちは<br />結婚式を挙げることになりました</p>
          <p className='l-greeting__text'>つきましては<br />ご挨拶をかねて<br />心ばかりの小宴を催したいと思います</p>
          <p className='l-greeting__text'>おいそがしい中と存じますが<br />ぜひご出席いただきたくご案内申し上げます<br/>謹白</p>
          <p className='l-greeting__text'>2024年9月吉日</p>
          <p className='l-greeting__name'>{process.env.REACT_APP_GROOM_NAME}<br />{process.env.REACT_APP_BRIDE_NAME}</p>
        </section>

        <section className='l-outline'>
          <div className='l-outline__wrap'>
            <p className='l-outline__date'>{process.env.REACT_APP_WEDDING_DATE}</p>
            <span className='l-outline__dayofweek'>Sat.</span>
          </div>

          <p className='countdown'></p>
          
          <dl className='l-outline__schedule'>
            <dt>受　付</dt>
            <dd>13:30</dd>
          </dl>
          <dl className='l-outline__schedule'>
          <dt>挙　式</dt>
            <dd>14:30</dd>
          </dl>
          <dl className='l-outline__schedule'>
            <dt>披露宴</dt>
            <dd>15:30 開宴</dd>
          </dl>

          <p className='l-outline__place'>@ {process.env.REACT_APP_WEDDING_PLACE_EN}<br />（{process.env.REACT_APP_WEDDING_PLACE}）</p>
          <a href={process.env.REACT_APP_WEDDING_PLACE_PDF} target='_blank' rel="noreferrer" className='c-textLink01'>アクセス案内はこちら</a>
          <p className='c-text02'>誠に恐れ入りますが、挙式15分前までにお越しくださいますようお願い申し上げます</p>
        </section>

        <section className='l-rsvp'>
          <h2 className='c-title01'>RSVP</h2>
          <button className='l-rsvp__button'>招待状を回答する</button>
          <p className='c-text02'>誠に勝手ながら10月11日（金）までに<br />お返事をいただければ幸いに存じます</p>
          <p className='c-text02'>期日以降、万が一変更がある場合はお手数ですが直接ご連絡ください</p>
        </section>

        <section className='l-gift'>
          <h2 className='c-title01'>GIFT MONEY<p className='c-title01__ja'>ご祝儀について</p></h2>
          
          <p className='c-text02'>銀行振込もしくは当日持参でお願いいたします</p>
          
          {/* <p onClick={handleClickGiftMoneyModal('groom')} className=''>銀行振込情報（新郎側）はこちら</p>
          <p onClick={handleClickGiftMoneyModal('bride')}>銀行振込情報（新婦側）はこちら</p> */}
          {/* onClickに関数の参照を渡すために、アロー関数を使用 */}
          <p onClick={() => handleClickGiftMoneyModal('groom')} className='l-gift__click'>銀行振込情報（新郎側）はこちら</p>
          <p onClick={() => handleClickGiftMoneyModal('bride')} className='l-gift__click'>銀行振込情報（新婦側）はこちら</p>
        </section>

        <section className='l-access'>
          <h2 className='c-title01'>ACCSESS</h2>
          <div className='l-access__gmap'>
            <iframe src={process.env.REACT_APP_WEDDING_PLACE_GMAP} width="100%" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <h2 className='c-title01'>BUS<p className='c-title01__ja'>シャトルバスのご案内</p></h2>
          
          <p className='c-text01'>Comming Soon...</p>
        </section>

        <section className='l-'>
          <h2 className='c-title01'>Facility information<p className='c-title01__ja'>会場施設のご案内</p></h2>
          <h3>授乳室</h3>
          <p className='c-text02'>各フロア、披露宴会場にも授乳室がご用意ございます。<br />チャペル横の授乳室では、モニターにて挙式内容をリアルタイムにてご覧いただけます</p>
        </section>

        <section className='l-profile'>
          <img src="/dummy/img02.png" alt="新郎新婦のプロフィール画像" className='' />
          <div className='l-profile__wrap'>
            <div className='l-profile__groom'>
              <h3>GROOM</h3>
              <h4>{process.env.REACT_APP_GROOM_NAME}</h4>
              <p>{process.env.REACT_APP_GROOM_NAME_EN}</p>
              {/* <dl className='l-profile__list'>
                <dt>生年月日</dt>
                <dd>{process.env.REACT_APP_GROOM_BIRTHDAY}</dd>
              </dl>
              <dl className='l-profile__list'>
                <dt>出身地</dt>
                <dd>{process.env.REACT_APP_GROOM_BIRTHPLACE}</dd>
              </dl>
              <dl className='l-profile__list'>
                <dt>好きな食べ物</dt>
                <dd>TODO：入力</dd>
              </dl>
              <dl className='l-profile__list'>
                <dt>趣味</dt>
                <dd>TODO：入力</dd>
              </dl>
              <dl className='l-profile__list'>
                <dt>好きなもの</dt>
                <dd>TODO：入力</dd>
              </dl>
              <dl className='l-profile__list'>
                <dt>特技</dt>
                <dd>TODO：入力</dd>
              </dl>
              <dl className='l-profile__list'>
                <dt>相手の第一印象</dt>
                <dd>TODO：入力</dd>
              </dl>
              <dl className='l-profile__list'>
                <dt>相手の好きなところ</dt>
                <dd>TODO：入力</dd>
              </dl>
              <dl className='l-profile__list'>
                <dt>どんな家庭を築きたい？</dt>
                <dd>TODO：入力</dd>
              </dl> */}
            </div>
            <div className='l-profile__bride'>
              <h3>BRIDE</h3>
              <h4>{process.env.REACT_APP_BRIDE_NAME}</h4>
              <p>{process.env.REACT_APP_BRIDE_NAME_EN}</p>
              {/* <dl className='l-profile__list'>
                <dt>生年月日</dt>
                <dd>{process.env.REACT_APP_BRIDE_BIRTHDAY}</dd>
              </dl>
              <dl className='l-profile__list'>
                <dt>出身地</dt>
                <dd>{process.env.REACT_APP_BRIDE_BIRTHPLACE}</dd>
              </dl>
              <dl className='l-profile__list'>
                <dt>好きな食べ物</dt>
                <dd>酒のあて</dd>
              </dl>
              <dl className='l-profile__list'>
                <dt>趣味</dt>
                <dd>ひとり旅</dd>
              </dl>
              <dl className='l-profile__list'>
                <dt>好きなもの</dt>
                <dd>乃木坂・櫻坂・日向坂</dd>
              </dl>
              <dl className='l-profile__list'>
                <dt>特技</dt>
                <dd>1人でどこでも行ける</dd>
              </dl>
              <dl className='l-profile__list'>
                <dt>相手の第一印象</dt>
                <dd>TODO：入力</dd>
              </dl>
              <dl className='l-profile__list'>
                <dt>相手の好きなところ</dt>
                <dd>TODO：入力</dd>
              </dl>
              <dl className='l-profile__list'>
                <dt>どんな家庭を築きたい？</dt>
                <dd>TODO：入力</dd>
              </dl> */}
            </div>
          </div>
        </section>

        <section className='l-setting'>
          <h2 className='c-title01'>SEETING CHART<p className='c-title01__ja'>席次表</p></h2>
          <p className='c-text01'>Comming Soon...</p>
          <p>PDFで開きます</p>
          <button className='c-button01' disabled>席次表を見る</button>
        </section>

        <section className='l-menu'>
          <h2 className='c-title01'>MENU<p className='c-title01__ja'>お食事</p></h2>
          <p className='c-text01'>Comming Soon...</p>
          <button className='c-button01' disabled>メニューを見る</button>
        </section>

        <section className='l-drink'>
          <h2 className='c-title01'>DRINK<p className='c-title01__ja'>お飲み物</p></h2>
          <p className='c-text01'>Comming Soon...</p>
          <button className='c-button01' disabled>ドリンクメニューを見る</button>
        </section>

        <section className='l-gallery'>
          <h2 className='c-title01'>GALLERY</h2>
        </section>

        {/** ご祝儀モーダル */}
        {giftMoneyModal && (
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
          <p className='c-text02'>手数料を除いた金額をお振込ください。<br />お振込いただいた方は、ご連絡いただけますと幸いです。</p>
        
          <button onClick={() => setGiftMoneyModal(false)} className='l-giftModal__button'>閉じる</button>
        </div>
        )}
      </main>

    </div>
  );
}

export default App;

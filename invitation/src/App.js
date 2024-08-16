import logo from './logo.svg';
import './App.scss';

function App() {
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
          <p className='l-greeting__text'>皆様にはご健勝のこととお慶び申し上げます</p>
          <p className='l-greeting__text'>このたび　私たちは<br />結婚式を挙げることになりました</p>
          <p className='l-greeting__text'>つきましては<br />ご挨拶をかねて<br />心ばかりの小宴を催したいと思います</p>
          <p className='l-greeting__text'>おいそがしい中と存じますが<br />ぜひご出席いただきたくご案内申し上げます</p>
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
          <a href={process.env.REACT_APP_WEDDING_PLACE_PDF} target='_blank' rel="noreferrer">アクセス案内はこちら</a>
          <p>誠に恐れ入りますが、挙式15分前までにお越しくださいますようお願い申し上げます</p>
        </section>

        <section className='l-rsvp'>
          <h2>RSVP</h2>
          <button className='l-rsvp__button'>招待状を回答する</button>
          <p>誠に勝手ながら11月15日までに<br />お返事をいただければ幸いに存じます</p>
          <p>期日以降、万が一変更がある場合はお手数ですが直接ご連絡ください</p>
        </section>

        <section className='l-gallery'>
          <h2>GIFT MONEY</h2>
          <p>ご祝儀について</p>
          <p>銀行振込もしくは当日持参でお願いいたします</p>
          <p>銀行振込情報（新郎側）はこちら</p>
          <p>銀行振込情報（新婦側）はこちら</p>
        </section>

        <section className='l-access'>
          <h2>ACCSESS</h2>
          <div className='l-access__gmap'>
            <iframe src={process.env.REACT_APP_WEDDING_PLACE_GMAP} width="100%" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <h2>BUS</h2>
          <p>シャトルバスのご案内</p>
          <p>Comming Soon...</p>
        </section>

        <section className='l-'>
          <h2>Facility information 会場施設のご案内</h2>
          <h3>授乳室</h3>
          <p>各フロア、披露宴会場にも授乳室がご用意ございます。<br />チャペル横の授乳室では、モニターにて挙式内容をリアルタイムにてご覧いただけます</p>
        </section>

        <section className='l-gallery'>
          <h2>GALLERY</h2>
        </section>

        <section className='l-profile'>
          <img src="/dummy/img02.png" alt="新郎新婦のプロフィール画像" className='' />
          <div className='l-profile__wrap'>
            <div className='l-profile__groom'>
              <h2>GROOM</h2>
              <h3>{process.env.REACT_APP_GROOM_NAME}</h3>
              <p>{process.env.REACT_APP_GROOM_NAME_EN}</p>
              <dl className='l-profile__list'>
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
              </dl>
            </div>
            <div className='l-profile__bride'>
              <h2>BRIDE</h2>
              <h3>{process.env.REACT_APP_BRIDE_NAME}</h3>
              <p>{process.env.REACT_APP_BRIDE_NAME_EN}</p>
              <dl className='l-profile__list'>
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
              </dl>
            </div>
          </div>
        </section>

        <section className='l-'>
          <h2>SEETING CHART<span>席次表</span></h2>
          <p>Comming Soon...</p>
          <button className='' disabled>席次表を見る</button>
        </section>

        <section className='l-'>
          <h2>MENU</h2>
          <p>Comming Soon...</p>
          <button className='' disabled>メニューを見る</button>
        </section>

        <section className='l-'>
          <h2>DRINK</h2>
          <p>Comming Soon...</p>
          <button className='' disabled>ドリンクメニューを見る</button>
        </section>

      </main>

    </div>
  );
}

export default App;

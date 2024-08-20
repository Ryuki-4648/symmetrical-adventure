import logo from './logo.svg';
import './App.scss';
import { useState } from 'react';
import GiftMoneyModal from './components/GiftMoneyModal';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

// import required modules
import { Autoplay, EffectCreative } from 'swiper/modules';

function App() {

  // ご祝儀モーダル
  const [giftMoneyModal, setGiftMoneyModal] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(''); // 新郎か新婦かを保持する状態

  const handleClickGiftMoneyModal = (groomOrBride) => {
    setSelectedPerson(groomOrBride);
    setGiftMoneyModal(true);
  }

  return (
    <div className='l-container'>
      <header className='l-header'>
        <button className='l-header__button'>ME<br />NU</button>
      </header>

      <main className='l-main'>
        <div className='l-main__mv'>
          <h2 className='l-main__date'>DEC.14<br />/24</h2>
          <Swiper
            grabCursor={true}
            effect={'creative'}
            loop={true}
            autoplay={{delay: 4200}}
            speed={1000}  
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }}
            modules={[EffectCreative, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide><img src="/prod/img01.jpg" alt="トップのメイン画像" className='main-image' /></SwiperSlide>
            <SwiperSlide><img src="/prod/img02.jpg" alt="トップのメイン画像" className='main-image' /></SwiperSlide>
            <SwiperSlide><img src="/prod/img03.jpg" alt="トップのメイン画像" className='main-image' /></SwiperSlide>
            <SwiperSlide><img src="/prod/img04.jpg" alt="トップのメイン画像" className='main-image' /></SwiperSlide>
            <SwiperSlide><img src="/prod/img05.jpg" alt="トップのメイン画像" className='main-image' /></SwiperSlide>
            <SwiperSlide><img src="/prod/img06.jpg" alt="トップのメイン画像" className='main-image' /></SwiperSlide>
          </Swiper>
          
        </div>

        <h1 className=''>Wedding<br />Invitation</h1>

        <section className='l-greeting'>
          <div className='l-greeting__wrap'>
            <p className='l-greeting__text'>謹啓</p>
            <p className='l-greeting__text'>皆様にはご健勝のこととお慶び申し上げます</p>
            <p className='l-greeting__text'>このたび　私たちは<br />結婚式を挙げることになりました</p>
            <p className='l-greeting__text'>つきましては<br />ご挨拶をかねて<br />心ばかりの小宴を催したいと思います</p>
            <p className='l-greeting__text'>おいそがしい中と存じますが<br />ぜひご出席いただきたくご案内申し上げます</p>
            <p className='l-greeting__text'>謹白</p>
            <p className='l-greeting__text'>2024年9月吉日</p>
            <p className='l-greeting__name'>{process.env.REACT_APP_GROOM_NAME}<br />{process.env.REACT_APP_BRIDE_NAME}</p>
          </div>
        </section>

        <section className='l-outline'>
          <div className='l-outline__wrap'>
            <div className='l-outline__date'>
              <p className='l-outline__dateText'>{process.env.REACT_APP_WEDDING_DATE}</p>
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
            <p className='c-text02'>誠に恐れ入りますが、挙式15分前までにお越しくださいますようお願い申し上げます</p>
          </div>
        </section>

        <section className='l-rsvp'>
          <h2 className='c-title01'>RSVP</h2>
          <button className='l-rsvp__button'>出欠情報を回答する</button>
          <p className='c-text02'>誠に勝手ながら10月11日（金）までに<br />お返事をいただければ幸いに存じます</p>
          <p className='c-text02'>期日以降、万が一変更がある場合はお手数ですが直接ご連絡ください</p>
        </section>

        <section className='l-gift'>
          <div className='l-gift__wrap'>
            <h2 className='c-title01'>GIFT MONEY<p className='c-title01__ja'>ご祝儀について</p></h2>
            
            <p className='c-text02'>銀行振込もしくは当日持参でお願いいたします</p>
            
            {/* <p onClick={handleClickGiftMoneyModal('groom')} className=''>銀行振込情報（新郎側）はこちら</p>
            <p onClick={handleClickGiftMoneyModal('bride')}>銀行振込情報（新婦側）はこちら</p> */}
            {/* onClickに関数の参照を渡すために、アロー関数を使用 */}
            <button className='c-button02' onClick={() => handleClickGiftMoneyModal('groom')}>銀行振込情報（新郎側）はこちら</button>
            <button className='c-button02' onClick={() => handleClickGiftMoneyModal('bride')}>銀行振込情報（新婦側）はこちら</button>
            {/* <p onClick={() => handleClickGiftMoneyModal('groom')} className='l-gift__click'>銀行振込情報（新郎側）はこちら</p>
            <p onClick={() => handleClickGiftMoneyModal('bride')} className='l-gift__click'>銀行振込情報（新婦側）はこちら</p> */}
          </div>
        </section>

        <section className='l-access'>
          <div className='l-access__wrap'>
            <h2 className='c-title01'>ACCSESS<p className='c-title01__ja'>アクセス</p></h2>
            <div className='l-access__gmap'>
              <iframe className='l-access__iframe' src={process.env.REACT_APP_WEDDING_PLACE_GMAP} width="100%" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <p className='c-text02'>JR・阪神「元町駅」からだと道がわかりづらいため、シャトルバスやお車でのお越しをおすすめします。</p>
              <a href={process.env.REACT_APP_WEDDING_PLACE_PDF} target='_blank' rel="noreferrer" className='c-textLink01'>アクセス案内はこちら</a>
            </div>

            <h2 className='c-title01'>BUS<p className='c-title01__ja'>シャトルバスのご案内</p></h2>
            
            <p className='c-text01'>Comming Soon...<br/>式の1ヶ月前に時刻表を掲載します。</p>
          </div>
        </section>

        <section className='l-facility'>
          <div className='l-facility__wrap'>
            <h2 className='c-title01'>Facility information<p className='c-title01__ja'>会場施設のご案内</p></h2>
            <h3 className='c-title02'>受付</h3>
            <p className='c-text02'>
              6階にございます
            </p>
            <h3 className='c-title02'>更衣室・クローク</h3>
            <p className='c-text02'>
              1階にございます
            </p>
            <h3 className='c-title02'>授乳室</h3>
            <p className='c-text02'>
              各フロア、披露宴会場にも授乳室がご用意ございます。<br />
              チャペル横の授乳室では、モニターにて挙式内容をリアルタイムにてご覧いただけます
            </p>
          </div>
        </section>

        <section className='l-profile'>
          <img src="/dummy/img02.png" alt="新郎新婦のプロフィール画像" className='l-profile__image' />
          <div className='l-profile__wrap'>
            <div className='l-profile__groom'>
              <h3>GROOM</h3>
              <p className='l-profile__name'>{process.env.REACT_APP_GROOM_NAME}</p>
              <p className='l-profile__nameEn'>{process.env.REACT_APP_GROOM_NAME_EN}</p>
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
              <p className='l-profile__name'>{process.env.REACT_APP_BRIDE_NAME}</p>
              <p className='l-profile__nameEn'>{process.env.REACT_APP_BRIDE_NAME_EN}</p>
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
          <div className='l-setting__wrap'>
            <h2 className='c-title01'>SEETING CHART<p className='c-title01__ja'>席次表</p></h2>
            <p className='c-text01'>Comming Soon...</p>
            <p>PDFで開きます</p>
            <button className='c-button01' disabled>席次表を見る</button>
          </div>
        </section>

        <section className='l-menu'>
          <div className='l-menu__wrap'>
            <h2 className='c-title01'>MENU<p className='c-title01__ja'>お食事</p></h2>
            <p className='c-text01'>Comming Soon...</p>
            <button className='c-button01' disabled>メニューを見る</button>
          </div>
        </section>

        <section className='l-drink'>
          <div className='l-drink__wrap'>
            <h2 className='c-title01'>DRINK<p className='c-title01__ja'>お飲み物</p></h2>
            <p className='c-text01'>Comming Soon...</p>
            <button className='c-button01' disabled>ドリンクメニューを見る</button>
          </div>
        </section>

        <section className='l-gallery'>
          <div className='l-gallery__wrap'>
            <h2 className='c-title01'>GALLERY</h2>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </section>

        {/** ご祝儀モーダル */}
        {giftMoneyModal && (
          <GiftMoneyModal selectedPerson={selectedPerson} onClose={() => setGiftMoneyModal(false)} />
        )}
      </main>
    </div>
  );
}

export default App;

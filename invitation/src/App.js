import './App.scss';

import { useEffect, useRef, useState } from 'react';

import dayjs from 'dayjs';

import GiftMoneyModal from './components/GiftMoneyModal';
import Header from './components/Header';
import MvSlider from './components/MvSlider';
import GallerySlider from './components/GallerySlider';
import TopButton from './components/TopButton';
import Footer from './components/Footer';
import ClosureModal from './components/ClosureModal';
import MenuModal from './components/menuModal';

function App() {

  /* 指定日に公開する */
  const [displayButtonInDesignatedDay, setDisplayButtonInDesignatedDay] = useState(false);
  const currentDate = dayjs();
  const dayBeforeWedding = dayjs('2024-12-13');

  useEffect(() => {
    if (currentDate.isAfter(dayBeforeWedding)) {
      setDisplayButtonInDesignatedDay(true)
    } else {
      setDisplayButtonInDesignatedDay(false)
    }
  }, [currentDate, dayBeforeWedding])


  /* ご祝儀モーダル */
  const [giftMoneyModal, setGiftMoneyModal] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(''); // 新郎か新婦かを保持する状態
  const [overlay, setOverlay] = useState(false);
  
  const handleClickGiftMoneyModal = (groomOrBride) => {
    setSelectedPerson(groomOrBride);
    setGiftMoneyModal(true);
    setOverlay(true);
  }

  /* 席次表・メニューのモーダル */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const handleClickModal = (targetName) => {
    setModalContent(targetName);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };


  /* ヘッダーメニュー */
  const [headerMenu, setHeaderMenu] = useState(false);
  const mainImageRef = useRef(null);
  const [mainImageHeight, setMainImageHeight] = useState(0);
  const [topButton, setTopButton] = useState(false);

  useEffect(() => {
    if (mainImageRef.current) {
      setMainImageHeight(mainImageRef.current.offsetHeight);
    }

    const handleScroll = () => {
      if (window.scrollY > mainImageHeight) {
        setHeaderMenu(true);
        setTopButton(true);
      } else {
        setHeaderMenu(false);
        setTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // クリーンアップ関数
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mainImageHeight]);

  /* プロフィール：Read more */
  const [displayProfile, setDispplayProfile] = useState({});
  const handleDisplayProfile = (index) => {
    setDispplayProfile((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }))
  }

  return (
    <div className='l-container'>
      {overlay && <div className='l-overlay'></div>}
      <Header headerMenu={headerMenu} />

      <main className='l-main'>
        <div className='l-main__mv' ref={mainImageRef}>
          <h2 className='l-main__date'>DEC.14<br />/24</h2>
          <MvSlider />
          
        </div>

        <h1 className='l-main__title'>Wedding<br />Invitation</h1>

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

        <section className='l-outline' id="date">
          <div className='l-outline__wrap'>
            <div className='l-outline__date'>
              <p className='l-outline__dateText'>{process.env.REACT_APP_WEDDING_DATE}</p>
              <p className='l-outline__dayofweek'><span className='l-outline__dayofweekText'>Sat.</span></p>
            </div>
            
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
            <p className='c-text02'>- 誠に恐れ入りますが、挙式15分前までにお越しくださいますようお願い申し上げます<br />- 披露宴は18時ごろ終了予定です<br />- 二次会の開催はございません</p>
          </div>
        </section>

        <section className='l-access' id="access">
          <div className='l-access__wrap'>
            <h2 className='c-title01'>ACCSESS<p className='c-title01__ja'>アクセス</p></h2>
            <div className='l-access__gmap'>
              <iframe title='Google Map' className='l-access__iframe' src={process.env.REACT_APP_WEDDING_PLACE_GMAP} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              <a href={process.env.REACT_APP_WEDDING_PLACE_PDF} target='_blank' rel="noreferrer" className='c-textLink01'>
                アクセス案内はこちら<span className="material-symbols-outlined">open_in_new</span>
              </a>
            </div>

            <h2 className='c-title01'>BUS<p className='c-title01__ja'>シャトルバスのご案内</p></h2>
            <p className='c-text04'><span>三宮</span><br />始発 8:00 / 毎時0分・20分・40分で運行</p>
            <p className='c-text04'><span>新神戸</span><br />始発7:50 / 毎時50分で運行</p>
            <p className='c-text02'>三宮からは約7分、新神戸からは約20分かかります</p>
            <a href={process.env.REACT_APP_BUS_PLACE_PDF} target='_blank' rel="noreferrer" className='c-textLink01'>
              バス乗り場の案内はこちら<span className="material-symbols-outlined">open_in_new</span>
            </a>
          </div>
        </section>

        <section className='l-rsvp' id="rsvp">
          <h2 className='c-title01'>RSVP</h2>
          <a className='l-rsvp__button' href={process.env.REACT_APP_FORM_URL} target='_blank' rel="noreferrer">出欠情報を回答する</a>
          <p className='c-text02'>誠に勝手ながら、出欠のご変更は11月15日（金）までに直接ご連絡いただければ幸いに存じます</p>
        </section>

        <section className='l-gift' id="gift">
          <div className='l-gift__wrap'>
            <h2 className='c-title01'>GIFT MONEY<p className='c-title01__ja'>ご祝儀について</p></h2>
            
            <p className='c-text02'>銀行振込も承っておりますので、よろしければご利用ください</p>
            
            {/* onClickに関数の参照を渡すために、アロー関数を使用 */}
            <button className='c-button02' onClick={() => handleClickGiftMoneyModal('groom')}>銀行振込情報（新郎側）はこちら</button>
            <button className='c-button02' onClick={() => handleClickGiftMoneyModal('bride')}>銀行振込情報（新婦側）はこちら</button>
          </div>
        </section>

        {/** ご祝儀モーダル */}
        {giftMoneyModal && (
          <GiftMoneyModal
            selectedPerson={selectedPerson}
            onClose={() => {
              setGiftMoneyModal(false)
              setOverlay(false)
            }}
          />
        )}

        <section className='l-facility' id="facility">
          <div className='l-facility__wrap'>
            <h2 className='c-title01'>Facility information<p className='c-title01__ja'>会場施設のご案内</p></h2>
            <h3 className='c-title02'>更衣室 / クローク</h3>
            <p className='c-text02'>
              1階でございます
            </p>
            <h3 className='c-title02'>受付 / 待合</h3>
            <p className='c-text02'>
              6階でございます
            </p>
            <h3 className='c-title02'>挙式 / 披露宴会場</h3>
            <p className='c-text02'>
              3階でございます
            </p>
            <h3 className='c-title02'>待合ラウンジ</h3>
            <p className='c-text02'>
              ビール、ソフトドリンク（ウーロン茶、オレンジ、アップル、マンゴー）がございます
            </p>
            <h3 className='c-title02'>喫煙所</h3>
            <p className='c-text02'>
              待合ラウンジ、披露宴会場近くにございますソフトドリンク（ウーロン茶、オレンジ、アップル、マンゴー）
            </p>
            <h3 className='c-title02'>授乳室</h3>
            <p className='c-text02'>
              各フロア、披露宴会場にも授乳室がご用意ございます<br />
              チャペル横の授乳室では、モニターにて挙式内容をリアルタイムにてご覧いただけます
            </p>
          </div>
        </section>

        <section className='l-profile' id='prof'>
          <div className='l-profile__image'>
            <img src="/prod/img_profile01.jpg" alt="新郎新婦のプロフィール画像" className='l-profile__imagePic' />
          </div>
          <div className='l-profile__wrap'>
            <div className='l-profile__groom'>
              <h3 className='c-menuTitle'>GROOM</h3>
              <p className='l-profile__name'>{process.env.REACT_APP_GROOM_NAME}</p>
              <p className='l-profile__nameEn'>{process.env.REACT_APP_GROOM_NAME_EN}</p>
              <div className='l-profile__listWrap'>
                <dl className='l-profile__list'>
                  <dt>生年月日</dt>
                  <dd>{process.env.REACT_APP_GROOM_BIRTHDAY}</dd>
                </dl>
                <dl className='l-profile__list'>
                  <dt>出身地</dt>
                  <dd>{process.env.REACT_APP_GROOM_BIRTHPLACE}</dd>
                </dl>
                <dl className='l-profile__list'>
                  <dt>趣味</dt>
                  <dd>ゴルフ<br /><span>#ベスト78</span></dd>
                </dl>
                {!displayProfile[1] && <p className='c-text05' onClick={() => handleDisplayProfile(1)}>
                  Read more
                </p>}
                {displayProfile[1] &&
                <div>
                  <dl className='l-profile__list'>
                    <dt>好きな乃木坂46</dt>
                    <dd>星野 みなみ、田村 真佑、矢久保 美緒、川﨑 桜</dd>
                  </dl>
                  <dl className='l-profile__list'>
                    <dt>好きな欅坂46</dt>
                    <dd>平手 友梨奈</dd>
                  </dl>
                  <dl className='l-profile__list'>
                    <dt>好きな櫻坂46</dt>
                    <dd>増本 綺良、森田 ひかる、山﨑 天、山下 瞳月</dd>
                  </dl>
                  <dl className='l-profile__list'>
                    <dt>好きな日向坂46</dt>
                    <dd>金村 美玖</dd>
                  </dl>
                  <dl className='l-profile__list'>
                    <dt>好きなHUNTER×HUNTER</dt>
                    <dd>キルア</dd>
                  </dl>
                  <dl className='l-profile__list'>
                    <dt>好きな日プ</dt>
                    <dd>釼持 菜乃</dd>
                  </dl>
                  <dl className='l-profile__list'>
                    <dt>好きなパチンコ</dt>
                    <dd>リゼロ 鬼がかりver.</dd>
                  </dl>
                </div>
                }
                {displayProfile[1] && <p className='c-text05' onClick={() => handleDisplayProfile(1)}>
                  Close
                </p>}
              </div>
            </div>
            <div className='l-profile__bride'>
              <h3 className='c-menuTitle'>BRIDE</h3>
              <p className='l-profile__name'>{process.env.REACT_APP_BRIDE_NAME}</p>
              <p className='l-profile__nameEn'>{process.env.REACT_APP_BRIDE_NAME_EN}</p>
              <div className='l-profile__listWrap'>
                <dl className='l-profile__list'>
                  <dt>生年月日</dt>
                  <dd>{process.env.REACT_APP_BRIDE_BIRTHDAY}</dd>
                </dl>
                <dl className='l-profile__list'>
                  <dt>出身地</dt>
                  <dd>{process.env.REACT_APP_BRIDE_BIRTHPLACE}</dd>
                </dl>
                <dl className='l-profile__list'>
                  <dt>趣味</dt>
                  <dd>ひとり旅<br /><span>#47都道府県制覇</span></dd>
                </dl>
                {!displayProfile[2] && <p className='c-text05' onClick={() => handleDisplayProfile(2)}>
                  Read more
                </p>}
                {displayProfile[2] && 
                <div>
                  <dl className='l-profile__list'>
                    <dt>好きな乃木坂46</dt>
                    <dd>衛藤、橋本、白石、生田、与田、山下、賀喜、池田、五百城</dd>
                  </dl>
                  <dl className='l-profile__list'>
                    <dt>好きな欅坂46</dt>
                    <dd>渡辺 梨加</dd>
                  </dl>
                  <dl className='l-profile__list'>
                    <dt>好きな櫻坂46</dt>
                    <dd>守屋 麗奈、田村 保乃、山﨑 天、森田 ひかる</dd>
                  </dl>
                  <dl className='l-profile__list'>
                    <dt>好きな日向坂46</dt>
                    <dd>小坂 菜緒、渡辺 莉奈、正源司 陽子</dd>
                  </dl>
                  <dl className='l-profile__list'>
                    <dt>好きなHUNTER×HUNTER</dt>
                    <dd>センリツ、イカルゴ、メルエム</dd>
                  </dl>
                  <dl className='l-profile__list'>
                    <dt>好きな日プ</dt>
                    <dd>山本 すず、高見 文寧、石井 蘭、髙畠 百加</dd>
                  </dl>
                  <dl className='l-profile__list'>
                    <dt>好きなパチンコ</dt>
                    <dd>乃木ぱ</dd>
                  </dl>
                </div>}
                {displayProfile[2] && <p className='c-text05' onClick={() => handleDisplayProfile(2)}>
                  Close
                </p>}
              </div>
            </div>
          </div>
        </section>

        <section className='l-seeting' id='seat'>
          <div className='l-seeting__wrap'>
            <h2 className='c-title01'>SEATING CHART<p className='c-title01__ja'>簡易席次表</p></h2>
            {displayButtonInDesignatedDay ?
              <>
                <button className='c-button01' onClick={() => handleClickModal('seat')}>席次表を見る</button>
              </> :
              <p className='c-text01'>Comming Soon...<br />当日表示されます</p>
            }
          </div>
        </section>

        <section className='l-menu' id='menu'>
          <div className='l-menu__wrap'>
            <h2 className='c-title01'>MENU<p className='c-title01__ja'>お食事</p></h2>
            {displayButtonInDesignatedDay ?
            <button className='c-button01' onClick={() => handleClickModal('food')}>メニューを見る</button> : 
              <p className='c-text01'>Comming Soon...<br />当日表示されます</p>
            }
          </div>
        </section>

        <section className='l-drink' id='drink'>
          <div className='l-drink__wrap'>
            <h2 className='c-title01'>DRINK<p className='c-title01__ja'>お飲み物</p></h2>
            {displayButtonInDesignatedDay ? 
            <button className='c-button01' onClick={() => handleClickModal('drink')}>ドリンクメニューを見る</button> : 
              <p className='c-text01'>Comming Soon...<br />当日表示されます</p>
            }
          </div>
        </section>

        {isModalOpen && (
          <div>
            <MenuModal onClose={closeModal}>
            {modalContent === 'seat' && (
              <div>
                <h2 className='l-giftModal__title'>SEATING CHART</h2>
                <img src="/prod/img_seat.png" alt="簡易座席表" className='c-seatImg' />
              </div>
            )}
            {modalContent === 'food' && (
              <div>
                <h2 className='l-giftModal__title'>MENU</h2>
                <h3 className='c-menuTitle'>ファイブスター特選 オードブルヴァリエ</h3>
                <p className='c-menuText'>
                  - 鮪とナッツのカクテル 泡醤油で<br />
                  - 帆立と烏賊のカリフラワームース<br />
                  - 白身魚のエスカベッシュ<br />
                  - NEXTフォアグラ リゾット添え<br />
                  - オレンジ鴨のモンブラン<br />
                  - 鯛の昆布〆最中<br />
                  - 牛タンのパセリジュレ<br />
                </p>
                <h3 className='c-menuTitle'>フカヒレを香味野菜のコンソメスープと共に</h3>
                <h3 className='c-menuTitle'>オマール海老の雲丹風味と蝦夷アワビのソテー　トマトのグラチネ添え</h3>
                <h3 className='c-menuTitle'>牛フィレ肉のステーキと蕪のロースト　赤ワインソース</h3>
                <h3 className='c-menuTitle'>オリーブちりめん御飯</h3>
                <h3 className='c-menuTitle'>トリュフとヴァニラのクリームをあしらったベイクドチーズケーキ</h3>
                <h3 className='c-menuTitle'>天然酵母パン</h3>
                <h3 className='c-menuTitle'>コーヒーまたは紅茶</h3>
              </div>
            )}
            {modalContent === 'drink' && (
              <div>
                <h2 className='l-giftModal__title'>MENU</h2>
                <h3 className='c-menuTitle'>BEER<span></span></h3>
                <p className='c-menuText'>生ビール / ノンアルコールビール</p>
                <h3 className='c-menuTitle'>WINE<span>ワイン</span></h3>
                <p className='c-menuText'>赤・白</p>
                <h3 className='c-menuTitle'>WHISKEY<span>ウイスキー</span></h3>
                <p className='c-menuText'>スコッチ/ バーボン / ジャパニーズ</p>
                <h3 className='c-menuTitle'>SHOCHU<span>焼酎</span></h3>
                <p className='c-menuText'>芋 / 麦</p>
                <h3 className='c-menuTitle'>SAKE<span>日本酒</span></h3>
                <p className='c-menuText'>冷酒 / 熱燗</p>
                <h3 className='c-menuTitle'>COCKTAIL<span>カクテル</span></h3>
                <p className='c-menuText'>カシスオレンジ / ジントニック<br />ハイボール / モスコミュール<br />焼酎トニック / 冷酒トニック</p>
                <h3 className='c-menuTitle'>SOFT DRINK<span>ソフトドリンク</span></h3>
                <p className='c-menuText'>烏龍茶 / コーラ<br />オレンジジュース / アップルジュース<br />マンゴージュース / ジンジャーエール<br />トニックウォーター</p>
                <h3 className='c-menuTitle'>NON-ALCOHOL COCKTAIL<span>ノンアルコールカクテル</span></h3>
                <p className='c-menuText'>ファイブスター / シャーリーテンプル<br />アップルオレンジ</p>
              </div>
            )}
            </MenuModal>
          </div>
        )}

        <section className='l-gallery'>
          <div className='l-gallery__wrap'>
            <h2 className='c-title01'>GALLERY<p className='c-title01__ja'>ギャラリー</p></h2>
            <GallerySlider
              handleOpenOverlay={() => setOverlay(true)}
              handleCloseOverlay={() => setOverlay(false)}
            />
          </div>
        </section>

        <TopButton topButton={topButton} />
      </main>

      <ClosureModal />
      <Footer />
    </div>
  );
}

export default App;

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

// import required modules
import { Autoplay } from 'swiper/modules';
import { useState } from 'react';
import Modal from 'react-modal';

function GallerySlider() {

  /* 画像ファイル名生成 */
  /**
   * Array.from()メソッド: 画像ファイル名のリストを動的に生成。
   * 第1引数には、配列の長さを指定。
   * 第2引数は、マップ関数。生成された配列の各要素に対してこの関数が呼び出される。
   */
  const imageFileName = Array.from({ length: 9 }, (_, i) => `/prod/gallery/img${String(i + 1).padStart(2, '0')}.jpg`);

  /* クリックで画像モーダル表示 */
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleOpenModal = (targetImage) => {
    setModalOpen(true);
    setSelectedImage(targetImage);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage('');
  }

  return (
    // <Swiper
    //   watchSlidesProgress={true}
    //   slidesPerView={3}
    //   // autoplay={{delay: 1000}}
    //   loop={false}
    //   modules={[Autoplay]}
    //   // speed={3000}
    //   navigation
    //   pagination={{ clickable: true }}
    //   className="mySwiper"
    // >
    //   {imageFileName.map((src, index) => (
    //     <SwiperSlide key={index}>
    //       <img src={src} alt={`ギャラリー画像 ${index + 1}`} className='l-gallery__image' />
    //     </SwiperSlide>
    //   ))}
    // </Swiper>
    <>
      <ul className='c-gallery'>
        {imageFileName.map((src, index) => (
          <li key={index} className='c-gallery__item' onClick={() => handleOpenModal(src)}>
            <img src={src} alt={`ギャラリー画像 ${index + 1}`} className='c-gallery__image' />
          </li>
        ))}
      </ul>

      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        contentLabel='Gallery Modal'
        className='c-modal'
        overlayClassName='c-modal__overlay'
      >
        <button onClick={handleCloseModal} className='c-modal__close'>閉じる</button>
        <img src={selectedImage} alt='ギャラリー画像' className='c-modal__image' />
      </Modal>
    </>
  )
}

export default GallerySlider;
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

// import required modules
import { Autoplay } from 'swiper/modules';

function GallerySlider() {

  /* 画像ファイル名生成 */
  /**
   * Array.from()メソッド: 画像ファイル名のリストを動的に生成。
   * 第1引数には、配列の長さを指定。
   * 第2引数は、マップ関数。生成された配列の各要素に対してこの関数が呼び出される。
   */
  const imageFileName = Array.from({ length: 9 }, (_, i) => `/prod/gallery/img${String(i + 1).padStart(2, '0')}.jpg`);

  return (
    <Swiper
    watchSlidesProgress={true}
    slidesPerView={3}
    // autoplay={{delay: 1000}}
    loop={false}
    modules={[Autoplay]}
    // speed={3000}
    navigation
    pagination={{ clickable: true }}
    className="mySwiper"
  >
    {imageFileName.map((src, index) => (
      <SwiperSlide key={index}>
        <img src={src} alt={`ギャラリー画像 ${index + 1}`} className='l-gallery__image' />
      </SwiperSlide>
    ))}
  </Swiper>
  )
}

export default GallerySlider;
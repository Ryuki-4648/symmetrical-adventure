// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

// import required modules
import { Autoplay } from 'swiper/modules';

function GallerySlider() {
  return (
    <Swiper
    watchSlidesProgress={true}
    slidesPerView={2}
    autoplay={{delay: 1000}}
    loop={true}
    modules={[Autoplay]}
    speed={3000}
    navigation
    pagination={{ clickable: true }}
    className="mySwiper"
  >
    <SwiperSlide><img src="/prod//gallery/img01.jpg" alt="ギャラリー画像" className='l-gallery__image' /></SwiperSlide>
    <SwiperSlide><img src="/prod/gallery/img02.jpg" alt="ギャラリー画像" className='l-gallery__image' /></SwiperSlide>
    <SwiperSlide><img src="/prod/gallery/img03.jpg" alt="ギャラリー画像" className='l-gallery__image' /></SwiperSlide>
    <SwiperSlide><img src="/prod/gallery/img04.jpg" alt="ギャラリー画像" className='l-gallery__image' /></SwiperSlide>
    <SwiperSlide><img src="/prod/gallery/img05.jpg" alt="ギャラリー画像" className='l-gallery__image' /></SwiperSlide>
    <SwiperSlide><img src="/prod/gallery/img06.jpg" alt="ギャラリー画像" className='l-gallery__image' /></SwiperSlide>
    <SwiperSlide><img src="/prod/gallery/img07.jpg" alt="ギャラリー画像" className='l-gallery__image' /></SwiperSlide>
  </Swiper>
  )
}

export default GallerySlider;
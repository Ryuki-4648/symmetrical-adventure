// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

// import required modules
import { Autoplay, EffectCreative } from 'swiper/modules';


function MvSlider() {

  return (
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
  )
}

export default MvSlider;
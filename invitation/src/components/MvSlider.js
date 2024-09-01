// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

// import required modules
import { Autoplay, EffectCreative } from 'swiper/modules';


function MvSlider() {

  const gallerImageFileName = Array.from({ length: 6}, (_, i) => `/prod/img${String(i + 1).padStart(2, '0')}.jpg`)

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
      {gallerImageFileName.map((src, index) => (
        <SwiperSlide key={index}><img src={src} alt="トップのメイン画像" className='main-image' /></SwiperSlide>
      ))}
    </Swiper>
  )
}

export default MvSlider;
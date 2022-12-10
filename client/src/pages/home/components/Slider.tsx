// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper';

export const Slider = () => {
  return (
    <div className='container'>
      <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
        <SwiperSlide>
          <img
            src='https://www.digi-zoom.com.ar/images/home_slider1_camaras.jpg'
            alt='img'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://www.digi-zoom.com.ar/images/home_slider1_camaras.jpg'
            alt='img'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://www.digi-zoom.com.ar/images/home_slider1_camaras.jpg'
            alt='img'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://www.digi-zoom.com.ar/images/home_slider1_camaras.jpg'
            alt='img'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://www.digi-zoom.com.ar/images/home_slider1_camaras.jpg'
            alt='img'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

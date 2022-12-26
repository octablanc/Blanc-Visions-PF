// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Autoplay, Pagination } from 'swiper';
import { offers } from './data';

import styled from 'styled-components';

const Slide = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  place-items: center;

  h2 {
    line-height: normal;
    font-size: 3rem;
  }

  p {
    font-size: 1.6rem;
  }
`;

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
`;

const HeroBackground = styled.div`
  position: absolute;
  content: '';
  display: block;
  width: 50%;
  height: 100%;
  top: 0;
  right: 0;
  background-color: ${(props): string => props.theme.colors.primary};
  clip-path: polygon(7% 0, 54% 0, 100% 100%, 51% 100%);
  z-index: -1;
`;

export const Slider = () => {
  return (
    <HeroContainer className='container'>
      <Swiper
        loop
        navigation
        autoplay={{
          delay: 2300,
          // pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        {offers.map(offer => (
          <SwiperSlide key={offer.id}>
            <Slide>
              <div>
                <h2>{offer.name}</h2>
                <p>{offer.description}</p>
              </div>
              <div>
                <img src={offer.img} alt='hot sale product 1' />
              </div>
            </Slide>
          </SwiperSlide>
        ))}
      </Swiper>
      <hr />
      <HeroBackground></HeroBackground>
    </HeroContainer>
  );
};

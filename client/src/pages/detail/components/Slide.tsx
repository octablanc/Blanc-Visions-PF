import { Swiper, SwiperSlide } from 'swiper/react';


import { Navigation } from 'swiper';
import { useAppDispatch, useAppSelector } from '../../../redux/app/hooks';
import { useEffect, useState } from 'react';
import { getAllProducts } from '../../../redux/slices/products';
import { Container, SlideBox, Img } from '../styled-components/Slide';


export const Slide = () => {

  // const [dataSlider, setDataSlider] = useState<any>()

  const dispatch = useAppDispatch();
  const { products, loading } = useAppSelector((state) => state.productsState);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);


    return (
    <Container>
      <SlideBox navigation={true} modules={[Navigation]} className='mySwiper'>
 
         <SwiperSlide>
          <Img
            src="https://http2.mlstatic.com/D_NQ_NP_889577-MLA41501060479_042020-O.webp"
            alt='img'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_681300-MLA47916761205_102021-O.webp"
            alt='img'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_840319-MLA51390583982_092022-O.webp"
            alt='img'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_641189-MLA44133613502_112020-O.webp"
            alt='img'
          />
        </SwiperSlide>
      </SlideBox>
    </Container>
  );
};

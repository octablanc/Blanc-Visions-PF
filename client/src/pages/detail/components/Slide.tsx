import { Swiper, SwiperSlide } from 'swiper/react';


import { Navigation } from 'swiper';
import { useAppDispatch, useAppSelector } from '../../../redux/app/hooks';
import { useEffect, useState } from 'react';
import { getAllProducts } from '../../../redux/slices/products';
import { Container, SlideBox, Img } from '../styled-components/Slide';


export const Slide = () => {

  // const [dataSlider, setDataSlider] = useState<any>()

  const dispatch = useAppDispatch();
  const { currentProduct } = useAppSelector((state) => state.productsState);
  const { images } = currentProduct;

  let productImages: any = images.map((el: any) => el.url_image)
  
  console.log('images:',images)
  console.log('productImages:', productImages)
  
  console.log('se ven las imagenes?')

  // useEffect(() => {
  //   dispatch(getAllProducts());
  // }, [dispatch]);


    return (
    <Container>
      <SlideBox navigation={true} modules={[Navigation]} className='mySwiper'>
 {productImages?.map((el: any, key: number) => {
  <div key={el.id}>
         <SwiperSlide >
          <Img
            // key= {img.id}
            src={el}
            alt='img'            
          />
        </SwiperSlide>
        </div>
        })}
        
       
        {/* <SwiperSlide>
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_641189-MLA44133613502_112020-O.webp"
            alt='img'
          />
        </SwiperSlide> */}
      </SlideBox>
    </Container>
  );
};

import React, { useRef, useState } from "react";

import styled from "styled-components";

import image from '../styled-components/camara.jpg';
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, HashNavigation } from 'swiper';


// export const Swipper = () => {
//   return (
//     <Swiper
//       // install Swiper modules
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       spaceBetween={50}
//       slidesPerView={3}
//       navigation={true}
//       // pagination={{ clickable: true }}
//       // scrollbar={{ draggable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
//       <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//       <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//     </Swiper>
//   );
// };


const Img = styled.img`
  width: 30vw;
  height: 50vh;
`;

const ImgMin = styled.img`
width: 10vw;
height: 15vh;
`;


export function Swipper() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper"
      >
        <SwiperSlide data-hash="slide1">Slide 1</SwiperSlide>
        <SwiperSlide data-hash="slide2">Slide 2</SwiperSlide>
        <SwiperSlide data-hash="slide3">Slide 3</SwiperSlide>
        <SwiperSlide data-hash="slide4">Slide 4</SwiperSlide>
        <SwiperSlide data-hash="slide5">Slide 5</SwiperSlide>
        <SwiperSlide data-hash="slide6">Slide 6</SwiperSlide>
        <SwiperSlide data-hash="slide7">Slide 7</SwiperSlide>
        <SwiperSlide data-hash="slide8">Slide 8</SwiperSlide>
        <SwiperSlide data-hash="slide9">Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}




// export const Swipper = () => {
//   // const [thumbsSwiper, setThumbsSwiper] = useState();
//   const [thumbsSwiper, setThumbsSwiper] = useState();

//   // FIJARME EN LAS PROPIEDADES DE SWIPE!!!
  
//   return (
//     <>
//       <Swiper 
//         spaceBetween={2}
//         navigation={true}
//         thumbs={{ swiper: thumbsSwiper }}

//         onSwiper={(swiper) => console.log(swiper)}

//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper2"
//       >
//         <SwiperSlide>
//         <Img src={image} alt="imagen del producto" />
//         </SwiperSlide>
//         <SwiperSlide>
//         <Img src={image} alt="imagen del producto" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Img src="https://swiperjs.com/demos/images/nature-4.jpg" />
//         </SwiperSlide>
       
//       </Swiper>
//       <Swiper
//         // onSwiper={setThumbsSwiper}
//         spaceBetween={10}
//         slidesPerView={4}
//         freeMode={true}
//         watchSlidesProgress={true}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <ImgMin src="https://swiperjs.com/demos/images/nature-1.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <ImgMin src="https://swiperjs.com/demos/images/nature-2.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <ImgMin src="https://swiperjs.com/demos/images/nature-3.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <ImgMin src="https://swiperjs.com/demos/images/nature-4.jpg" />
//         </SwiperSlide>
       
//       </Swiper>
//     </>
//   );
// }


import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode, Navigation, } from 'swiper';
// import { Navigation } from "swiper";
// import { Pagination } from "swiper";

//provisoriamente trabajo con 2 fotos
import image from "../styled-components/camara.jpg";
import image2 from "../styled-components/iluminacion.jpg";


// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import "./styles.css";

// import required modules

const Img = styled.img`
  width: 30vw;
  height: 50vh;
`;

const Carrousel = styled(Swiper)`
  width: 30rem;
  height: 30rem;
`;

const Div = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
`;

  // export function Swipper(): JSX.Element {

    export const Swipper = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState();

    const handleChange = (e: any) => {
          setThumbsSwiper(e)
    }
  
    return (
      <>
        <Swiper
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>          
        </Swiper>
        <Swiper
        
          onSwiper={(e) => handleChange(e) }
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>          
        </Swiper>
      </>
    );
  }

  


// export const Swipper = (): JSX.Element => {

//   return (
//     <div>
//       <Div>
//         <Img src={image} alt="imagen del producto" />
//         <p>Favourites</p>
//       </Div>
//       <br />
//       <div>
//         <Carrousel
//           loop={true}
//           navigation={true}
//           // keyboard={true}
//           slidesPerView={1}        >
//           {/* acá tendría que venir el mapeo de las imagenes(.map((item, i) => {....} */}
//           <SwiperSlide>
//             <img src={image} />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={image2} />
//           </SwiperSlide>
//         </Carrousel>
//       </div>
//     </div>
//   );
// };

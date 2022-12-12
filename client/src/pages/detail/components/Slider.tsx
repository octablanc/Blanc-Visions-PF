import { useState } from "react";

import { dataSlider } from "../data";
import { BtnSlider } from "./BtnSlider";
import { Container, ContainerImg, Img } from "../styled-components/Slider";


export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState<number>(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.img.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.img.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.img.length);
    }
  };

  return (
    <Container>
      <ContainerImg>
        <Img
          src={process.env.PUBLIC_URL + `${dataSlider.img}`} //hasta que tenga el endpoint muestro sólo un imagen
          alt="product image"
        />
      </ContainerImg>
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
    </Container>
  );
};

import { useState } from "react";
import Spinner from "../../../../components/Spinner/Spinner";
import { BtnSlider } from "./BtnSlider";
import {
  Container,
  Img,
  Miniatures,
  Thumbnails,
} from "./styled-components/Slider";

export const Slider = ({ images, loading }: any) => {
  const [slideIndex, setSlideIndex] = useState<number>(1);

  let productImages: any = images.map((el: any) => el.url_image);
  console.log(images);

  const nextSlide = () => {
    if (slideIndex < productImages.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === productImages.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(productImages.length);
    }
  };

  return (
    <Container>
      {loading ? (
        <Spinner />
      ) : productImages ? (
        <Img src={productImages[slideIndex - 1]} alt="" />
      ) : (
        <Img src={"imagen no encontrada"} alt="" />
      )}

      <div>
        <BtnSlider className="boton" moveSlide={prevSlide} direction={"prev"} />
        <BtnSlider className="boton" moveSlide={nextSlide} direction={"next"} />
      </div>
      <br />
      <br />
      <Thumbnails>
        {Array.from(productImages, (el: any, key: number) => (
          <Miniatures>
            <img
              className={slideIndex - 1 === key ? "img active" : "img pasive"}
              src={el}
            />
          </Miniatures>
        ))}
      </Thumbnails>
      {/* </> */}
    </Container>
  );
};

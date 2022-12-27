import { MdArrowBackIosNew, MdArrowForwardIos } from '../../../../icons';
import { BtnNext, BtnPrev } from './styled-components/BtnSlider';

export const BtnSlider = ({ direction, moveSlide }: any) => {
  if (direction === "next") {
    return (
      <BtnNext onClick={moveSlide}>
        <MdArrowForwardIos />
      </BtnNext>
    );
  } else {
    return (
      <BtnPrev className= 'prev' onClick={moveSlide}>
        <MdArrowBackIosNew />
      </BtnPrev>
    );
  }
};

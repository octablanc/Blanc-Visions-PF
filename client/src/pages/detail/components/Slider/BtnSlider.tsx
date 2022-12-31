import { MdArrowBackIosNew, MdArrowForwardIos } from '../../../../icons';
import { BtnNext, BtnPrev } from './styled-components/BtnSlider';

export const BtnSlider = ({ direction, moveSlide }: any) => {

  return (
    <>
      {
        direction === 'next' ?
          <BtnNext onClick={moveSlide}>
            <MdArrowForwardIos />
          </BtnNext> 
          : 
          <BtnPrev className='prev' onClick={moveSlide}>
            <MdArrowBackIosNew />
          </BtnPrev>
      }
    </>
  );
};

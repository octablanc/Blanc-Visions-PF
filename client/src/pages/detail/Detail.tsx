import { useState, ChangeEvent, useEffect } from 'react';

import { Slider } from './components/Slider';
import { Slide } from './components/Slide';

import { AiFillStar } from 'react-icons/ai';
import { dataSlider } from './data';
import line from './styled-components/imgLine.png';
import {
  Container,
  Image,
  Title,
  Info,
  CartSection,
  Counter,
  Btn,
} from './styled-components/Detail';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
// import { getproductById } from "../../redux/slices/products";

export const Detail = () => {
  const [counter, setCounter] = useState(0);
  const dispatch = useAppDispatch();
  // const { detail, id } = useAppSelector(state => state.productsState)

  // useEffect(() => {
  //   dispatch(getproductById(detail.id));
  // }, [dispatch]);

  //la función plantea solo el contador x ahora
  const handleOnClickAdd = (number: number = 1): void => {
    setCounter(counter + 1);
  };

  //la función plantea solo el contador x ahora
  const handleOnClickSubstract = (number: number = 1): void => {
    setCounter(counter <= 1 ? 0 : counter - 1);
  };

  //función para manejar carrito o compra
  const handleClick = () => {};

  return (
    <div className='container'>
      <Container>
        <Image>
          <Title>
            <h3>{dataSlider.name}</h3>
            <p>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </p>
          </Title>
          <img src={line} />
          <div>
            <Slide />
          </div>
          {/* <div><Swipper /></div> */}
          {/* {dataSlider &&
            dataSlider.img.map((obj, index) => (
              <div>
                <Slider />
              </div> */}
          {/* ))} */}
        </Image>

        <Info>
          <h3>{`$${dataSlider.price}`}</h3>
          <p>DESCRIPTION{dataSlider.description}</p>
          <p>FEATURES {dataSlider.features}</p>

          <CartSection>
            <p>Cantidad</p>
            <Counter>
              <button name='subtract' onClick={() => handleOnClickSubstract()}>
                -
              </button>
              <div>{counter}</div>
              <button name='add' onClick={(e) => handleOnClickAdd()}>
                +
              </button>
            </Counter>

            <Btn name='addToCart' onClick={handleClick}>
              Agregar al carrito
            </Btn>
            <Btn name='buy' onClick={handleClick}>
              Comprar
            </Btn>
          </CartSection>
        </Info>
      </Container>
    </div>
  );
};

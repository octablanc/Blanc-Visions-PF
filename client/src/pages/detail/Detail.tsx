import { useState, ChangeEvent, useEffect } from "react";
import { Slider } from "./components/Slider";
import { Slide } from "./components/Slide";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import line from "./styled-components/imgLine.png";

import {
  Container,
  Image,
  Info,
  CartSection,
  Counter,
  Btn,
} from "./styled-components/Detail";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import Spinner from "../../components/Spinner/Spinner";

import { useNavigate } from "react-router-dom";
import { addToCart } from '../../redux/slices/Cart'
// import { getproductById } from "../../redux/slices/products";

export const Detail = () => {
  const [counter, setCounter] = useState(0);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  

  const { currentProduct } = useAppSelector(
    (state: any) => state.productsState
  );

  const { name, image, price, description, loading } = currentProduct;

  // useEffect(() => {
  //   dispatch(getproductById(detail.id));
  // }, [dispatch]);

  //la función plantea solo el contador x ahora
  // const handleOnClickAdd = (number: number = 1): void => {
  //   setCounter(counter + 1);
  // };

  //la función plantea solo el contador x ahora
  // const handleOnClickSubstract = (number: number = 1): void => {
  //   setCounter(counter <= 1 ? 0 : counter - 1);
    
  // };

  //función para manejar carrito o compra
  const handleAddToCart = () => {
    dispatch(addToCart(currentProduct)) 
    navigate('/cart')  
  };

  const handlePurchase = () => {};

  return (
    <div className="container">
      {loading ? (
        <Spinner />
      ) : (
        <Container>
          <Image>
            <h3 className="title">{name}</h3>
            <img src={line} />
            <div className="img">
              <img src={image} alt={name} />
            </div>
            <div>{/* <Slide /> */}</div>
            {/* <div><Swipper /></div> */}
            {/* {dataSlider &&
            dataSlider.img.map((obj, index) => (
              <div>
                <Slider />
              </div> */}
            {/* ))} */}
          </Image>

          <Info>
            <div className="icons">
              <h3>{`$${price}`}</h3>
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
            </div>
            <p>DESCRIPTION{description}</p>

            <CartSection>
              {/* <p>Cantidad</p> */}
              {/* <Counter>
                <button
                  name="subtract"
                  onClick={() => handleOnClickSubstract()}
                >
                  -
                </button>
                <div>{counter}</div>
                <button name="add" onClick={(e) => handleOnClickAdd()}>
                  +
                </button>
              </Counter> */}

              <Btn name="addToCart" onClick={() => handleAddToCart()}>
                Agregar al carrito
              </Btn>
              <Btn name="buy" onClick={handlePurchase}>
                Comprar
              </Btn>
            </CartSection>
          </Info>
        </Container>
      )}
    </div>
  );
};

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
import { detailProduct } from "../../redux/slices/products";
import Swipper from "./components/swiper";
// import { getproductById } from "../../redux/slices/products";

export const Detail = () => {
  const [counter, setCounter] = useState(0);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { currentProduct } = useAppSelector(
    (state: any) => state.productsState
  );

  const { name, image, price, description, loading, stock, properties, images } = currentProduct;

  // useEffect(() => {
  //   dispatch(productDetail(id));
  // }, [dispatch]);

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
            {/* <div className="img">                         
              <img src={image} alt={name} />          
              </div> */}
            {/* <div> <Slide /> </div> */}
            {/* <div><Swipper /></div> */}
              <Slider />
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
            <p>Unidades disponibles:{stock}</p>
            {properties?.map((prop: any, key: number) => {
              <ul>
                <p>{prop.name}</p>
                <p>{prop.value}</p>                
              </ul>
              })}

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

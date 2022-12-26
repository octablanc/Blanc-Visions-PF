import { Slider } from "./components/Slider/Slider";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import line from "./styled-components/imgLine.png";

import {
  Container,
  Image,
  Info,
  CartSection,
  Btn,
} from "./styled-components/Detail";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import Spinner from "../../components/Spinner/Spinner";

import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/slices/Cart";
import { ProductProperties } from "./components/productProperties";

export const Detail = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { currentProduct } = useAppSelector(
    (state: any) => state.productsState
  );

  const { name, price, description, loading, stock, properties } =
    currentProduct;

  let productProps = properties.map((el: any) => el.name);
  console.log("properties:", properties);
  console.log("productProps:", productProps);

  const handleAddToCart = () => {
    dispatch(addToCart(currentProduct));
    navigate("/cart");
  };

  //Falta declarar función para checkOut
  const handleCheckOut = () => {};

  return (
    <div className="container">
      {loading ? (
        <Spinner />
      ) : (
        <Container>
          <Image>
            <h3 className="title">{name}</h3>
            <img src={line} />
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
            {/* <p>Descripción</p>
            <p>{description}</p> */}

            <span className="features">Características</span>
            {properties?.map((el: any, key: number) => (
              <ul>
                <hr />
                <span className="list">{el.name}</span>
                <span className="list">{el.value}</span>
              </ul>
              //  <li value={el.name}>{el.name}</li>
              // name= {el.name }
              // value= {el.value}
              // />
            ))}

            <ul>
              <hr />
              <br />
              <span className="stock">Unidades disponibles:</span>
              <span className="stock">{stock}</span>
            </ul>
            <CartSection>
              <Btn name="addToCart" onClick={() => handleAddToCart()}>
                Agregar al carrito
              </Btn>
              <Btn name="buy">
                <form action="http://localhost:3002/checkout" method="POST">
                  <input type="hidden" name="title" value={name} />
                  <input type="hidden" name="price" value={price} />
                  <input type="submit" value="Comprar checkout" />
                </form>
              </Btn>
            </CartSection>
          </Info>
        </Container>
      )}
    </div>
  );
};

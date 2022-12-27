import { Slider } from "./components/Slider/Slider";
import Spinner from "../../components/Spinner/Spinner";
import { AiOutlineStar, AiFillStar } from "../../icons";

import {
  Container,
  Image,
  Info,
  CartSection,
  Btn,
} from "./styled-components/Detail";

import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { useNavigate, useParams } from "react-router-dom";

import { addToCart } from "../../redux/slices/Cart";
import { getProductById } from "../../redux/slices/Cart";
import { useEffect } from "react";

export const Detail = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const product: any = useParams();
  console.log(useParams());
  console.log(product.id);

  useEffect(() => {
    dispatch(getProductById(product.id));
  }, [dispatch]);

  const { currentProduct } = useAppSelector((state) => state.cartState);
  const { loading, name, price, description, stock, properties, images } =
    currentProduct;
  console.log(currentProduct);

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
            <h3>nombre{name}</h3>
            <div>
              <hr />
            </div>
            {/* <img src={line} /> */}
            <Slider loading={loading} images={images} />
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
            <p>Descripción</p>
            <p>{description}</p>

            <span className="features">Características</span>
            {properties?.map((el: any, key: number) => (
              <ul>
                <hr />
                <span className="list">{el.name}</span>
                <span className="list">{el.value}</span>
              </ul>
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
              <Btn name="buy" onClick={handleCheckOut}>
                Comprar
              </Btn>
            </CartSection>
          </Info>
        </Container>
      )}
    </div>
  );
};

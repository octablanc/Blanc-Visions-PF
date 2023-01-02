//components
import { Slider } from "./components/Slider/Slider";
import Spinner from "../../components/Spinner/Spinner";
//icons
import { AiOutlineStar, AiFillStar } from "../../icons";
//styles
import {
  Container,
  Image,
  Info,
  CartSection,
  Btn,
 } from "./styled-components/Detail";
//react
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
//redux
import { getProductById, addToCart } from "../../redux/slices/Cart";
import { useAppSelector, useAppDispatch } from "../../redux/app/hooks";
import { Sales } from "../home/components/Sales/Sales";

export const Detail = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const product: any = useParams();
  console.log(useParams());
  console.log(product.id);

  useEffect(() => {
    //falta agregar un modal de producto inexistente!!
    dispatch(getProductById(product.id));
  }, [dispatch, product.id]);

  const { currentProduct } = useAppSelector((state: any) => state.cartState);
  const {
    loading,
    name,
    price,
    description,
    stock,
    properties,
    images,
    discount,
  } = currentProduct;
  let priceProm = Math.ceil(price * (1 - discount / 100));
  console.log(currentProduct);

  const handleAddToCart = () => {
    dispatch(addToCart(currentProduct));
    navigate("/cart");
  };

  //Falta declarar función para checkOut
  const handleCheckOut = () => { };

  return (
    <div className="container">
      {loading ? (
        <Spinner />
      ) : currentProduct?.id === 0 ? (
        <div className="emptyId">
          <h4>No existe un producto con ese Id</h4>
        </div>
      ) : (
        <Container>
          <Image>
            <h3>{name}</h3>
            <div>
              <hr />
            </div>

            <Slider loading={loading} images={images} />
          </Image>
          <Info>
            <div>
              {discount === 0 ? (
                <h3>{`$${price}`}</h3>
              ) : (
                <div className="icons">
                  <h3> {`$${priceProm}`} </h3>
                  <div className="infoProm">
                    <div className='labelProm'>
                      <span> Ahorras</span>
                      <span>$ {`${price - priceProm}`}</span>
                    </div>
                    <div className='labelProm'>
                      <span className='label'>Antes</span>
                      <span className='priceProm'>{`$${priceProm}`}</span>
                    </div>
                  </div>
                </div>
              )}
              {/* <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div> */}
            </div>
            <p className="features">Descripción</p>
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
              {/* <span className="stock">Unidades disponibles:</span> */}
              {/* <span className="stock">{stock}</span> */}
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
      <br />
      <hr />
      <br />
      <Sales />
      <br />
    </div>
  );
};

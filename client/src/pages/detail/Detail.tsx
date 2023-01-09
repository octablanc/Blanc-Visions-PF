//components
import { Slider } from "./components/Slider/Slider";
//styles
import {
  Container,
  Image,
  Info,
  CartSection,
  Btn,
} from './styled-components/Detail';

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../redux/app/hooks';
import { getProductById } from '../../redux/slices/products';
import Spinner from '../../components/Spinner/Spinner';
import { Sales } from '../home/components/Sales/Sales';
import { FlashMsg } from '../cart/components/FlashMsg/FlashMsg';
import { Review } from './components/Review';
import { addProductCart } from '../../redux/slices/Cart';

// import Login from "../../components/login/Login";

export const Detail = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const url = useParams();
  const idParams = url.id;
  // const [success, setSuccess] = useState(false);
  // const [msg, setMsg] = useState("");
  const { loading } = useAppSelector((state) => state.productsState);
  const { currentProduct } = useAppSelector(
    (state: any) => state.productsState
  );
  const { user } = useAppSelector((state) => state.userState);
  const { cart } = useAppSelector((state) => state.cartState);

  const {
    id,
    description,
    discount,
    image,
    images,
    name,
    price,
    properties,
    ratings,
    stock,
  } = currentProduct;
  let priceProm = Math.ceil(price * (1 - discount / 100));

  useEffect(() => {
    if (idParams !== undefined) dispatch(getProductById(+idParams));
    // return () => {resetDetail()}
    // console.log('MONTANDO');
  }, [dispatch, idParams]);

  const findProductCart = cart.some((c) => c.productId === id);
  // console.log(findProductCart);
  // console.log('DET CART', cart);
  // console.log('ID=>', id);
  // console.log('\n');
  const handleAddToCart = () => {
    const totalPriceProduct = discount === 0 ? price : price - (price*discount)/100;
    dispatch(addProductCart({ userId: 1, quantity: 1, price:totalPriceProduct, productId: id }));
    navigate('/cart');
  };

  const handleLogin = () => {
    // setSuccess(true);
    // setMsg("login");
  };

  if (loading) return <Spinner />;
  if (!currentProduct.id && !loading) return <h1>NADA</h1>;
  return (
    <div className="container">
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
                  <div className="labelProm">
                    <span> Ahorras</span>
                    <span>$ {`${price - priceProm}`}</span>
                  </div>
                  <div className="labelProm">
                    <span className="label">Antes</span>
                    <span className="priceProm">{` $${price}`}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <p className="features">Descripción</p>
          <p>{description}</p>

          <span className="features">Características</span>
          {properties?.map((el: any, key: number) => (
            <ul key={key}>
              <hr />
              <span className="list">{el.name}</span>
              <span className="list">{el.value}</span>
            </ul>
          ))}
          <p>Disponible : {stock}</p>
          <CartSection>
            {user ? (
              <div>
                {findProductCart ? (
                  <Btn name="addToCart">Ya agregado</Btn>
                ) : (
                  <Btn name="addToCart" onClick={handleAddToCart}>
                    Agregar al carrito
                  </Btn>
                )}
              </div>
            ) : (
              <Btn name="login" onClick={() => handleLogin()}>
                Logeo
              </Btn>
            )}
            {/* {success && <FlashMsg msg={msg}>{msg}</FlashMsg>} */}
          </CartSection>
        </Info>
      </Container>
      <Review ratings={ratings} />

      {/* <Sales /> */}
    </div>
  );
};
// TODO => VAlidar si el producto ya esta agregado en el carrito

//components
import { Slider } from './components/Slider/Slider';
import Spinner from '../../components/Spinner/Spinner';
//icons
import { AiOutlineStar, AiFillStar } from '../../icons';
//styles
import {
  Container,
  Image,
  Info,
  CartSection,
  Btn,
} from './styled-components/Detail';
//react
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
//redux
import {
  getProductById,
  addToCart,
  cleanDetail,
} from "../../redux/slices/Cart";
import { useAppSelector, useAppDispatch } from "../../redux/app/hooks";
import { Sales } from "../home/components/Sales/Sales";
// import Login from "../../components/login/Login";
import { FlashMsg } from "../cart/components/FlashMsg/FlashMsg";
import { Review } from "../detail/components/Review";


export const Detail = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const product: any = useParams();
  const [success, setSuccess] = useState(false);
  const [msg, setMsg] = useState("");

  const resetDetail = () => {
    return {
      id: 0,
      name: "",
      code: "",
      description: "",
      image: "",
      price: 0,
      priceProm: 0,
      discount: 0,
      stock: 0,
      entrega: "",
      id_category: 0,
      state: true,
      category: "",
      properties: [],
      images: [],
      loading: false,
    };
  };

  useEffect(() => {
    let detailCleaned = {
      id: 0,
      name: "",
      code: "",
      description: "",
      image: "",
      price: 0,
      priceProm: 0,
      discount: 0,
      stock: 0,
      entrega: "",
      id_category: 0,
      state: true,
      category: "",
      properties: [],
      images: [],
      loading: false,
    };
    dispatch(getProductById(product.id));
    // return () => {resetDetail()}
    return () => {
      dispatch(cleanDetail(detailCleaned));
    };
  }, [dispatch, product.id]);

  const { currentProduct, cartTotalAmount, cartTotalQuantity } = useAppSelector(
    (state: any) => state.cartState
  );
  const { loading, user } = useAppSelector((state) => state.userState);

  const {
    // loading,
    name,
    price,
    description,
    stock,
    properties,
    images,
    discount,
  } = currentProduct;
  let priceProm = Math.ceil(price * (1 - discount / 100));
  // console.log(currentProduct);

  const handleAddToCart = () => {
    dispatch(addToCart(currentProduct));
    navigate('/cart');
  };

  const handleLogin = () => {
    setSuccess(true);
    setMsg("login");
  };

  return (
    <div className='container'>
      {loading ? (
        <Spinner />
      ) : currentProduct?.id === 0 ? (
        <div className='emptyId'>
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
                <div className='icons'>
                  <h3> {`$${priceProm}`} </h3>
                  <div className='infoProm'>
                    <div className='labelProm'>
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
              {/* <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div> */}
            </div>
            <p className='features'>Descripción</p>
            <p>{description}</p>

            <span className='features'>Características</span>
            {properties?.map((el: any, key: number) => (
              <ul>
                <hr />
                <span className='list'>{el.name}</span>
                <span className='list'>{el.value}</span>
              </ul>
            ))}

            {/* <ul>
              <hr />
              <br />
              <span className="stock">Unidades disponibles:</span>
              <span className="stock">{stock}</span>
            </ul> */}
            <CartSection>
              {user ? (
                <Btn name="addToCart" onClick={() => handleAddToCart()}>
                  Agregar al carrito
                </Btn>
              ) : (
                <Btn name="login" onClick={() => handleLogin()}>
                  Agregar al carrito
                </Btn>
              )}
              {success ? <FlashMsg msg={msg}>{msg}</FlashMsg> : ""}

              <form action="http://localhost:3001/checkout" method="POST">
                <input
                  type='hidden'
                  name='title'
                  value={`Productos (${cartTotalQuantity})`}
                />
                <input type='hidden' name='price' value={cartTotalAmount} />
                <Btn type='submit'>Comprar</Btn>
              </form>
            </CartSection>
          </Info>
          <Review ratings={currentProduct.ratings} />
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

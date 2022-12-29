import { useAppDispatch, useAppSelector } from '../../../../redux/app/hooks';
import { NavLink } from 'react-router-dom';
/*............comienzan estilos........... */

import { MouseEvent, useEffect, useState } from 'react';
import {
  decreaseQuantity,
  increaseQuantity,
  emptyCart,
  getTotal,
  removeFromCart,
} from '../../../../redux/slices/Cart';
import { BsArrowLeftSquare } from 'react-icons/bs';
import {
  Div,
  Div2,
  Container,
  Contain,
  Buttons,
  Btn,
  Operators,
  Quantity,
  TotalDiv,
  Line,
  Product,
  Remove,
  Back,
  Titles,
} from '../../styled-components/styles';
import { display, fontSize } from '@mui/system';
import cart from '../../styled-components/cart.png'

/*................terminan estilos............... */

export const CartDetail = () => {
  const {
    cartItems,
    itemTotalQuantity,
    itemTotalAmount,
    cartTotalQuantity,
    cartTotalAmount,
  } = useAppSelector((state) => state.cartState);

  // const { currentProduct } = useAppSelector((state) => state.productsState);
  // const { name, image, price } = currentProduct;

  // console.log('price:', price);
  console.log('itemTotalAmount:', itemTotalAmount);
  console.log('itemTotalQuantity:', itemTotalQuantity);
  console.log('cartItems:', cartItems);

  const [counter, setCounter] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTotal(cartItems));
  }, [
    itemTotalQuantity,
    cartTotalQuantity,
    cartTotalAmount,
    cartItems,
    dispatch,
  ]);

  const handleSubstractItem = (cartItem: any) => {
    if (cartItem.cartQuantity > 1) {
      dispatch(decreaseQuantity(cartItem));
    } else {
      if (cartItem.cartQuantity === 1) {
        dispatch(decreaseQuantity(cartItem));
        dispatch(removeFromCart(cartItem));
      }
    }
  };

  const handleAddItem = (cartItem: any) => {
    if (cartItem.stock === 0) {
      return;
    } else {
      if (cartItem.stock > 0) {
        dispatch(increaseQuantity(cartItem));
      }
    }
  };

  const handleRemoveItem = (cartItem: any) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleEmptyCart = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(emptyCart(e));
  };

  return (
    <Container>
      {cartItems.length < 1 ? (
        <div className='emptyCart'>
          <img src={cart} />
          <div>
            <p>Tu carrito esta vacío</p>
            <NavLink to='/products'>
              <Back>Comienza a comprar...</Back>
            </NavLink>
          </div>
        </div>
      ) : (
        // ******************************
        <Contain>
          <div>
            {/* <Div className='titles'> */}
            <Titles style={{ fontSize: '2rem' }}>
              <p>Productos</p>
              <p>Precio</p>
              <p>Cantidad</p>
              <p>Total</p>
            </Titles>

            {/* <Div> */}
            {cartItems?.map((cartItem) => (
              <Div key={cartItem.id}>
                <Product>
                  <img src={cartItem.image} alt='imagen del producto' />
                  <div className='product'>
                    <p> {cartItem.name}</p>
                  </div>
                </Product>

                <div>{`${cartItem.price}`}</div>
                <Quantity>
                  <Operators>
                    <button
                      name='subtract'
                      onClick={() => handleSubstractItem(cartItem)}
                    >
                      -
                    </button>
                    <div>{cartItem.cartQuantity}</div>
                    <button name='add' onClick={() => handleAddItem(cartItem)}>
                      +
                    </button>
                  </Operators>
                </Quantity>
                <div>${cartItem.price * cartItem.cartQuantity}</div>
                <Remove onClick={() => handleRemoveItem(cartItem)}>
                  Eliminar producto
                </Remove>
              </Div>
            ))}
          </div>
          {/* </Div> */}
          <Div2>
            <TotalDiv>
              <Line>
                <p>Productos</p>
                <p>{cartTotalQuantity}</p>
              </Line>
              <Line>
                <p>Subtotal</p>
                <p>$ {cartTotalAmount}</p>
              </Line>
            </TotalDiv>
            <Buttons>
              <form action='http://localhost:3002/checkout' method='POST'>
                <input type='hidden' name='title' value='nada' />
                <input type='hidden' name='price' value={cartTotalAmount} />
                <Btn name='buy'>
                  <button type='submit'> Finalizar Compra checkout</button>
                </Btn>
              </form>
              <div>
                <NavLink to='/products'>
                  <Btn>Continuar comprando</Btn>
                </NavLink>
              </div>
              <Btn onClick={(e) => handleEmptyCart(e)}>Vaciar carrito</Btn>
            </Buttons>
          </Div2>
        </Contain>
      )}
    </Container>
  );
};

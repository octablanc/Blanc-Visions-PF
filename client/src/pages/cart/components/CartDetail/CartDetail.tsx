import { useAppDispatch, useAppSelector } from '../../../../redux/app/hooks';
import { NavLink } from 'react-router-dom';
/*............comienzan estilos........... */

import styled from 'styled-components';
import { useState } from 'react';
import { addToCart, delItem } from '../../../../redux/slices/Cart/cartSlice';
import { BsArrowLeftSquare } from 'react-icons/bs';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .titles {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    font-size: 2rem;
    align-items: center;
  }
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 3rem;
`;

const Quantity = styled.div`
  /* background: yellow; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Operators = styled.div`
  /* background-color: red; */
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-column-gap: 1rem;
  border-color: #c2ad94;
  margin-top: -2rem;
  width: 10rem;
  div {
    font-size: 2rem;
    align-self: center;
  }
  button {
    border: none;
    color: #8b7c69;
    font-size: 2rem;
    font-weight: bold;
    background: transparent;
    cursor: pointer;
  }
`;

const Buttons = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;

const Btn = styled.button`
  border-radius: 3px;
  margin: 5px;
`;

/*................terminan estilos............... */

export const CartDetail = () => {
  const {
    cartItems,
    itemTotalQuantity,
    itemTotalAmount,
    cartTotalQuantity,
    cartTotalAmount,
  } = useAppSelector((state) => state.cartState);

  const { currentProduct } = useAppSelector((state) => state.productsState);
  const { name, image, price } = currentProduct;

  console.log('price:', price);
  console.log('itemTotalAmount:', itemTotalAmount);
  console.log('itemTotalQuantity:', itemTotalQuantity);
  console.log('cartItems:', cartItems);

  const [counter, setCounter] = useState(0);
  const dispatch = useAppDispatch();

  //la función plantea solo el contador x ahora
  const handleSubstractItem = (number: number = 1): void => {
    setCounter(counter <= 1 ? 0 : counter - 1);
    dispatch(delItem(cartItems));
  };

  const handleAddItem = (number: number = 1): void => {
    setCounter(counter + 1);
    dispatch(addToCart(cartItems));
  };

  return (
    <Container>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className='emptyCart'>
          <p>Your Cart is empty</p>
          <NavLink to='/products'>
            <p>Start Shopping</p>
            <BsArrowLeftSquare />
          </NavLink>
        </div>
      ) : (
        <div>
          <div className='titles'>
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>

          {/* <Div> */}
          {cartItems?.map((cartItem) => (
            <Div key={cartItem.id}>
              <div>
                <img src={cartItem.image} alt='imagen del producto' />
                <div className='product'>
                  <h3> {cartItem.name}</h3>
                  <button>Remove</button>
                </div>
              </div>
              <div>{`${cartItem.price}`}</div>
              <Quantity>
                <Operators>
                  <button name='subtract' onClick={() => handleSubstractItem()}>
                    -
                  </button>
                  <div>{cartItem.cartQuantity}</div>
                  <button name='add' onClick={() => handleAddItem()}>
                    +
                  </button>
                </Operators>
              </Quantity>
              <div>${cartItem.price * cartItem.cartQuantity}</div>
            </Div>
          ))}
          {/* </Div> */}
          <div className='Amount'>
            <span>Subtotal</span>
            <span>{itemTotalQuantity * price}</span>
          </div>
          <Buttons>
            <Btn>Empty Cart</Btn>
            <Btn>Checkout</Btn>
            <div>
              <NavLink to='/products'>
                <Btn>Continue Shopping</Btn>
              </NavLink>
            </div>
          </Buttons>
        </div>
      )}
    </Container>
  );
};

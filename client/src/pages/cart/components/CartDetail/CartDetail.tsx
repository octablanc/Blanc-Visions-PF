import { useAppDispatch, useAppSelector } from "../../../../redux/app/hooks";
import { NavLink } from "react-router-dom";
/*............comienzan estilos........... */

import styled from "styled-components";
import { MouseEvent, useEffect, useState } from "react";
import {
  decreaseQuantity,
  increaseQuantity,
  emptyCart,
  getTotal,
  removeFromCart
} from '../../../../redux/slices/Cart';
import { BsArrowLeftSquare } from "react-icons/bs";


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

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTotal(cartItems));
  }, [itemTotalQuantity, cartTotalQuantity, cartTotalAmount, dispatch]);

  const handleSubstractItem = (cartItem: any) => {
    dispatch(decreaseQuantity(cartItem));
  };

  const handleAddItem = (cartItem: any) => {
    dispatch(increaseQuantity(cartItem));
  };

  const handleRemoveItem = (cartItem: any) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleEmptyCart = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(emptyCart(e));
  };

  return (
    <Container>
      <h2>Shopping Cart</h2>
      {cartItems.length < 1 ? (
        <div className="emptyCart">
          <p>Your Cart is empty</p>
          <NavLink to="/products">
            <p>Start Shopping</p>
            <BsArrowLeftSquare />
          </NavLink>
        </div>
      ) : (
        <div>
          <div className="titles">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>

          {/* <Div> */}
          {cartItems?.map((cartItem) => (
            <Div key={cartItem.id}>
              <div>
                <img src={cartItem.image} alt="imagen del producto" />
                <div className="product">
                  <h3> {cartItem.name}</h3>
                  <button onClick={() => handleRemoveItem(cartItem)}>
                    Remove
                  </button>
                </div>
              </div>
              <div>{`${cartItem.price}`}</div>
              <Quantity>
                <Operators>
                  <button
                    name="subtract"
                    onClick={() => handleSubstractItem(cartItem)}
                  >
                    -
                  </button>
                  <div>{cartItem.cartQuantity}</div>
                  <button name="add" onClick={() => handleAddItem(cartItem)}>
                    +
                  </button>
                </Operators>
              </Quantity>
              <div>${cartItem.price * cartItem.cartQuantity}</div>
            </Div>
          ))}
          {/* </Div> */}
          <div className="Amount">
            <span>Total Products</span>
            <span>{cartTotalQuantity}</span>
            <span>Subtotal</span>
            <span>{cartTotalAmount}</span>
          </div>
          <Buttons>
            <Btn onClick={(e) => handleEmptyCart(e)}>Empty Cart</Btn>
            <Btn>Checkout</Btn>
            <div>
              <NavLink to="/products">
                <Btn>Continue Shopping</Btn>
              </NavLink>
            </div>
          </Buttons>
        </div>
      )}
    </Container>
  );
};

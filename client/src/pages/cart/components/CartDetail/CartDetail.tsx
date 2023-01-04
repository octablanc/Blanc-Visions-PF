import { useAppDispatch, useAppSelector } from "../../../../redux/app/hooks";
import { NavLink } from "react-router-dom";
import { MouseEvent, useEffect, useState } from "react";

import {
  decreaseQuantity,
  increaseQuantity,
  emptyCart,
  removeFromCart,
  getDiscountTotal,
  BoughtPro,
  manteinQuantity,
} from "../../../../redux/slices/Cart";

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
  // Input,
  BtnCheck,
} from "../../styled-components/styles";
import { display, fontSize } from "@mui/system";
import cart from "../../styled-components/cart.png";
import React from "react";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { BOLD_WEIGHT } from "jest-matcher-utils";
import { FlashMsg } from "../FlashMsg/FlashMsg";
import { postOrderBuy } from "../../../../services/services";


export const CartDetail = () => {
  const {
    cartItems,
    itemTotalQuantity,
    cartTotalQuantity,
    cartTotalAmount,
    currentProduct,
  } = useAppSelector((state) => state.cartState);
  const { discount, stock } = currentProduct;

  const  user  = useAppSelector(({userState})=> userState.user);
  
  const [success, setSuccess] = useState(false);
  const [msg, setMsg] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDiscountTotal(cartItems));
    setSuccess(true);
    setMsg('Tienes productos en tu carrito')
  }, [itemTotalQuantity, cartItems, dispatch]);

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
    if (cartItem.cartQuantity === stock) {
      dispatch(manteinQuantity(cartItem));
      setSuccess(true)
      setMsg('Stock agotado')      
    } else {
      if (stock > 0) {
        dispatch(increaseQuantity(cartItem));     
      }
    }
  };

  // console.log(cartItems);

  const handleRemoveItem = (cartItem: any) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleEmptyCart = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(emptyCart(e));
  };

   const handleSubmit = () => {
    const orderBuy = {
      priceTotalDiscount: cartTotalAmount,
      discount: discount,
      state: true,
      postalCode: 199,
      street: "calle falsa",
      height: "12943",
      city: "varelaa",
      quantityProducts: cartTotalQuantity,
      dues: 130,
      userId: user?.id,
      buy: true,
      productOrders: cartItems.map((prod: any) => {
        return {
          productId: prod.id,
          quantity: prod.cartQuantity,
          price: prod.price,
        };
      }),
    };
    postOrderBuy(orderBuy);
  };

  return (
    <Container>
      {cartItems.length < 1 ? (
        <div className="emptyCart">
          <img src={cart} />
          <div>
            <p>Tu carrito esta vacío</p>
            <NavLink to="/products">
              <Back>Comienza a comprar...</Back>
            </NavLink>
          </div>
        </div>
      ) : (
        // ******************************
        <Contain>
          <div>
            <>
              <Titles>
                <p>Productos</p>
                <p>Precio</p>
                <p>Cantidad</p>
                <p>Total</p>
              </Titles>
              {cartItems?.map((cartItem) => (
                <Div key={cartItem.id}>
                  <Product>
                    <img src={cartItem.image} alt="imagen del producto" />
                    <div className="product">
                      <p> {cartItem.name}</p>
                    </div>
                  </Product>
                  {cartItem.discount === 0 ? (
                    <div>{`${cartItem.price}`}</div>
                  ) : (
                    <div>
                      <div className="discountPrice">
                        {`${Math.ceil(
                          cartItem.price * (1 - cartItem.discount / 100)
                        )}`}
                      </div>
                      <div className="labelProm">
                        <span>Antes:</span>
                        <span className="priceProm">{`${cartItem.price}`}</span>
                      </div>
                    </div>
                  )}
                  <Quantity>
                    <Operators>
                      <button
                        name="subtract"
                        onClick={() => handleSubstractItem(cartItem)}
                      >
                        -
                      </button>
                      <div>{cartItem.cartQuantity}</div>

                      <div className="labelProm">
                        <span>Disponible:</span>
                        <span className="priceProm">{`${stock - cartItem.cartQuantity}`}</span>
                      </div>

                      <button
                        name="add"
                        onClick={() => handleAddItem(cartItem)}
                      >
                        +
                      </button>
                    </Operators>
                  </Quantity>            

                  {cartItem.discount === 0 ? (
                    <div>${cartItem.price * cartItem.cartQuantity}</div>
                  ) : (
                    <div>
                      ${Math.ceil(cartItem.price * (1 - cartItem.discount / 100)) * cartItem.cartQuantity}
                    </div>
                  )}
                  <Remove onClick={() => handleRemoveItem(cartItem)}>
                    Eliminar producto
                  </Remove>       
                  {success ? <FlashMsg msg={msg}>{msg}</FlashMsg>: ''}           
                </Div>
              ))}
            </>
          </div>
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
              <form action="https://blanc-visions-pf-kingcomm.up.railway.app/checkout" method="POST">
                <input
                  type="hidden"
                  name="title"
                  value={`Productos (${cartTotalQuantity})`}
                />
                <input type="hidden" name="price" value={cartTotalAmount} />
                <BtnCheck type="submit" onClick={handleSubmit}>
                  {" "}
                  Finalizar compra
                </BtnCheck>
              </form>          
              <div>
                <NavLink to="/products">
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

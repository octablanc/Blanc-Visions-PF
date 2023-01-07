import { useAppDispatch, useAppSelector } from '../../../../redux/app/hooks';
import { NavLink } from 'react-router-dom';
import { MouseEvent, useEffect, useState } from 'react';


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
} from '../../styled-components/styles';
// import { display, fontSize } from "@mui/system";
import cart from '../../styled-components/cart.png';
// import React from "react";
// import MuiAlert, { AlertProps } from "@mui/material/Alert";
// import { BOLD_WEIGHT } from "jest-matcher-utils";
import { FlashMsg } from '../FlashMsg/FlashMsg';
import { postOrderBuy } from '../../../../services/services';

export const CartDetail = () => {
  
  // const { discount, stock } = currentProduct;

  const { user, localUser } = useAppSelector((state) => state.userState);

  const [success, setSuccess] = useState(false);
  const [msg, setMsg] = useState('');

  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   // dispatch(getDiscountTotal(cartItems));
  //   setSuccess(true);
  //   setMsg('Tienes productos en tu carrito');
  // }, [itemTotalQuantity, cartItems, dispatch]);

  const handleSubstractItem = (cartItem: any) => {
    if (cartItem.cartQuantity > 1) {
      // dispatch(decreaseQuantity(cartItem));
    } else {
      if (cartItem.cartQuantity === 1) {
        // dispatch(decreaseQuantity(cartItem));
        // dispatch(removeFromCart(cartItem));
      }
    }
  };

  const handleAddItem = (cartItem: any) => {
    if (cartItem.stock === 0) {
      // dispatch(manteinQuantity(cartItem));
      setSuccess(true);
      setMsg('Stock agotado');
    } else {
      if (cartItem.stock > 0) {
        // dispatch(increaseQuantity(cartItem));
      }
    }
  };

  const handleRemoveItem = (cartItem: any) => {
    // dispatch(removeFromCart(cartItem));
  };

  const handleEmptyCart = (e: MouseEvent<HTMLButtonElement>) => {
    // dispatch(emptyCart(e));
  };

  // if(itemCart === 0) return (<ComponenteCarritoVacio />)
  return (
    <Container>
      {/* Titulos de detalles del carro */}
      {/* Componente de producto en el cart (add remode quantity) */}
      {/* Vaciar todo el Carro */}
      {/* Agrega a la orden de compra */}
    </Container>
  );
};

// <Container>
//       {cartItems.length < 1 ? (
//         <div className="emptyCart">
//           <img src={cart} />
//           <div>
//             <p>Tu carrito esta vacío</p>
//             <NavLink to="/products">
//               <Back>Comienza a comprar...</Back>
//             </NavLink>
//           </div>
//         </div>
//       ) : (
//         // ******************************
//         <Contain>
//           <div>
//             <>
//               <Titles>
//                 <p>Productos</p>
//                 <p>Precio</p>
//                 <p>Cantidad</p>
//                 <p>Total</p>
//               </Titles>
//               {cartItems?.map((cartItem) => (
//                 <Div key={cartItem.id}>
//                   <Product>
//                     <img src={cartItem.image} alt="imagen del producto" />
//                     <div className="product">
//                       <p> {cartItem.name}</p>
//                     </div>
//                   </Product>
//                   {cartItem.discount === 0 ? (
//                     <div>{`${cartItem.price}`}</div>
//                   ) : (
//                     <div>
//                       <div className="discountPrice">
//                         {`${Math.ceil(
//                           cartItem.price * (1 - cartItem.discount / 100)
//                         )}`}
//                       </div>
//                       <div className="labelProm">
//                         <span>Antes:</span>
//                         <span className="priceProm">{`${cartItem.price}`}</span>
//                       </div>
//                     </div>
//                   )}
//                   <Quantity>
//                     <Operators>
//                       <button
//                         name="subtract"
//                         onClick={() => handleSubstractItem(cartItem)}
//                       >
//                         -
//                       </button>
//                       <div>{cartItem.cartQuantity}</div>
//                       <button
//                         name="add"
//                         onClick={() => handleAddItem(cartItem)}
//                       >
//                         +
//                       </button>
//                     </Operators>
//                     <div className="labelProm">
//                         <span>Stock:</span>
//                         <span >{cartItem.stock === 0 ? ' Agotado' : cartItem.stock}</span>
//                       </div>
//                   </Quantity>

//                   {cartItem.discount === 0 ? (
//                     <div>${cartItem.price * cartItem.cartQuantity}</div>
//                   ) : (
//                     <div>
//                       ${Math.ceil(cartItem.price * (1 - cartItem.discount / 100)) * cartItem.cartQuantity}
//                     </div>
//                   )}
//                   <Remove onClick={() => handleRemoveItem(cartItem)}>
//                     Eliminar producto
//                   </Remove>
//                   {success ? <FlashMsg msg={msg}>{msg}</FlashMsg>: ''}
//                 </Div>
//               ))}
//             </>
//           </div>
//           {/* </Div> */}
//           <Div2>
//             <TotalDiv>
//               <Line>
//                 <p>Productos</p>
//                 <p>{cartTotalQuantity}</p>
//               </Line>
//               <Line>
//                 <p>Subtotal</p>
//                 <p>$ {cartTotalAmount}</p>
//               </Line>
//             </TotalDiv>
//             <Buttons>
//               <form action="https://blanc-visions-pf-kingcomm.up.railway.app/checkout" method="POST">
//                 <input
//                   type="hidden"
//                   name="title"
//                   value={`Productos (${cartTotalQuantity})`}
//                 />
//                 <input type="hidden" name="price" value={cartTotalAmount} />
//                 <BtnCheck type="submit" onClick={() => console.log("HADEL SUBMIT")}>
//                   {" "}
//                   Finalizar compra
//                 </BtnCheck>
//               </form>
//               <div>
//                 <NavLink to="/products">
//                   <Btn>Continuar comprando</Btn>
//                 </NavLink>
//               </div>
//               <Btn onClick={(e) => handleEmptyCart(e)}>Vaciar carrito</Btn>
//             </Buttons>
//           </Div2>
//         </Contain>
//       )}
//     </Container>

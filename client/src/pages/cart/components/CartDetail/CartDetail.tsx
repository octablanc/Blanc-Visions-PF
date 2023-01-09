import { useAppDispatch, useAppSelector } from "../../../../redux/app/hooks";
import { NavLink, useNavigate } from "react-router-dom";
import { MouseEvent, useEffect, useState } from "react";

import { Container } from "../../styled-components/styles";
// import { display, fontSize } from "@mui/system";
import cart from "../../styled-components/cart.png";
// import React from "react";
// import MuiAlert, { AlertProps } from "@mui/material/Alert";
// import { BOLD_WEIGHT } from "jest-matcher-utils";
import { FlashMsg } from "../FlashMsg/FlashMsg";
import { postOrderBuy } from "../../../../services/services";
import {
  deleteCartUser,
  deleteProductCart,
  getCartUser,
  setQuantityCart,
} from "../../../../redux/slices/Cart";
import { Btn } from "../../../detail/styled-components/Detail";
import { Shipping } from "../../../Shipping/Shipping";

export const CartDetail = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.userState);
  const { cart, loadingBtnSet, update, priceTotalCart, quantityTotalCart } =
    useAppSelector((state) => state.cartState);
  const [success, setSuccess] = useState(false);
  const [msg, setMsg] = useState("");
  const [shipping, setShipping] = useState(false);
  useEffect(() => {
    if (user) {
      dispatch(getCartUser(user.id));
    }
    setSuccess(true);
    setMsg("Tienes productos en tu carrito");
  }, [dispatch, update]);
  // console.log("CART => ",cart)

  const handleSetQuantity = (
    typeSet: boolean,
    id: number,
    quantity: number,
    stock: number
  ) => {
    if (typeSet) {
      if (quantity === stock) return 1;
      return dispatch(setQuantityCart({ id, quantity: quantity + 1 }));
    }

    if (quantity === 1) return dispatch(deleteProductCart(id));
    dispatch(setQuantityCart({ id, quantity: quantity - 1 }));
  };
  const handleDeleteProductCart = (id: number) =>
    dispatch(deleteProductCart(id));
  const handleDeleteCart = () => dispatch(deleteCartUser(user?.id));

  const setNumber = (numero: number) => {
    let partesNumero = numero.toString().split(".");
    partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return partesNumero.join(".");
  };
  const handleNavidateProduct = (id: number) => navigate(`/products/${id}`);

  const handleCheckout = () => {
    setShipping(true);
  }

  // if (!cart.length)
  //   return (
  //     <div className="emptyCart">
  //       {/* <img src={cart} /> */}
  //       <div>
  //         <p>Tu carrito esta vacío</p>
  //         <NavLink to="/products">
  //           <button>Comienza a comprar...</button>
  //         </NavLink>
  //       </div>
  //     </div>
  //   );
  return (
    <Container>
      <div className="container__products__cart">
        {cart.map((c) => {
          console.log("c=>", c);
          const { id, name, discount, price, stock, image } = c.product;
          const priceDiscount: number = price - (price * discount) / 100;
          return (
            <div key={c.id} className="container__un__product">
              <img src={image} alt="foto del procto" className="img__pcart" />
              <h3
                className="name__pcart"
                onClick={() => handleNavidateProduct(id)}
              >
                {name}
              </h3>
              <div className="container__calculo">
                {discount === 0 ? (
                  <p className="price__pcart">Price {setNumber(price)}</p>
                ) : (
                  <>
                    <p>Antes {setNumber(price)}</p>
                    <p>Despues {setNumber(priceDiscount)}</p>
                  </>
                )}
              </div>
              <div className="container__btn">
                <button
                  onClick={() =>
                    handleSetQuantity(false, c.id, c.quantity, stock)
                  }
                  disabled={loadingBtnSet}
                >
                  -
                </button>
                <p>quantity:{c.quantity}</p>
                <button
                  onClick={() =>
                    handleSetQuantity(true, c.id, c.quantity, stock)
                  }
                  disabled={loadingBtnSet}
                >
                  +
                </button>
                <p>stock:{stock}</p>
                <button onClick={() => handleDeleteProductCart(c.id)}>
                  Eliminar Producto
                </button>
                <p>Price total: {setNumber(c.price)}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="container__data">
        <p>precio total del carrito : {setNumber(priceTotalCart)}</p>
        <p>Cantidad de Productos : {quantityTotalCart}</p>
        <Btn onClick={() => handleCheckout()}>Finalizar Compra</Btn>
        {shipping ? <Shipping /> : <></>}
        <Btn onClick={() => navigate("/products")}>Continuar comprando</Btn>
        <Btn onClick={handleDeleteCart}>Vaciar Carrito</Btn>
      </div>
    </Container>
  );
};

// Darle funcionalidad a "FINALIZAR COMPRA"

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

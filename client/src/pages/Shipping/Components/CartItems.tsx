import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/app/hooks";
import { CartState, getDiscountTotal } from "../../../redux/slices/Cart";
import { Checkout } from "./Checkout";
import { Div, Miniatures } from "./styled-components/CartItems";

export const CartProducts = () => {
  const { cartItems, cartTotalAmount, itemTotalQuantity } = useAppSelector(
    (state) => state.cartState
  );

  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(getDiscountTotal(cartItems))
  }, [itemTotalQuantity, cartItems, dispatch])

  return (
    <div>
      <h3>Tu compra</h3>
      {cartItems?.map((item: any) => (
        <Div>
          <Miniatures>
            <img src={item.image} alt="" />
          </Miniatures>
          <ul>
            <span>{item.name}</span>
            <p>
              <span>Cantidad:</span>
              <span>{item.cartQuantity}</span>
            </p>
            {item.discount > 0 ? (
              <div>
                <span>Precio: ${Math.ceil(item.price*(1 - item.discount/100))} c/u</span>
                <span>Antes: ${item.price}</span>
              </div>
            ) : (
              <span>Precio: ${item.price}c/u</span>
              
            )}
          </ul>
          {/* <p>
            <span>Total</span>
            <span>$ {item.cartQuantity * Math.ceil(item.price*(1 - item.discount/100)) }</span>
          </p>           */}
        </Div>
      ))}
           <div> 
        <h3>Total:{cartTotalAmount}</h3>    
        <Checkout />
      </div>
    </div>
  );
};

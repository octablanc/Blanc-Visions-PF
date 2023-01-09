// import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/app/hooks";
// import { getDiscountTotal } from "../../../redux/slices/Cart";
import { BtnCheck } from "../../cart/styled-components/styles";
import { Bill, Container, Detail, Div } from "./styled-components/Checkout";

export const Checkout = ({ cartTotalQuantity, handleSubmit }: any) => {
  // const { cartItems, cartTotalAmount, itemTotalQuantity } = useAppSelector(
  const { cart, priceTotalCart, quantityTotalCart } = useAppSelector(
    (state) => state.cartState
  );

  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(getDiscountTotal(cartItems));
  // }, [itemTotalQuantity, cartItems, dispatch]);

  const setNumber = (numero: number) => {
    let partesNumero = numero.toString().split(".");
    partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return partesNumero.join(".");
  };

  return (
    <Container>
      <div>
        <div className="address">
          <h3> Datos para el envío </h3>
          <div>
            <p>
              <span>Calle (acá me traigo los datos de la orderBuy)</span>
              <span>Altura</span>
            </p>
            <p>
              <span>Ciudad</span>
              <span>Código Postal</span>
            </p>
          </div>
        </div>
        <Detail>
          {/* <div> */}
          <div>
            <h3>Tu compra</h3>
          </div>
          <div className="info">
            {cart?.map((c) => {
              console.log("c:", c);
              const { id, name, discount, price, stock, image } = c.product;
              const priceDiscount: number = price - (price * discount) / 100;
              return (
                <Div key={id}>
                  {/* <div className='itemCard'> */}
                  <div className="miniature">
                    <img src={image} alt="" />
                  </div>
                  <div className="detail">
                    {/* <ul> */}
                    <span>{name}</span>
                    <p className="quantity">
                      <span>Cantidad:</span>
                      <span>{stock}</span>
                    </p>
                    {discount > 0 ? (
                      <div className="promo">
                        <p className="price">
                          <span>Precio:</span>
                          <span>${priceDiscount}c/u </span>
                        </p>
                        <p className="priceProm">
                          <span className="priceProm">Antes:</span>
                          <span className="discount">${price}c/u</span>
                        </p>
                      </div>
                    ) : (
                      <p className="price">
                        <span>Precio:</span>
                        <span>${price}c/u</span>
                      </p>
                    )}
                    {/* </ul> */}
                  </div>
                  {/* </div> */}
                </Div>
              );
            })}
          </div>
          {/* </div> */}
        </Detail>
      </div>
      <Bill>
        {/* <p className='total'>Total $ {cartTotalAmount}</p> */}
        <p className="total">Total $ {setNumber(priceTotalCart)}</p>

        <form action="https://kingcomm.up.railway.app/checkout" method="POST">
          <input
            type="hidden"
            name="title"
            value={`Productos (${quantityTotalCart})`}
          />
          <input type="hidden" name="price" value={setNumber(priceTotalCart)} />
          <BtnCheck type="submit" onClick={handleSubmit}>
            Pagar
          </BtnCheck>
        </form>
      </Bill>
    </Container>
  );
};

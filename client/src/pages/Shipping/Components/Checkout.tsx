import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/app/hooks";
import { getDiscountTotal } from "../../../redux/slices/Cart";
import { BtnCheck } from "../../cart/styled-components/styles";
import { Container, Detail, Div, Miniatures } from "./styled-components/Checkout";

export const Checkout = ({ cartTotalQuantity, handleSubmit }: any) => {
  const { cartItems, cartTotalAmount, itemTotalQuantity } = useAppSelector(
    (state) => state.cartState
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDiscountTotal(cartItems));
  }, [itemTotalQuantity, cartItems, dispatch]);

  return (
    <Container>
      <div>
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
        <div>
          <h3>Tu compra</h3>
          {cartItems?.map((item: any, key: number) => (
            <Div key={item.id}>
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
                    <span>
                      Precio: $
                      {Math.ceil(item.price * (1 - item.discount / 100))} c/u
                    </span>
                    <span>Antes: ${item.price}</span>
                  </div>
                ) : (
                  <span>Precio: ${item.price}c/u</span>
                )}
              </ul>
            </Div>
          ))}
        </div>
        <div>
          <h3>Total:{cartTotalAmount}</h3>

          <form
            action="https://blanc-visions-pf-kingcomm.up.railway.app/checkout"
            method="POST"
          >
            <input
              type="hidden"
              name="title"
              value={`Productos (${cartTotalQuantity})`}
            />
            <input type="hidden" name="price" value={cartTotalAmount} />
            <BtnCheck type="submit" onClick={handleSubmit}>
              Pagar
            </BtnCheck>
          </form>
        </div>
      </Detail>
    </Container>
  );
};

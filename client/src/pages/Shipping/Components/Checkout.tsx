import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/app/hooks";
import { getDiscountTotal } from "../../../redux/slices/Cart";
import { BtnCheck } from "../../cart/styled-components/styles";
import { Bill, Container, Detail, Div } from "./styled-components/Checkout";

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
            {cartItems?.map((item: any, key: number) => (
              <Div key={item.id}>
                {/* <div className='itemCard'> */}
                <div className="miniature">
                  <img src={item.image} alt="" />
                </div>
                <div className="detail">
                  {/* <ul> */}
                    <span>{item.name}</span>
                    <p className='quantity'>
                      <span>Cantidad:</span>
                      <span>{item.cartQuantity}</span>
                    </p>
                    {item.discount > 0 ? (
                      <div className='promo'>
                        <p className='price'>
                          <span>Precio:</span>
                          <span>${Math.ceil(item.price * (1 - item.discount / 100))}c/u                          </span>
                        </p>
                        <p className='priceProm'>
                          <span className="priceProm">Antes:</span>
                          <span className='discount'>${item.price}c/u</span>
                        </p>
                      </div>
                    ) : (
                      <p className='price'>
                        <span>Precio:</span>
                        <span>${item.price}c/u</span>
                      </p>
                    )}
                  {/* </ul> */}
                </div>
                {/* </div> */}
              </Div>
            ))}
          </div>
          {/* </div> */}
        </Detail>
      </div>
      <Bill>
        <p className='total'>Total $ {cartTotalAmount}</p>

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
      </Bill>
    </Container>
  );
};

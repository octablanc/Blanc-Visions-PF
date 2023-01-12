import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import emailjs from 'emailjs-com';
// import { getDiscountTotal } from "../../../redux/slices/Cart";
import { BtnCheck } from "../cart/styled-components/styles";
import { Bill, Container, Detail, Div } from "./styled-components/Checkout";
import { deleteCartUser, getCartUser } from "../../redux/slices/Cart";


export const Checkout = () => {
  const { cart, priceTotalCart, quantityTotalCart } = useAppSelector(
    (state) => state.cartState
  );
  const {user} = useAppSelector((state) => state.userState);
  const dispatch = useAppDispatch();

  useEffect(() => { 
  if(user){
      dispatch(getCartUser(user.id));
  }
  }, [quantityTotalCart, user, dispatch]);
  //AGREGUÉ RESETEO EN productSlice!!
  const handleClick = () => {
    dispatch(deleteCartUser(user?.id))
  };

  return (
    <Container>
      <div>
        {/* <div className="address">
          <h3> Datos para el envío </h3>
          <div>
            <p>
              <span>Calle</span>
              <span>Altura</span>
            </p>
            <p>
              <span>Ciudad</span>
              <span>Código Postal</span>
            </p>
          </div>
        </div> */}
        <Detail>
          {/* <div> */}
          <div>
            <h3>Tu compra</h3>
          </div>
          <div className="info">
            {cart?.map((item: any, key: number) => (           
                          
              <Div key={item.id}>
                {/* <div className='itemCard'> */}
                <div className="miniature">
                  <img src={item.product.image} alt="" />
                </div>
                <div className="detail">
                  {/* <ul> */}
                    <span>{item.name}</span>
                    <p className='quantity'>
                      <span>Cantidad:</span>
                      <span>{item.quantity}</span>
                    </p>
                    {item.discount > 0 ? (
                      <div className="promo">
                        <p className="price">
                          <span>Pagas:</span>
                          <span>${item.price*(1 - item.Discount/100)}c/u </span>
                        </p>
                        <p className="priceProm">
                          <span className="priceProm">Antes:</span>
                          <span className="discount">${item.price}c/u</span>
                        </p>
                      </div>
                    ) : (
                      <p className="price">
                        <span>Pagas:</span>
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
        <p className='total'>Total $ {priceTotalCart}</p>

        <form action="https://kingcomm.up.railway.app/checkout" method="POST">
          <input
            type="hidden"
            name="quantity"
            value={`Productos (${quantityTotalCart})`}
          />
          <input type="hidden" name="price" value={priceTotalCart} />
          <BtnCheck type="submit" onClick={handleClick}>
            Pagar
          </BtnCheck>
        </form>
      </Bill>
    </Container>
  );
};

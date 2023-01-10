// import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/app/hooks";
// import { getDiscountTotal } from "../../../redux/slices/Cart";
import { BtnCheck } from "../../cart/styled-components/styles";
import { Bill, Container, Detail, Div } from "./styled-components/Checkout";

export const Checkout = ({ cartTotalQuantity, handleSubmit }: any) => {
<<<<<<< HEAD
  // const { cartItems, cartTotalAmount, itemTotalQuantity } = useAppSelector(
=======
>>>>>>> 5205434afff50a39a326354e5f0eaa9fbdd0d58c
  const { cart, priceTotalCart, quantityTotalCart } = useAppSelector(
    (state) => state.cartState
  );

  const dispatch = useAppDispatch();

<<<<<<< HEAD
  // useEffect(() => {
  //   dispatch(getDiscountTotal(cartItems));
  // }, [itemTotalQuantity, cartItems, dispatch]);

  const setNumber = (numero: number) => {
    let partesNumero = numero.toString().split(".");
    partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return partesNumero.join(".");
  };
=======
  useEffect(() => {
    // dispatch(getDiscountTotal(cartItems));
  }, [quantityTotalCart, cart, dispatch]);
>>>>>>> 5205434afff50a39a326354e5f0eaa9fbdd0d58c

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
<<<<<<< HEAD
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
=======
            {cart?.map((item: any, key: number) => (
              <Div key={item.id}>
                {/* <div className='itemCard'> */}
                <div className="miniature">
                  <img src={item.image} alt="" />
                </div>
                <div className="detail">
                  {/* <ul> */}
                    <span>{item.name}</span>
                    <p className='quantity'>
>>>>>>> 5205434afff50a39a326354e5f0eaa9fbdd0d58c
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
<<<<<<< HEAD
        {/* <p className='total'>Total $ {cartTotalAmount}</p> */}
        <p className="total">Total $ {setNumber(priceTotalCart)}</p>
=======
        <p className='total'>Total $ {priceTotalCart}</p>
>>>>>>> 5205434afff50a39a326354e5f0eaa9fbdd0d58c

        <form action="https://kingcomm.up.railway.app/checkout" method="POST">
          <input
            type="hidden"
            name="title"
            value={`Productos (${quantityTotalCart})`}
          />
<<<<<<< HEAD
          <input type="hidden" name="price" value={setNumber(priceTotalCart)} />
=======
          <input type="hidden" name="price" value={priceTotalCart} />
>>>>>>> 5205434afff50a39a326354e5f0eaa9fbdd0d58c
          <BtnCheck type="submit" onClick={handleSubmit}>
            Pagar
          </BtnCheck>
        </form>
      </Bill>
    </Container>
  );
};

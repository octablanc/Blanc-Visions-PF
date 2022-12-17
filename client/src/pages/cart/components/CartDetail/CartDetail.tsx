import { useAppSelector } from "../../../../redux/app/hooks";

/*............comienzan estilos........... */

import styled from "styled-components";


const Container = styled.div`
display: flex;
flex-direction: column;
.title{
  font-size: 2rem;
  align-items: center;
}
`;

const Title = styled.div`
box-shadow: 24px 29px 88px 0px rgba(0, 0, 0, 0.1);
`;

const Div = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 3rem;
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

  const { cartItems, cartTotalQuantity, cartTotalAmount } = useAppSelector(state => state.cartState)
  const { currentProduct } = useAppSelector(state => state.productsState);

  const {name, image, price } = currentProduct;

  

  return (
    <Container>
      <p className= 'title'>{name}</p>
      <Div>
        <img src={image} alt="imagen del producto" />
        <p>{price}</p>
        <p>counter</p>
        <p>{cartTotalAmount}</p>
      </Div>
      <span>{cartTotalAmount}</span>
      <Buttons>
      <Btn>finalizar compra</Btn>
      <Btn>continuar comprando</Btn>
      </Buttons>
           
    </Container>
  );
};

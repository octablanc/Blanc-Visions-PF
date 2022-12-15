import styled from 'styled-components';

export const CartDetail = () => {
  const AllCart = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
  `;

  const Container = styled.div`
    box-shadow: 24px 29px 88px 0px rgba(0, 0, 0, 0.1);
  `;

  return (
    <AllCart>
      <Container>Detalle del producto</Container>
      <Container>Subtotal, total, boton de finalizar compra</Container>
    </AllCart>
  );
};

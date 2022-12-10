import styled from 'styled-components';

export const Div = styled.div`
  /* background: ; */
`;
export const Div2 = styled.div`
  /* background: #d794b8; */
`;

export const Conteiner = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
`;
export const Card = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  border-bottom: 1px solid black;
  padding-top: 3rem;
  h3 {
    line-height: normal;
  }
  button {
    border: none;
    background-color: transparent;
    margin-left: 40rem;
    font-size: 4rem;
  }
`;

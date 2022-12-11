import styled from 'styled-components';

export const Conteiner = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 2rem;
  }
`;
export const Card = styled.div`
  border-bottom: 1px solid black;
  padding-top: 3rem;
  h3 {
    line-height: normal;
  }
  button {
    border: none;
    background-color: transparent;
    font-size: 4rem;
  }

  @media (min-width: 768px) {
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
`;

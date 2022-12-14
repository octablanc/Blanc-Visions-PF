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
  align-items: center;
`;
export const Paginate = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  height: 10rem;
  button {
    background-color: black;
    color: white;
    margin: 4rem;
    padding: 0.6rem;
    text-transform: uppercase;
    border-radius: 0.5rem;
    font-weight: bold;
    font-size: 1.8rem;
  }
  h3 {
    margin: 0;
    font-size: 3rem;
  }
`;

import styled from 'styled-components';

export const Conteiner = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 2rem;
  }
`;
export const Card = styled.div`
  box-shadow: 11px 11px 22px #d9d9d9, -11px -11px 22px #e7e7e7;
  padding: 0 2rem;
  height: 30rem;
  h4 {
    line-height: normal;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  p {
    margin: 0;
  }
  button {
    border: none;
    background-color: transparent;
    font-size: 4rem;
  }
  .image {
    background-color: white;
  }

  @media (min-width: 768px) {
    display: grid;
    place-items: center;
    grid-template-columns: 2fr 3fr;
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
    margin: 2rem;
    padding: 0.6rem;
    text-transform: uppercase;
    border-radius: 0.5rem;
    font-weight: bold;
    font-size: 1.5rem;
    :disabled {
      /* background-color: white; */
      /* border: none; */
      visibility: hidden;
    }
  }
  h3 {
    margin: 0;
    font-size: 2.5rem;
  }
`;
export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  /* min-height: 50rem;
   */
  place-items: center;
`;

export const CardContent = styled.div`
  padding: 0 0.3rem;
  h3 {
    color: ${(props) => props.theme.colors.secondary};
  }
  button {
    font-size: 1.5rem;
    color: blue;
    display: block;
    text-align: center;
    background-color: aliceblue;
    /* width: 100%; */
  }
`;

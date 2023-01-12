import styled from 'styled-components';

export const CardContainer = styled.div`
  box-shadow: 24px 29px 88px 0px rgba(0, 0, 0, 0.1);
  border-radius: 3rem;
  overflow: hidden;
  min-height: 30rem;
  /* .image { */
  /* width: 100%;
    height: 10rem;
    display: flex;
    align-items: center;
    background-color: white;
    padding: 2rem;
  } */

  :hover {
    cursor: pointer;
  }

  .description {
    padding: 1rem;
  }
  h4 {
    margin: 0;
  }
  button {
    background-color: transparent;
    border: none;
  }
`;
export const CardImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 25rem;
  overflow: hidden;
  img {
    object-fit: cover;
  }
`;

export const SalesContainer = styled.div`
  @media (min-width: 480px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

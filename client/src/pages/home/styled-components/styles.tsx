import styled from 'styled-components';

export const CardContainer = styled.div`
  box-shadow: 24px 29px 88px 0px rgba(0, 0, 0, 0.1);
  border-radius: 3rem;
  overflow: hidden;
  .image {
    width: 100%;
    height: 25rem;
    display: flex;
    align-items: center;
    background-color: white;
    padding: 2rem;
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

export const SalesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

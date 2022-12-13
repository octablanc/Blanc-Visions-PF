import styled from 'styled-components';

export const CardContainer = styled.div`
  box-shadow: 24px 29px 88px 0px rgba(0, 0, 0, 0.1);
  border-radius: 3rem;
  overflow: hidden;
  .image {
    height: 28rem;
    display: flex;
    align-items: center;
    background-color: white;
  }

  .description {
    padding: 1rem;
  }
`;

export const SalesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

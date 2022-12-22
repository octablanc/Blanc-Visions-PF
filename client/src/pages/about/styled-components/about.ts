import styled from 'styled-components';

export const Columns = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  margin-bottom: 5rem;
`;

export const Box = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 5px 0px #c2ad94;
  .icons {
    margin-right: 2rem;
  }
`;

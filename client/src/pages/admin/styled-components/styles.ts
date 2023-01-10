import styled from 'styled-components';

export const Container = styled.div`
  background: gray;
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-left: 2rem;
`;
export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* width: %; */
  background-color: lightcoral;
  margin-bottom: 2rem;
`;
export const PaginateAdmin = styled.div`
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

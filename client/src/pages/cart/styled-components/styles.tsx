import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  // .titles {
  //   display: grid;
  //   grid-template-columns: 2fr 1fr 1fr 1fr;
  //   font-size: 2rem;
  //   align-items: center;
  // }
`;

export const Contain = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
`;

export const Div = styled.div`
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  gap: 3rem;
  align-items: center;
  justify-items: center;
`;

export const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 2px solid gray;
`;

export const Product = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  justify-items: center;
`;

export const Quantity = styled.div`
  /* background: yellow; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Operators = styled.div`
  /* background-color: red; */
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-column-gap: 1rem;
  border-color: #c2ad94;
  margin-top: -2rem;
  width: 10rem;
  div {
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
  }
  button {
    border: none;
    color: #8b7c69;
    font-size: 2rem;
    font-weight: bold;
    background: transparent;
    cursor: pointer;
  }
`;

export const Buttons = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;

export const TotalDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  background-color: white;
  font-size: 2rem;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Btn = styled.button`
  width: 100%;
  border-radius: 0.5rem;
  margin: 0.5rem;
  padding: 0.5rem;
  background-color: black;
  color: white;
`;

export const Remove = styled.button`
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: black;
  color: white;
`;

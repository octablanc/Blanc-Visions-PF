import styled from "styled-components";

export const Container = styled.div`
  /* background: green; */
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 4rem;
`;

export const Image = styled.div`
  /* background: red; */
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  /* background: yellow; */
  color: #c2ad94;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 6rem 0rem 0rem 0rem;
  h3 {
    align-self: flex-start;
    font-size: 2.5rem;
    font-weight: normal;
    color: #c2ad94;
  }
`;

export const CartSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Counter = styled.div`
  /* background: yellow; */
  border-color: #c2ad94;
  width: 10rem;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  div {    
    font-size: 2rem;
  }
  button {
    border: none;
    color: #8b7c69;
    font-size: 2rem;
    font-weight: bold;
    background: transparent;
  }
`;

export const Btn = styled.button`
  font-size: 1.6rem;
  padding: 0.8rem;
  margin: 0.5rem;
  border-radius: 3px;
  background: #c2ad94;
  border: none;
  box-shadow: inset 1rem 1rem 2rem #a1907b, inset -1rem -1rem 2rem #e3caad;
`;

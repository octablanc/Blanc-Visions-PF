import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  .emptyCart {
    margin-top: 2rem;
    margin-left: 2rem;
    display: flex;
    img {
      width: 12rem;
      height: auto;
      margin-right: 2rem;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Contain = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
`;

export const Div = styled.div`
  // margin-bottom: 1rem;
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  gap: 3rem;
  align-items: center;
  justify-items: center;
  border-bottom: 1px solid grey;
  .discountPrice {
    margin-top: 2.3rem;
    display: flex;
    justify-content: center;
  }
  .labelProm {
    color: grey;
    font-size: 1.1rem;
    width: 12rem;
    display: flex;
    justify-content: center;
    align-content: space-between;
  }
  .priceProm {
    text-decoration: line-through;
  }
`;

export const Titles = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  gap: 3rem;
  align-items: center;
  justify-items: center;
  font-size: 1.2rem;
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
  justify-content: center;
  border-color: #c2ad94;
  width: 10rem;
  margin-top: 2.3rem;
  div {
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
  }
  button {
    border: none;
    color: #8b7c69;
    font-size: 1.5rem;
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
  font-size: 1.5rem;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Btn = styled.button`
  width: 100%;
  border-radius: 1rem;
  margin: 0.5rem;
  padding: 0.8rem;
  border-style: double;
  border-color: white;
  color: #d4e3e2;
  background: #7cbbb9;
  box-shadow: inset 17px 17px 34px #70a8a7, inset -17px -17px 34px #88cecc;
  /* color: #38ada9;
background: #bac9c9;
box-shadow: inset -17px -17px 34px #869191,
            inset 17px 17px 34px #eeffff; */

  cursor: pointer;
  :hover {
    border-radius: 10px;
    background: #38ada9;
    box-shadow: inset -17px -17px 34px #164544, inset 17px 17px 34px #5affff;
  }
`;

export const BtnCheck = styled.button`
  width: 100%;
  border-radius: 1rem;
  margin: 0.5rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.secondary};
  box-shadow: inset 5px 5px 10px #2d8c89, inset -5px -5px 10px #43cec9;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  :hover {
    border-radius: 10px;
    background: #279692;
    box-shadow: inset -17px -17px 34px #103c3a, inset 17px 17px 34px #3ef0ea;
    color: black;
  }
`;

// export const Input = styled.input`
//   width: 100%;
//   border-radius: 0.5rem;
//   margin: 0.5rem;
//   padding: 0.5rem;
//   input {
//     width: 100%;
//     height: 100%;
//     border: none;
//     background-color: black;
//     color: ${(props) => props.theme.colors.secondary};
//   }
// `;

export const Back = styled.button`
  width: 30rem;
  border-radius: 0.5rem;
  border: none;
  margin: 0.5rem;
  padding: 1.5rem;
  background-color: ${(props) => props.theme.colors.secondary};
  :hover {
    cursor: pointer;
  }
`;

export const Remove = styled.button`
  border-radius: 0.5rem;
  border: none;
  border-left: solid 1px ${(props) => props.theme.colors.secondary};
  border-right: solid 1px ${(props) => props.theme.colors.secondary};
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  // margin-top: 0rem;
  background-color: transparent;
  color: ${(props) => props.theme.colors.secondary};
  display: flex;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`;

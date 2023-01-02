import styled from "styled-components";

export const Container = styled.div`
  /* background: green; */
  width: 90%;
  min-height: 70rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 4rem;
`;

export const Image = styled.div`
  /* background: red; */
  display: flex;
  flex-direction: column;
  .img {
    margin-top: 3rem;
  }
`;

export const Info = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  margin: 6rem 0rem 0rem 0rem;
  .icons {
    display: grid;
    grid-template-columns: 2fr 1fr;
    .infoProm {
      display: flex;
      flex-direction: column;
      .labelProm {
        display: flex;
        justify-content: space-evenly;
      }
      .label {
        color: ${(props) => props.theme.colors.secondary};
      }
      .priceProm {
        text-decoration: line-through;
        color: ${(props) => props.theme.colors.secondary};
      }
    }
  }
  .features {
    font-size: 1.8rem;
    font-weight: bold;
  }
  .list {
    margin-left: 2rem;
  }
  .stock {
    color: grey;
    margin-left: 1rem;
  }
`;

export const CartSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Btn = styled.button`
  width: 35rem;
  height: 3.2rem;
  font-size: 1.6rem;
  padding: 0.8rem;
  margin: 0.5rem;
  border-radius: 8px;
  /* background: ${(props) => props.theme.colors.secondary};
  color: white;
  border: none; */
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.secondary};
  box-shadow: inset 5px 5px 10px #2d8c89, inset -5px -5px 10px #43cec9;
  border: none;
  color: white; 
  cursor: pointer;
  :hover {
    border-radius: 10px;
    background: #279692;
    box-shadow: inset -17px -17px 34px #103c3a, inset 17px 17px 34px #3ef0ea;
    color: black;
  }
`;

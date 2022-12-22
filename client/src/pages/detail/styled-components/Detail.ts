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
  .title {
    line-height: normal;
    font-size: 3rem;
  }
  .img {
    margin-top: 3rem;
  }
`;

// export const Title = styled.div`
//   background: yellow;
//   color: #c2ad94;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
//   align-items: center;
//  `;

export const Info = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  margin: 6rem 0rem 0rem 0rem;
  h3 {
    font-size: 2.5rem;
    font-weight: normal;
    color: black;
  }
  .icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .features {
    font-size: 1.8rem;
    font-weight: bold;
  }
  .list {
    margin-left: 2rem;
  }
  .stock{
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

// export const Counter = styled.div`
//   /* background: yellow; */
//   border-color: #c2ad94;
//   margin-top: -2rem;
//   width: 10rem;
//   height: 5rem;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
//   align-items: center;
//   div {
//     font-size: 2rem;
//   }
//   button {
//     border: none;
//     color: black;
//     font-size: 2rem;
//     font-weight: bold;
//     background: transparent;
//     cursor: pointer;
//   }
// `;

export const Btn = styled.button`
  width: 70%;
  font-size: 1.6rem;
  padding: 0.8rem;
  margin: 0.5rem;
  border-radius: 8px;
  background: black;
  color: white;
  border: none;
  /* box-shadow: inset 1rem 1rem 2rem #a1907b, inset -1rem -1rem 2rem #e3caad; */
  cursor: pointer;
`;

import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    flex-direction: row;   
    align-items: center;
    justify-content: space-evenly;
`;

export const Miniatures = styled.div`
  /* background-color: green; */
  /* margin: 0 1rem; */
  width: 10rem;
  height: 10rem;
  display: flex;
  justify-content: center;
  .img {
    max-block-size: 10rem;
    /* min-height: 10rem; */
    /* margin: 0 1rem; */
    /* position: relative; */
    /* box-lines: black; */
    /* border: none; */
    box-shadow: none;
    object-fit: cover;
  }
  `;
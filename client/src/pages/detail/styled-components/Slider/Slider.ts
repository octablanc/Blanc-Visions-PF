import styled from "styled-components";

export const Container = styled.div`
  /* background: pink; */
  max-width: 50rem;
  height: 40rem;
  margin: 3rem auto 0;
  position: relative;
  /* overflow: hidden; */
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
`;

// export const ContainerImg = styled.div`
//   background: blue;
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   opacity: 1;
//   transition: opacity ease-in-out 0.4s;
// `;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
`;

export const Thumbnails = styled.div`
  /* background-color: yellow; */
  width: 60rem;
  height: 10rem;
  display: flex;
  flex-direction: row;

`;

export const Miniatures = styled.div`
  /* background-color: red; */
  margin: 0 1rem;
  width: 100%;
  height: 100%;
  .img {
    max-block-size: 10rem;
    margin: 0 1rem;
    position: relative;
    /* box-lines: black; */
    /* box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2); */
    object-fit: cover;
  }
  .active {
    opacity: 1;
  }
  .pasive {
    opacity: 0.5;
  }
`;

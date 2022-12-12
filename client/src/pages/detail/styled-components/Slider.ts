import styled from "styled-components";

export const Container = styled.div`
  background: pink;
  max-width: 60rem;
  height: 50rem;
  margin: 10rem auto 0;
  position: relative;
  overflow: hidden;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
`;

export const ContainerImg = styled.div`
  /* background: blue; */
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 1;
  transition: opacity ease-in-out 0.4s;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
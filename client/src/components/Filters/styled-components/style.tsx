import styled from 'styled-components';

export const FilterContainer = styled.div`
  .heading {
    text-transform: capitalize;
    font-weight: 500;
  }
`;

export const FilterContent = styled.div`
  p {
    display: inline-block;
    background-color: #f7f8f1;
    padding: 0.2rem 1.2rem;
    border: 0.1px solid #d7d8cf;
    border-radius: 7px;

    &:hover {
      transition: 0.8s;
      background-color: #efefe9;
    }
  }
  button {
    all: unset;
    margin-left: 10px;
    color: #ccccc3;
    font-weight: bold;
    &:hover {
      color: #a1a19e;
      cursor: pointer;
    }
  }
  h3 {
    background-color: red;
  }
`;

export const FilterDiscountPrice = styled.div`
  h3 {
    // background-color: red;
    text-decoration: underline;
    font-weight: bold;
  }
  h5 {
    background-color: #fcfcfc;
    padding-left: 3px;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
      transition: 0.3s;
      background-color: #f5f2f2;
    }
  }
`;

export const ContainerSelectOrder = styled.select`
  width: 100%;
  border-radius: 5px;
  height: 35px;
  padding: 6px;
  border: 1px solid #b4b3b3;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  &:hover {
    border: 1px solid black;
  }
  &:focus {
    border: 2px solid #1c1cab;
  }
`;

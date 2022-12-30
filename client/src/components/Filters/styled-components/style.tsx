import styled from 'styled-components';

export const FilterContent = styled.div`
  p {
    display: inline-block;
    background-color: #F7F8F1;
    padding: .2rem 1.2rem;
    border: .1px solid #D7D8CF;
    border-radius: 7px;
    
    &:hover{
      transition:.8s;
      background-color: #EFEFE9;
    }
  }
  button {
    all: unset;
    margin-left: 10px;
    color: #CCCCC3;
    &:hover{
      color: #A1A19E;
      cursor:pointer;
    }
  }
  `;
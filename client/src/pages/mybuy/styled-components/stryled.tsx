import styled from "styled-components";

export const Contenedor = styled.div`
text-align:center;
  border: 1px solid black;
  margin-bottom: 10px;
  width: 80vw;
  margin-right: auto;
  margin-left: auto;

  .img{
    width: 120px
  }
`;
export const ProductsContainer = styled.div`
//  background-color: lightblue;
 display: flex;
 flex-direction: column;
`;

export const CardConteiner = styled.div`

width: 100%
background-color: rgb(255, 255, 255);
padding: 28px 25px 25px;
border-bottom: 1px solid rgb(218, 218, 218);
flex-direction: column;
background-color: lightgray;
margin-bottom : 30px;
position: relative;
.newFecha{
    position:absolute;
    right :0;
}
`;

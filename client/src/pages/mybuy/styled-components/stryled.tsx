import styled from 'styled-components';

export const BoxStyle = {
  marginRight: 'auto',
  marginLeft: 'auto',
  marginTop: '10rem',
  width: 800,
  backgroundColor: 'white',
  borderRadius: '5px',
};


export const ModalContainer = styled.form`
transform: 'translate(-50%, -50%)'
display:flex;
justify-content: center;
text-align: center;
padding-top:1rem;
padding-bottom:5rem;
   img{
    width : 12rem;
   }
   .nameProduct{
    font-size: x-large;
    text-transform: capitalize;

   }
   .MuiRating-root{
    font-size: 5rem;
   }
   hr{
    width:80%;
    margin: 20px auto;
   }
   textarea{
     resize: none;
    border: 1px solid gray;
   }
  h3{
    font-weight: 400;
  }
  h1{
    font-weight: 500;
  }
 `;
export const BuyContainer = styled.div`
margin: 0 5rem;
  display: flex;
  height: 10rem;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;

`;

export const BuyImage = styled.div`
  img {
    width: 10rem;
  }
`;

export const BuyContent = styled.div`
  p {
    margin: 0;
  }
  h3 {
    margin-bottom: 0;
    font-size: 1.6rem;
  }
`;
export const ProductsContainer = styled.div`
  //  background-color: lightblue;
  display: flex;
  flex-direction: column;
`;

export const CardConteiner = styled.div`
  box-shadow: 11px 11px 22px #d9d9d9, -11px -11px 22px #e7e7e7;
  margin-bottom: 3rem;
  padding: 2rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-weight: bold;
  }
`;

export const ContainerAlert = styled.div`
  position: absolute;
  bottom: 10rem;
  left: 1rem;

  .MuiPaper-root {
    font-size: medium;
    position: fixed;
  }
`;

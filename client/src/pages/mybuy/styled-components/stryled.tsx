import styled from 'styled-components';

export const BoxStyle = {
  marginRight: 'auto',
  marginLeft: 'auto',
  marginTop: '12rem',
  width: 800,
  // height: 500,
  backgroundColor: 'white',
  borderRadius: '5px',
};
export const ModalContainer = styled.div`
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
    font-size: medium;
   }
   .MuiRating-root{
    font-size: 5rem;
   }
   textarea{
     resize: none;
   }
   textarea:focus{
    border: 1px solid red; // ACA
  }
 `;
//  ! ACA
export const BuyContainer = styled.div`
  display: flex;
  height: 10rem;
  align-items: center;
  gap: 2rem;
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

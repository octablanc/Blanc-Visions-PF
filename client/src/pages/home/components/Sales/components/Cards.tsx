import styled from 'styled-components';

interface Props {
  name: string;
  img: string;
  price: number;
}

const Div = styled.div`
  border: 1px solid black;
  background-color: gray;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* width: 20rem; */
  height: 26rem;
  /* margin-bottom: 2rem; */
  p {
    font-size: 1.5rem;
    padding: 0;
    margin: 0;
  }
`;

const Img = styled.img`
  height: 70%;
  /* max-height: 20rem; */
`;

export const Cards = ({ name, img, price }: Props) => {
  return (
    <div className='container'>
      <Div>
        <Img src={img} alt='productImage' />
        <p className='text-center'>{name}</p>
        <p className='text-center'>${price}</p>
      </Div>
    </div>
  );
};

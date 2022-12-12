import { CardContainer } from '../../styled-components/styles';

interface Props {
  name: string;
  img: string;
  price: number;
}

export const Card = ({ name, img, price }: Props) => {
  return (
    <CardContainer>
      <div className='image'>
        <img src={img} alt='productImage' />
      </div>
      <div className='description text-center'>
        <p>{name}</p>
        <h3>${price}</h3>
      </div>
    </CardContainer>
  );
};

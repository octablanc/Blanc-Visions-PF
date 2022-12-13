import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../redux/app/hooks';
import { getProductById } from '../../../../redux/slices/products';
import { CardContainer } from '../../styled-components/styles';

interface Props {
  id: number;
  name: string;
  img: string;
  price: number;
}
//
export const Card = ({ id, name, img, price }: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    dispatch(getProductById(id));
    navigate(`/products/${id}`);
  };

  return (
    <CardContainer onClick={() => handleClick(id)}>
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

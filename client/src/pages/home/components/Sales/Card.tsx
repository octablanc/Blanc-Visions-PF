import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../redux/app/hooks';
import { getProductById } from '../../../../redux/slices/products';
import { CardContainer } from '../../styled-components/styles';

interface Props {
  product: {
    id: number;
    name: string;
    code: string;
    image: string;
    description: string;
    price: number;
    discount: number;
  };
}
//
export const Card = ({ product }: Props) => {
  const { id, name, image, price, discount } = product;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    dispatch(getProductById(id));
    navigate(`/products/${id}`);
  };
  let resultDiscount = (price * discount) / 100;
  let priceDiscount = price - resultDiscount;
  return (
    <CardContainer onClick={() => handleClick(id)}>
      <div className='image'>
        <img src={image} alt='productImage' />
      </div>
      <div className='description text-center'>
        <h4>{name}</h4>
        <h4>
          {' '}
          Antes: $
          <span style={{ textDecoration: 'line-through' }}>{price}</span>
        </h4>
        <h4> Ahora: ${priceDiscount}</h4>

        <button onClick={() => handleClick(id)}>Ver detalle </button>
        <h2>%{discount} OFF</h2>
      </div>
    </CardContainer>
  );
};

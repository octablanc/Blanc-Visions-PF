import { Card, CardContent } from '../styled-components/styled';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../redux/app/hooks';
import { getProductById } from '../../../../redux/slices/products';

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
export const ProductItem = ({ product }: Props) => {
  const { id, name, description, image, code, price, discount } = product;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    dispatch(getProductById(id));
    navigate(`/products/${id}`);
  };
  return (
    <Card key={code}>
      <div className='image'>
        <img src={image} alt='notfound' />
      </div>
      <CardContent>
        <h4>{name}</h4>
        <p>{description.slice(0, 60)} ...</p>
        <button onClick={() => handleClick(id)}> ver mas </button>
        <h3>${price}</h3>
        <h2>%{discount} OFF</h2>
      </CardContent>
    </Card>
  );
};

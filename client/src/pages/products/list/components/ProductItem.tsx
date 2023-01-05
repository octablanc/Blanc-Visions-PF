import {
  Card,
  CardContent,
  CardPrice,
  CardTitle,
} from '../styled-components/styled';
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

  let resultDiscount = Math.ceil((price * discount) / 100);
  let priceDiscount = price - resultDiscount;
  return (
    <Card key={code} onClick={() => handleClick(id)}>
      <div className='image'>
        <img src={image} alt='notfound' />
      </div>
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <p>{description.slice(0, 60)} ...</p>
        <CardPrice>
          {discount !== 0 ? (
            <>
              <h4>${price} </h4>
              <h3>
                ${priceDiscount} <span>{discount}% OFF</span>
              </h3>
            </>
          ) : (
            <h3>${price}</h3>
          )}
        </CardPrice>
      </CardContent>
    </Card>
  );
};

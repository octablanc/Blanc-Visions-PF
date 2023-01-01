import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../redux/app/hooks';
import { getProductById } from '../../../../redux/slices/products';
import { CardContainer } from '../../styled-components/styles';
import {
  CardContent,
  CardTitle,
  CardPrice,
} from '../../../products/list/styled-components/styled';
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
      <CardContent className='padding'>
        <CardTitle>{name}</CardTitle>
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
      {/* <CardContent className='description text-center'>
        <h4>{name}</h4>
        <h4>$
          <span>{price}</span>
        </h4>
        <h4>${priceDiscount}<span>{discount}% OFF</span></h4>
      </CardContent> */}
    </CardContainer>
  );
};

import { Card, Icons } from '../styled-components/styled';
import { AiFillStar, AiOutlineStar, BsCart4 } from '../../../../icons';
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
  };
}
export const ProductItem = ({ product }: Props) => {
  const { id, name, description, image, code, price } = product;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    dispatch(getProductById(id));
    navigate(`/products/${id}`);
  };
  console.log(product);

  return (
    <Card key={code} onClick={() => handleClick(id)}>
      <div className='image'>
        <img src={image} alt='notfound' />
      </div>
      <div>
        <h3>{name}</h3>
        <Icons>
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <button>
            <BsCart4 />
          </button>
        </Icons>
        <p>{description}</p>
        <h3>${price}</h3>
      </div>
    </Card>
  );
};

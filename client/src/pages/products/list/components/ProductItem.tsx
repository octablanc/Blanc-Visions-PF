import { Card, Icons, CardContent } from '../styled-components/styled';
import { AiFillStar, AiOutlineStar, BsCart4 } from '../../../../icons';
import { Link, useNavigate } from 'react-router-dom';
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
  // console.log(product);

  return (
    <Card key={code}>
      <div className='image'>
        <img src={image} alt='notfound' />
      </div>
      <CardContent>
        <h4>{name}</h4>
        {/* <Icons>
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
        </Icons> */}
        <p>{description.slice(0, 60)} ...</p>
        {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> */}
        <button onClick={() => handleClick(id)}> ver mas </button>
        <h3>${price}</h3>
      </CardContent>
    </Card>
  );
};

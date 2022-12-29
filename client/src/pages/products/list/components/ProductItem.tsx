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
        {discount !== 0 ? (
          <h2>%{discount} OFF</h2>
        ) : (
          <p>No hay productos en esta categoria con descuentos</p>
        )}
      </CardContent>
    </Card>
  );
};

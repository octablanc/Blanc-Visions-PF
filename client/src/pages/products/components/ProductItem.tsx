import { Card } from '../styled-components/styled';
import { AiFillStar, AiOutlineStar, BsCart4 } from '../../../icons';

interface Props {
  product: {
    name: string;
    code: number;
    image: string;
    description: string[];
    price: number;
  };
}
export const ProductItem = ({ product }: Props) => {
  const { name, description, image, code, price } = product;
  return (
    <Card key={code}>
      <div className='image'>
        <img src={image} alt='notfound' />
      </div>
      <div>
        <h3>{name}</h3>
        <div>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <button>
            <BsCart4 />
          </button>
        </div>
        <ul>
          {description.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
        <h3>${price}</h3>
      </div>
    </Card>
  );
};

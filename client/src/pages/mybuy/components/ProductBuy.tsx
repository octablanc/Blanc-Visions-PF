import { Button } from '@mui/material';
import { ProductOrder } from '../../../redux/slices/misCompras/buySlice';
import {
  BuyContainer,
  BuyImage,
  BuyContent,
} from '../styled-components/stryled';
import { Link } from 'react-router-dom';
import Calification from './Calification';
import {useNavigate} from 'react-router-dom';
export interface Props {
  prodBuy: ProductOrder;
  userId: number;
}
function ProductBuy({ prodBuy, userId }: Props) {
  const navigate = useNavigate();
  const { id, product, quantity, price } = prodBuy;
  const priceProduct = price / quantity;

  return (
    <BuyContainer>
      <BuyImage>
        <img src={product.image} alt="not found" className="img" />
      </BuyImage>
      <BuyContent>
        <h3 className='name__product_order' onClick={() => navigate(`/products/${product.id}`)}>{product.name}</h3>
        <p>
          {quantity} x {priceProduct}
        </p>
      </BuyContent>
      <Link to={`/products/${product.id}`}  className='btn__comprar'>
        <Button variant="contained" size="large">
          Volver a comprar
        </Button>
      </Link>

      <Calification productName={product.name} productImg={product.image} productId={product.id} ratings={product.ratings} userId={userId} />
      
    </BuyContainer>
  );
}

export default ProductBuy;

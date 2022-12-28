import { ProductOrder } from '../../../redux/slices/misCompras/buySlice';
import {
  BuyContainer,
  BuyImage,
  BuyContent,
} from '../styled-components/stryled';
export interface Props {
  prodBuy: ProductOrder;
}

function ProductBuy({ prodBuy }: Props) {
  const { id, product, quantity, price } = prodBuy;
  const priceProduct = price / quantity;
  return (
    <BuyContainer>
      <BuyImage>
        <img src={product.image} alt='not found' className='img' />
      </BuyImage>
      <BuyContent>
        <h3>{product.name}</h3>
        <p>
          {quantity} x {priceProduct}
        </p>
      </BuyContent>
    </BuyContainer>
  );
}

export default ProductBuy;

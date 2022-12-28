import { BuyState } from '../../../redux/slices/misCompras/buySlice';
import {
  CardConteiner,
  ProductsContainer,
  InfoContainer,
} from '../styled-components/stryled';
import ProductBuy from './ProductBuy';

interface Props {
  compras: BuyState;
}

function buyList({ compras }: Props) {
  const {
    buy,
    createdAt,
    id,
    priceTotalDiscount,
    productOrders,
    street,
    height,
    city,
  } = compras;
  const date = createdAt.split('T')[0];
  return (
    <CardConteiner>
      <InfoContainer>
        <p>
          <span>Fecha:</span> {date}
        </p>
        <p>
          <span>Direccion:</span> {street} {height} - {city}
        </p>
        <p>
          <span>Total Pagado:</span> ${priceTotalDiscount}
        </p>
      </InfoContainer>
      <hr />
      <ProductsContainer>
        {productOrders.map((prodBuy) => (
          <ProductBuy prodBuy={prodBuy} key={prodBuy.id} />
        ))}
      </ProductsContainer>
    </CardConteiner>
  );
}

export default buyList;

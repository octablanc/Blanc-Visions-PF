import { BuyState } from '../../../redux/slices/misCompras/buySlice';
import {
  CardConteiner,
  ProductsContainer,
  InfoContainer,
} from '../styled-components/stryled';
import ProductBuy from './ProductBuy';

import moment from 'moment';
import 'moment/locale/es';

const formato = 'DD MMM YYYY';
moment("").format(formato)

interface Props {
  compras: BuyState;
  userId: number;
}

function buyList({ compras, userId }: Props) {
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
          {moment(date).format(formato)}
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
          <ProductBuy prodBuy={prodBuy} key={prodBuy.id} userId={userId} />
        ))}
      </ProductsContainer>
    </CardConteiner>
  );
}

export default buyList;

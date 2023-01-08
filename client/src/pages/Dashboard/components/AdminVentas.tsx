import { ProductOrder } from '../../../redux/slices/misCompras/buySlice';

interface Props {
  sale: {
    userId: number;
    id: number;
    priceTotalDiscount: number;
    productOrders: ProductOrder[];
  };
}

export const AdminVentas = ({ sale }: Props) => {
  const { userId, id, priceTotalDiscount, productOrders } = sale;

  return (
    <div>
      <h2>{userId}</h2>
      <p>{priceTotalDiscount}</p>
    </div>
  );
};

import { BuyState } from "../../../redux/slices/misCompras/buySlice";
import { CardConteiner,ProductsContainer } from "../styled-components/stryled";
import ProductBuy from "./ProductBuy";

interface Props {
  compras: BuyState
}

function buyList({ compras }: Props) {
  const { buy, createdAt, id, priceTotalDiscount, productOrders,street,height,city } = compras;
  const date = createdAt.split("T")[0];
  return (
    <CardConteiner>
      <p className='newFecha'>Fecha: {date}</p>
      <p>Total Pagado:{priceTotalDiscount}</p>
      <ProductsContainer>
        {productOrders.map(prodBuy => <ProductBuy prodBuy={prodBuy} key={prodBuy.id} />)}
      </ProductsContainer>
      <p>Direccion: {street} {height} - {city}</p>
    </CardConteiner>
  );
}

export default buyList;

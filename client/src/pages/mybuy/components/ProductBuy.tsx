import { ProductOrder } from "../../../redux/slices/misCompras/buySlice";
import { Contenedor } from "../styled-components/stryled";
export interface Props {
  prodBuy: ProductOrder;
}

function ProductBuy({ prodBuy }: Props) {
  const { id, product, quantity, price } = prodBuy;
  const priceProduct = price / quantity;
  return (
    <Contenedor>
      <h3>{product.name}</h3>
      <img src={product.image} alt="not found" className="img" />
      <p>
        {quantity} x {priceProduct}
      </p>
    </Contenedor>
  );
}

export default ProductBuy;

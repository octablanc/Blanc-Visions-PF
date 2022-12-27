import { BuyState, ProductOrder } from "../../../redux/slices/misCompras/buySlice";
import ProductBuy from "./ProductBuy";

interface Props {
  compras: {
    buy: boolean;
    id: number;
    priceTotalDiscount: number;
    createdAt: string;
    productOrders: Array<ProductOrder>;
  };
}

function buyList({ compras }: Props) {
  const { buy, createdAt, id, priceTotalDiscount, productOrders } = compras;
  const date = createdAt.split("T")[0];
  return (
    <div>
      <p>{id}</p>
      <p>Fecha: {date}</p>
      <p>Total Pagado:{priceTotalDiscount}</p>
      {/* {productOrders.map(pOrder => (<p>{pOrder.quantity}</p>))} */}
      {productOrders.map(prodBuy => {
        console.log("PRDBUY => ",prodBuy)
        // return <ProductBuy prodBuy={prodBuy} />
        return <ProductBuy />
      })}

      <hr />
    </div>
  );
}

// * Falta agregar la direccion donde se envio cada compra

export default buyList;

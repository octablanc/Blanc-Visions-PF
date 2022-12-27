import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { getAllBuy } from "../../redux/slices/misCompras/comprasTunks";
import Spinner from "../../components/Spinner/Spinner";
import BuyList from "./components/BuyList";

function MyBuy() {
  const { user } = useAppSelector((state) => state.productsState);
  const { myBuys } = useAppSelector((state) => state.buyState);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllBuy(user.id));
  }, [dispatch]);
  return (
    <div>
      <h1>Mis compras</h1>
      {myBuys.length
        ? myBuys.map(compras => <BuyList compras={compras} key={compras.id} />)
        : <Spinner />
      }
    </div>
  );
}
export default MyBuy;


// 'street','height','city'
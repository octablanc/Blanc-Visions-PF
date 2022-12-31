import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { getAllBuy } from '../../redux/slices/misCompras/comprasTunks';
import BuyList from './components/BuyList';

function MyBuy() {
  const { myBuys } = useAppSelector((state) => state.buyState);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllBuy(7));
  }, [dispatch]);
  return (
    <div className='container'>
      <h1>Mis compras</h1>
      {myBuys.length ? (
        myBuys.map((compras) => <BuyList compras={compras} key={compras.id} />)
      ) : (
        <h2>Todavia no tiene compras para mostrar </h2>
      )}
    </div>
  );
}
export default MyBuy;

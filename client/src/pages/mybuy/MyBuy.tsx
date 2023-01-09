import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { getAllBuy } from '../../redux/slices/misCompras/comprasTunks';
import BuyList from './components/BuyList';

function MyBuy() {
  const { myBuys } = useAppSelector((state) => state.buyState);
  const dispatch = useAppDispatch();
  const userState = useAppSelector(({ userState }) => userState.user);
  let idToSearch: number;
  if (userState && userState.id)

  idToSearch = parseInt(userState?.id.toString());

  useEffect(() => {
  dispatch(getAllBuy(idToSearch)); 
  // dispatch(getAllBuy(1));
  // HECHO PARA TESTEAR 

  }, [dispatch, userState]);
  return (
    <div className="container">
      <h1>Mis compras</h1>
      {myBuys.length ? (
        myBuys.map((compras) => <BuyList compras={compras} key={compras.id} userId={idToSearch} />)
      ) : (
        <h2>Todavia no tiene compras para mostrar </h2>
      )}
    </div>
  );
}
export default MyBuy;

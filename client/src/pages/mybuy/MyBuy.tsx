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
<<<<<<< HEAD
    idToSearch = parseInt(userState?.id.toString()); 

  useEffect(() => {
    dispatch(getAllBuy(idToSearch)); 
    // dispatch(getAllBuy(1))  
=======
  idToSearch = parseInt(userState?.id.toString());

  useEffect(() => {
  dispatch(getAllBuy(idToSearch)); 
  // dispatch(getAllBuy(1));
  // HECHO PARA TESTEAR 
>>>>>>> 414cadfc5e9ae5d81627cf0ae88a2525babe2538
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

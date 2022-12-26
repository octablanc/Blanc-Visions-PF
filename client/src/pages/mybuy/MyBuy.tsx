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
  console.log(myBuys);
  return (
    <div>
      <h1>Mis compras</h1>
      {myBuys.length
        ? <BuyList myBuys={myBuys} />
        : <Spinner />
        }
    </div>
  );
}
export default MyBuy;

// user: {
//   id: 1,
//   imageProfile: 'http',
//   name: 'tomas gg',
//   lastName: 'apellido jhj',
//   phone: 123123,
//   mail: 'tomasd@gmail',
//   password: 'contra11231',
//   userName: 'tomasUser',
//   birthday: '2022-12-15',
//   state: true,
//   roleId: 1,
// },

// recibir el id del usuario y buscar sus ordenes de compras

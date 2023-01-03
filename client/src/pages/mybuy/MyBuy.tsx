// import { useEffect } from 'react';
// import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { getAllBuy } from '../../redux/slices/misCompras/comprasTunks';
import BuyList from './components/BuyList';

// buy,
//     createdAt,
//     id,
//     priceTotalDiscount,
//     productOrders,
//     street,
//     height,
//     city,

// id: number;
// price: number;
// quantity: number;
// product: Product;
const myBuys = [
  {
    buy: true,
    createdAt: '2023-01-03T13:18:07.180Z',
    id: 1,
    priceTotalDiscount: 100,
    street: 'call',
    height: '123',
    city: 'varela',
    productOrders: [
      {
        id: 1,
        quantity: 10,
        price: 12000000,
        product: {
          id: 1,
          name: 'Sony alfha 7',
          image:
            'https://http2.mlstatic.com/D_NQ_NP_889577-MLA41501060479_042020-O.webp',
          // price: 1230,
        },
      },
      {
        id: 4,
        quantity: 10,
        price: 123,
        product: {
          id: 1,
          name: 'hola kkkkk',
          image:
            'https://http2.mlstatic.com/D_NQ_NP_889577-MLA41501060479_042020-O.webp',
          // price: 1230,
        },
      },
    ],
  },
  {
    buy: true,
    createdAt: '2023-01-03T13:18:07.180Z',
    id: 1,
    priceTotalDiscount: 100,
    street: 'call',
    height: '123',
    city: 'varela',
    productOrders: [
      {
        id: 4,
        quantity: 10,
        price: 12000000,
        product: {
          id: 6,
          name: 'Sony alfha 7',
          image:
            'https://http2.mlstatic.com/D_NQ_NP_889577-MLA41501060479_042020-O.webp',
          // price: 1230,
        },
      },
      {
        id: 7,
        quantity: 10,
        price: 123,
        product: {
          id: 1,
          name: 'hola kkkkk',
          image:
            'https://http2.mlstatic.com/D_NQ_NP_889577-MLA41501060479_042020-O.webp',
          // price: 1230,
        },
      },
    ],
  },
];

function MyBuy() {
  // const { myBuys } = useAppSelector((state) => state.buyState);
  // const dispatch = useAppDispatch();
  // const userState = useAppSelector(({ userState }) => userState.user);
  // let idToSearch: number;
  // if (userState && userState.id)
  // idToSearch = parseInt(userState?.id.toString());

  // useEffect(() => {
  // dispatch(getAllBuy(idToSearch));
  // }, [dispatch, userState]);
  return (
    <div className="container">
      <h1>Mis compras</h1>
      {/* {myBuys.length ? (
        myBuys.map((compras) => <BuyList compras={compras} key={compras.id} />)
      ) : (
        <h2>Todavia no tiene compras para mostrar </h2>
      )} */}

      {myBuys.map((compras) => (
        <BuyList compras={compras} key={compras.id} />
      ))}
    </div>
  );
}
export default MyBuy;

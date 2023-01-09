import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/app/hooks';
import { getAllSales } from '../../../../redux/slices/Admin/admin.thunk';

export const AdminSales = () => {
  const dispatch = useAppDispatch();
  const { sales } = useAppSelector(state => state.adminState);

  // const handleCurrentSale = async (id: any) => {
  //   await dispatch(getSale(id));
  //   navigate(`/dashboard/sales/${id}`);
  // };
  useEffect(() => {
    dispatch(getAllSales());
  }, [dispatch]);

  return (
    <main className='main'>
      <table className='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Ganancia obtenida</th>
            <th>Cantidad de productos</th>
            {/* <th>Acciones</th> */}
          </tr>
        </thead>

        <tbody>
          {sales.length > 0 &&
            sales.map(sale => (
              <tr>
                <td>{sale.id}</td>
                <td>{sale.priceTotalDiscount}</td>
                <td>{sale.productOrders.length}</td>

                {/* <button onClick={() => handleCurrentSale(sale.id)}>
                  Ver productos vendidos
                  <FaEdit/>
                </button> */}
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
};

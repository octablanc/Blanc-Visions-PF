import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/app/hooks';
import { getAllSales } from '../../../../redux/slices/Admin/admin.thunk';

// import { DataGrid } from '@mui/x-data-grid';
// import Spinner from '../../../../components/Spinner/Spinner';
// import { columnsSales } from '../../helpers';
import { FaEdit } from 'react-icons/fa';

export const AdminSales = () => {
  const dispatch = useAppDispatch();
  const { sales } = useAppSelector((state) => state.adminState);

  // const handleCurrentSale = async (id: any) => {
  //   await dispatch(getSale(id));
  //   navigate(`/dashboard/sales/${id}`);
  // };
  useEffect(() => {
    dispatch(getAllSales());
  }, [dispatch]);

  return (
    <div>
      <table>
        <tr>
          <th>Id</th>
          <th>Ganancia obtenida</th>
          <th>Cantidad de productos</th>

          {/* <th>Acciones</th> */}
        </tr>

        {sales.length > 0 &&
          sales.map((sale) => (
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
      </table>
      {/* <div style={{ height: 400, width: '100%' }}>
        {loading ? (
          <Spinner />
        ) : (
          <DataGrid
            rows={sales}
            columns={columnsSales}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        )}
      </div> */}
    </div>
  );
};

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../../redux/app/hooks';
import { useEffect } from 'react';
import { getProductsAdmin } from '../../../../redux/slices/Admin/admin.thunk';
import Spinner from '../../../../components/Spinner/Spinner';
import { columnsProducts } from '../../helpers';

const ProductsMain = styled.div`
  width: 100%;
`;

export const AdminProducts = () => {
  const dispatch = useAppDispatch();
  const { paginationAdmin, products, loading } = useAppSelector(
    (state) => state.adminState
  );
  const { page, quantity, data, order } = paginationAdmin;
  useEffect(() => {
    dispatch(getProductsAdmin(page, quantity, data, order));
  }, [dispatch]);

  return (
    <ProductsMain>
      <div style={{ height: 400, width: '100%' }}>
        {loading ? (
          <Spinner />
        ) : (
          <DataGrid
            rows={products}
            columns={columnsProducts}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        )}
      </div>
    </ProductsMain>
  );
};

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

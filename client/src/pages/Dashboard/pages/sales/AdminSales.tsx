import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/app/hooks';
import { getAllSales } from '../../../../redux/slices/Admin/admin.thunk';

import { DataGrid } from '@mui/x-data-grid';
import Spinner from '../../../../components/Spinner/Spinner';
import { columnsSales } from '../../helpers';

export const AdminSales = () => {
  const dispatch = useAppDispatch();
  const { sales, loading } = useAppSelector((state) => state.adminState);

  useEffect(() => {
    dispatch(getAllSales());
  }, [dispatch]);

  return (
    <div>
      <div style={{ height: 400, width: '100%' }}>
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
      </div>
    </div>
  );
};

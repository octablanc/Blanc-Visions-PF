import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/app/hooks';
import { getAllCategoriesAdmin } from '../../../../redux/slices/Admin/admin.thunk';

import { DataGrid } from '@mui/x-data-grid';
import Spinner from '../../../../components/Spinner/Spinner';
import { columnsCategories } from '../../helpers';

export const AdminCategories = () => {
  const dispatch = useAppDispatch();
  const { categories, loading } = useAppSelector((state) => state.adminState);

  useEffect(() => {
    dispatch(getAllCategoriesAdmin());
  }, [dispatch]);

  return (
    <div>
      <div style={{ height: 400, width: '100%' }}>
        {loading ? (
          <Spinner />
        ) : (
          <DataGrid
            rows={categories}
            columns={columnsCategories}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        )}
      </div>
    </div>
  );
};

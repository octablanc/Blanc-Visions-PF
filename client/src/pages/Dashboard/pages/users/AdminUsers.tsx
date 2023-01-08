import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/app/hooks';
import { getUsersAdmin } from '../../../../redux/slices/Admin/admin.thunk';

import { DataGrid } from '@mui/x-data-grid';
import Spinner from '../../../../components/Spinner/Spinner';
import { columnsUsers } from '../../helpers';

export const AdminUsers = () => {
  const dispatch = useAppDispatch();
  const { users, loading } = useAppSelector((state) => state.adminState);

  useEffect(() => {
    dispatch(getUsersAdmin());
  }, [dispatch]);

  return (
    <div>
      <div style={{ height: 400, width: '100%' }}>
        {loading ? (
          <Spinner />
        ) : (
          <DataGrid
            rows={users}
            columns={columnsUsers}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        )}
      </div>
    </div>
  );
};

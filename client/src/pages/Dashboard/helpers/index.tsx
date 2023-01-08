import { GridColDef } from '@mui/x-data-grid';

export const columnsProducts: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'code', headerName: 'Code', width: 130 },
  { field: 'stock', headerName: 'Stock', width: 70 },
  { field: 'discount', headerName: 'Discount', width: 130 },
  { field: 'state', headerName: 'State', width: 130 },

  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 90,
  },
];

export const columnsCategories: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'description', headerName: 'Description', width: 130 },
  { field: 'state', headerName: 'State', width: 70 },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 400,
    renderCell: (params) => <button>DELETEEE</button>,
  },
];
export const columnsUsers: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'lastName', headerName: 'LastName', width: 130 },
  { field: 'phone', headerName: 'Phone', width: 70 },
  { field: 'mail', headerName: 'Mail', width: 70 },
  { field: 'state', headerName: 'State', width: 130 },
];

export const columnsSales: GridColDef[] = [
  { field: 'userId', headerName: 'userID', width: 70 },
  { field: 'priceTotalDiscount', headerName: 'PriceTotalDiscount', width: 130 },
];

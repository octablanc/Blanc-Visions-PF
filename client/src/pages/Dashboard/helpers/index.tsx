import { GridColDef } from '@mui/x-data-grid';
import { Link, useNavigate } from 'react-router-dom';
import { FaEdit, BiAddToQueue } from '../../../icons';

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
  {
    field: 'actions',
    headerName: 'Acciones',
    width: 400,
    // // renderCell: (params) => {
    // //   const navigate= useNavigate()
    // //   return (<>
    // //   <button onClick={()=>avigate()}>
    // //    <FaEdit />

    // //   </button>
    //     {/* // <Link to={`/dashboard/products/edit/${params.row.id}`}>
    //     // </Link>
    //     //   <FaEdit />
    //     // <Link to={'/dashboard/products/delete'}>
    //     //   <BiAddToQueue />
    //     // </Link> */}
  },
];

export const columnsCategories: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'description', headerName: 'Description', width: 130 },
  { field: 'state', headerName: 'State', width: 70 },
  {
    field: 'actions',
    headerName: 'Acciones',
    width: 400,
    renderCell: (params) => (
      <>
        <Link to={`/dashboard/categories/edit/${params.row.id}`}>
          <FaEdit />
        </Link>
        <Link to={'/dashboard/categories/create'}>
          <BiAddToQueue />
        </Link>
      </>
    ),
  },
];
export const columnsUsers: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'lastName', headerName: 'LastName', width: 130 },
  { field: 'phone', headerName: 'Phone', width: 70 },
  { field: 'mail', headerName: 'Mail', width: 70 },
  { field: 'state', headerName: 'State', width: 130 },
  {
    field: 'actions',
    headerName: 'Acciones',
    width: 400,
    renderCell: (params) => (
      <>
        <Link to={`/dashboard/users/edit/${params.row.id}`}>
          <FaEdit />
        </Link>
      </>
    ),
  },
];

export const columnsSales: GridColDef[] = [
  { field: 'userId', headerName: 'userID', width: 70 },
  { field: 'priceTotalDiscount', headerName: 'PriceTotalDiscount', width: 130 },
  {
    field: 'actions',
    headerName: 'Acciones',
    width: 400,
    renderCell: (params) => (
      <>
        <Link to={`/dashboard/sales/detail/${params.row.id}`}>
          <FaEdit />
        </Link>
      </>
    ),
  },
];

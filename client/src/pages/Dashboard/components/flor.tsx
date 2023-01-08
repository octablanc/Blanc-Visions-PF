import { Container } from '../styled-components/styles';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/app/hooks';
import {
  getAllCategoriesAdmin,
  getAllSales,
  getProductsAdmin,
  getUsersAdmin,
} from '../../../redux/slices/Admin/admin.thunk';
import { AdminProducts } from './ProductsAdmin/AdminProducts';
import { AdminCategories } from './AdminCategories';
import { AdminVentas } from './AdminVentas';

export const Side = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { paginationAdmin, products, categories, users, sales } =
    useAppSelector((state) => state.adminState);

  const { order, page, quantity, data } = paginationAdmin;

  const handleClick = (e: any) => {
    const value = e.target.outerText;
    if (value === 'Productos existentes')
      dispatch(getProductsAdmin(page, quantity, data, order));
    if (value === 'Categorias existentes') dispatch(getAllCategoriesAdmin());
    if (value === 'Ventas') dispatch(getAllSales());
    if (value === 'Usuarios existentes') dispatch(getUsersAdmin());
  };

  return (
    <Container>
      <h1>Panel Administrador</h1>
      <p>imagen</p>
      <h2>Florencia Caro</h2>
      <hr />

      <h3>Productos</h3>
      <p onClick={handleClick}>Productos existentes</p>
      {products.length > 0 &&
        products.map((product) => <AdminProducts product={product} />)}
      <p onClick={() => navigate('/create')}>Crear Producto</p>
      <p>Productos Activos</p>
      <p>Productos Inactivos</p>
      <hr />

      <h3>Categorias</h3>
      <p>Crear categoria</p>
      <p onClick={handleClick}>Categorias existentes</p>
      {categories.length > 0 &&
        categories.map((category) => <AdminCategories category={category} />)}
      <hr />

      <h3>Usuarios</h3>
      <p onClick={handleClick}>Usuarios existentes</p>
      {users.length > 0 &&
        users.map((user) => <h1 key={user.id}>{user.name}</h1>)}

      <p>Usuarios activos</p>
      <p>Usuarios inactivos</p>
      <hr />
      <h3 onClick={handleClick}>Ventas</h3>
      {sales.length > 0 && sales.map((sale) => <AdminVentas sale={sale} />)}
    </Container>
  );
};

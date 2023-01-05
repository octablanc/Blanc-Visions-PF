import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { getProductByState } from '../../redux/slices/Admin/thunkAdm';
import { AdminContent } from './styled/styledAdmin';
export const AdminDash = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.adminState);

  console.log(products);
  const handleProducts = (e: any) => {
    const value = e.target.outerText;
    if (value === 'Productos Activos') {
      dispatch(getProductByState(true));
    } else {
      dispatch(getProductByState(false));
    }
  };

  useEffect(() => {
    dispatch(getProductByState(true));
  }, [dispatch]);

  //   const handleCategories = (e: any) => {
  //     console.log(e.target.outerText);
  //   };

  //   const handleUser = (e: any) => {
  //     console.log(e.target.outerText);
  //   };
  return (
    <AdminContent>
      <h1>Productos</h1>
      <h3 onClick={() => navigate('/create')}>Crear Productos</h3>
      <p onClick={handleProducts}>Productos Activos</p>
      {/* <ProductsAdmin /> */}
      {/* products.map((products) => <ProductsAdmin products={products} />)} */}
      {/* {products.length > 1 && products.map((product) => <p>{product.name}</p>)} */}
      {products.length > 1 && <p>hello</p>}
      <p>{products[0].name}</p>
      <h1>hola tomas</h1>
      <p onClick={handleProducts}>Productos Inactivos</p>
      {/* <hr />
      <h1>Categorias</h1>
      <h3>Crear Categoria</h3>
      <p onClick={handleCategories}>Categorias Activas</p>
      <p onClick={handleCategories}>Categorias Inactivas</p>
      <hr />
      <h1>Usuarios</h1>
      <p onClick={handleUser}>Activos</p>
      <p onClick={handleUser}>Inactivos</p> */}
    </AdminContent>
  );
};

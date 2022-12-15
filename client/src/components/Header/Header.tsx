import logo from '../../assets/logo.png';
import {
  CategoriesBar,
  Icons,
  Input,
  Menu,
  Nav,
} from './styled-components/styles';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { FaUserCircle } from 'react-icons/fa';
import { BsFillCartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { getAllCategories, getProductsPage } from '../../redux/slices/products';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { useEffect } from 'react';

export const Header = () => {
  const { categories, pagination } = useAppSelector(
    (state) => state.productsState
  );
  const dispatch = useAppDispatch();

  const handleClick = (e: any): void => {
    const value = e.target.innerText;
    dispatch(getProductsPage(1, pagination.quantity, value));
  };

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <>
      <Menu>
        <div className='container'>
          <Nav>
            <div>
              <img src={logo} alt='kingcomm' />
            </div>
            <form>
              <Input type='text' placeholder='Busca tu producto' />
              <HiOutlineMagnifyingGlass />
            </form>
            <Icons>
              <li>
                <Link to='/profile'>
                  <FaUserCircle />
                  Mi Cuenta
                </Link>
              </li>

              <li>
                <BsFillCartFill />
              </li>
            </Icons>
          </Nav>
        </div>
        <CategoriesBar>
          <div className='container'>
            <ul>
              {categories &&
                categories.map((category) => (
                  <li key={category.id}>
                    <Link to={'/products'} onClick={ e => handleClick(e)}>
                      {category.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </CategoriesBar>
      </Menu>
    </>
  );
}
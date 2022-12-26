import logo from '../../assets/logo.png';
import {
  CategoriesBar,
  Icons,
  Input,
  Menu,
  Nav,
  Desplegable,
  AuthButtons
} from './styled-components/styles';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { getAllCategories, getProductsPage } from '../../redux/slices/products';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../login/Login';
import LogOut from '../login/components/LogOut';

// Interfaces
import { User } from '../../models/User.model';
import SingUp from '../singup/SingUp';
import AccountMenu from './components/AccountMenu';
import { BsFillCartFill } from 'react-icons/bs';

export const Header = () => {
  const userState: User | null = useAppSelector(
    ({ userState }) => userState.user
  );
  const loading = useAppSelector(({ userState }) => userState.loading);

  const { categories, pagination } = useAppSelector(
    (state) => state.productsState
  );
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const [selectActive, setSelectActive] = useState(false);
  const handleClick = (e: any): void => {
    const value = e.target.innerText;
    dispatch(getProductsPage(1, pagination.quantity, value));
  };
  const handleHover = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (selectActive) {
      return setSelectActive(false);
    }
    setSelectActive(true);
  };
  const navigatePage = (e: any) => {
    const { innerText } = e.target;
    console.log(innerText);
    if (innerText !== 'perfil') return console.log(innerText);
    navigate(`/profile`);
    setSelectActive(false);
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
              <img src={logo} alt='kingcomm' onClick={() => navigate(`/`)} />
            </div>
            <form>
              <Input type='text' placeholder='Busca tu producto' />
              <HiOutlineMagnifyingGlass />
            </form>
            <Icons>
              <li>
                <BsFillCartFill />
              </li> 
             
              {userState && (
                <li>
                  <div
                    onClick={handleHover}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                  {/* <AccountMenu/> */}
                    Mi Cuenta
                  </div>

                  {selectActive && (
                    <Desplegable>
                      <li onClick={navigatePage}>perfil</li>
                      <li onClick={navigatePage}>compras</li>
                      <li onClick={navigatePage}>cerrar sesion</li>
                    </Desplegable>
                  )}

                </li>
              )}

              <li>{loading ? <></> : !userState? 
                <AuthButtons>
                  <Login />
                  <SingUp/>
                </AuthButtons> 
                : 
                <LogOut/>
                // <></>
              }</li>
            </Icons>
          </Nav>
        </div>
        <CategoriesBar>
          <div className='container'>
            <ul>
              {categories &&
                categories.map((category) => (
                  <li key={category.id}>
                    <Link to={'/products'} onClick={(e) => handleClick(e)}>
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
};

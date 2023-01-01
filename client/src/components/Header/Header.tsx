import logo from '../../assets/logo2.svg';
import { HiOutlineMagnifyingGlass, BsCart4 } from '../../icons';
import { Link, NavLink } from 'react-router-dom';
import {
  NavInput,
  Navbar,
  NavMenu,
  NavOptions,
  Spacing,
  Nav,
  AuthButtons,
} from './styled-components/Header.styled';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { useEffect } from 'react';
import { getAllCategories } from '../../redux/slices/categories';

// Login, Singup and Logout
import Login from '../login/Login';
// import LogOut from '../login/components/LogOut';
import SingUp from '../singup/SingUp';
import { User } from '../../models/User.model';
import AccountMenu from './components/AccountMenu';
import { FilterCategory } from '../FilterCategory';
import { FormSearch } from '../Search/FormSearch';

export const Header = () => {
  const userState: User | null = useAppSelector(
    ({ userState }) => userState.user
  );
  const loading = useAppSelector(({ userState }) => userState.loading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <>
      <Nav>
        <Navbar className='container'>
          <Link to='/'>
            <img src={logo} alt='kingcomm' />
          </Link>

          <NavMenu>
            <FormSearch />
            <NavOptions>
              <li>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    isActive ? 'active' : undefined
                  }
                >
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/products'
                  className={({ isActive }) =>
                    isActive ? 'active' : undefined
                  }
                >
                  Productos
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/about'
                  className={({ isActive }) =>
                    isActive ? 'active' : undefined
                  }
                >
                  Nosotros
                </NavLink>
              </li>

              <FilterCategory />

              <li>
                <Link to='/cart'>
                  <BsCart4 />
                </Link>
              </li>

              <li>
                {loading ? (
                  <></>
                ) : !userState ? (
                  <AuthButtons>
                    <Login />
                    <SingUp />
                  </AuthButtons>
                ) : (
                  <AccountMenu />
                )}
              </li>
            </NavOptions>
          </NavMenu>
        </Navbar>
      </Nav>
      <Spacing></Spacing>
    </>
  );
};

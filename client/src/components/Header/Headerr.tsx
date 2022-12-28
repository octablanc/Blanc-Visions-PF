import logo from '../../assets/logo2.svg';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  NavInput,
  Navbar,
  NavMenu,
  NavOptions,
  Spacing,
  Nav,
  AuthButtons
} from './styled-components/Header.styled';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { useEffect } from 'react';
import { getAllCategories, setCategory } from '../../redux/slices/categories';

// Login, Singup and Logout
import Login from '../login/Login';
import LogOut from '../login/components/LogOut';
import SingUp from '../singup/SingUp';
import { User } from '../../models/User.model';
import AccountMenu from './components/AccountMenu';

export const Headerr = () => {
  const userState: User | null = useAppSelector(
    ({ userState }) => userState.user
  );
  const loading = useAppSelector(({ userState }) => userState.loading);
  const { categories } = useAppSelector(state => state.categoriesState);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCategory(e.target.value));
    navigate('/products');
  };

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
            <form>
              <NavInput type='text' placeholder='Search product' />
              <HiOutlineMagnifyingGlass />
            </form>
            <NavOptions>
              <li>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    isActive ? 'active' : undefined
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/products'
                  className={({ isActive }) =>
                    isActive ? 'active' : undefined
                  }
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/about'
                  className={({ isActive }) =>
                    isActive ? 'active' : undefined
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <form>
                  <select onChange={handleChange}>
                    <option value=''>All Categories</option>
                    {categories.map(category => (
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </form>
              </li>
              <li>{loading ? <></> : !userState? 
                <AuthButtons>
                  <Login />
                  <SingUp/>
                </AuthButtons> 
                : 
                <AccountMenu/> 
              }</li>
{/* 
              <li>Login</li>
              <li>Singup</li> */}
            </NavOptions>
          </NavMenu>
        </Navbar>
      </Nav>
      <Spacing></Spacing>
    </>
  );
};

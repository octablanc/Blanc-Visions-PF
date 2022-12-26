import logo from '../../assets/logo2.svg';

import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

import { Link, NavLink } from 'react-router-dom';
import {
  NavInput,
  Navbar,
  NavMenu,
  NavOptions,
  Spacing,
  Nav,
} from './styled-components/Header.styled';

export const Headerr = () => {
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
              <li>Sing In</li>
              <li>Login</li>
            </NavOptions>
          </NavMenu>
        </Navbar>
      </Nav>
      <Spacing></Spacing>
    </>
  );
};

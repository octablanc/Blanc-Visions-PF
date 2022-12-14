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

export const Header = () => {
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
                <Link to='/myaccount'>
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
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/products'>Productos</Link>
              </li>
              <li>
                <Link to='/products/create'>Crear Productos</Link>
              </li>
            </ul>
          </div>
        </CategoriesBar>
      </Menu>
    </>
  );
};

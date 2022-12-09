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
                <FaUserCircle />
                Mi Cuenta
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
              <li>Categoria 1</li>
              <li>Categoria 2</li>
              <li>Categoria 3</li>
              <li>Categoria 4</li>
            </ul>
          </div>
        </CategoriesBar>
      </Menu>
    </>
  );
};

import logo from '../../assets/logo.png';
import {
  CategoriesBar,
  Icons,
  Input,
  Menu,
  Nav,
  Desplegable
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
                <div onClick={handleHover}>
                  <FaUserCircle />
                  Mi Cuenta
                </div>
                {selectActive &&
                  <Desplegable>
                    <li onClick={navigatePage}>perfil</li>
                    <li onClick={navigatePage}>compras</li>
                    <li onClick={navigatePage}>cerrar sesion</li>
                  </Desplegable>
                }
              </li>

              <li>
                <BsFillCartFill />
              </li>

              <li>
                {
                  loading? <></> : userState? <LogOut/> : <Login/>
                }
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
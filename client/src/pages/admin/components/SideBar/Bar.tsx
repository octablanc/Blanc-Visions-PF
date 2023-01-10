import { Link } from 'react-router-dom';
import {
  BsCameraFill,
  HiUsers,
  FaMoneyBillAlt,
  FaListUl,
  MdOutlineLogout,
} from '../../../../icons';
import {
  AdminContent,
  AdminImage,
  Icon,
  Item,
  Logo,
  SideBarContainer,
} from './styled-components/styles';
import img from '../../../../assets/img.png';
import logo from '../../../../assets/logo2.svg';

export const Bar = () => {
  return (
    <SideBarContainer>
      <Logo>
        <img src={logo} alt='logo' />
      </Logo>
      <AdminContent>
        <AdminImage>
          <img src={img} alt='img user' />
        </AdminImage>
        <div>
          <h2>FLORENCIA</h2>
          <h4>Administrador</h4>
        </div>
      </AdminContent>
      <ul>
        <Item>
          <Link to='products'>
            <Icon>
              <BsCameraFill />
            </Icon>
            <span>Productos</span>
          </Link>
        </Item>
        <Item>
          <Link to='categories'>
            <Icon>
              <FaListUl />
            </Icon>
            <span>Categorias</span>
          </Link>
        </Item>
        <Item>
          <Link to='/dashboard'>
            <Icon>
              <HiUsers />
            </Icon>
            <span>Usuarios</span>
          </Link>
        </Item>
        <Item>
          <Link to='sales'>
            <Icon>
              <FaMoneyBillAlt />
            </Icon>
            <span>Ventas</span>
          </Link>
        </Item>
      </ul>
      <ul>
        <Item>
          <Link to='products'>
            <Icon>
              <MdOutlineLogout />
            </Icon>
            <span>Cerrar Sesión</span>
          </Link>
        </Item>
      </ul>
    </SideBarContainer>
  );
};

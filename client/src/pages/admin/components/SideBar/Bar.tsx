import { Link, useNavigate } from 'react-router-dom';
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
import logo from '../../../../assets/logo2.svg';
import { useAppSelector } from '../../../../redux/app/hooks';
import { signOut } from 'firebase/auth';
import { auth } from '../../../../firebase/firebase.config';

export const Bar = () => {
  const { user } = useAppSelector(state => state.userState);
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <SideBarContainer>
      <Logo>
        <img src={logo} alt='logo' />
      </Logo>
      <AdminContent>
        <AdminImage>
          <img src={user?.imageProfile} alt='img user' />
        </AdminImage>
        <div>
          <h2>{user?.name}</h2>
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
        <Item onClick={handleLogOut}>
          <Icon>
            <MdOutlineLogout />
          </Icon>
          <span>Cerrar Sesión</span>
        </Item>
      </ul>
    </SideBarContainer>
  );
};

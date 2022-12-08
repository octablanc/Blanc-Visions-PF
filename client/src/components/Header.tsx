import logo from '../assets/logo.png';
import styled from 'styled-components';

const Menu = styled.header`
  background-color: ${props => props.theme.colors.secondary};
  padding-top: 1.2rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  background-color: ${props => props.theme.colors.secondary};
  border: none;
  border-bottom: 1px solid;
  text-align: center;

  &:focus {
    outline: none;
  }
`;

export const Header = () => {
  return (
    <Menu>
      <div className='container'>
        <Nav>
          <div>
            <img src={logo} alt='kingcomm' />
          </div>
          <form>
            <Input type='text' placeholder='Busca tu producto' />
          </form>
          <div>icons</div>
        </Nav>
      </div>
    </Menu>
  );
};

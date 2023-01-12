import styled from 'styled-components';

export const Nav = styled.header`
  background-color: white;
  padding: 0.5rem;
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.151);
  /* position: fixed; */
  width: 100%;
  z-index: 100;

  @media (min-width: 768px) {
    position: fixed;
  }

  .searchfilter {
    display: none;
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      gap: 2rem;
    }
  }
`;

export const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const NavOptions = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;

  li {
    text-transform: uppercase;
    font-weight: bold;
  }

  a {
    color: black;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2.5rem;
  }
`;

export const NavInput = styled.input`
  border: none;
  border-bottom: 1px solid;
  text-align: center;
  background: transparent;

  &:focus {
    outline: none;
  }
`;

export const Spacing = styled.div`
  /* height: 21rem; */

  @media (min-width: 768px) {
    height: 6rem;
  }
`;

export const AuthButtons = styled.div`
  display: flex;
  flex-direction: row;
  white-space: nowrap;

  button {
    text-transform: uppercase;
    font-weight: 800;
    color: black;
    font-size: 13px;
    padding: 0px;
  }
`;

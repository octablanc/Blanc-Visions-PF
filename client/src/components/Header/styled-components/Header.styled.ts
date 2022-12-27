import styled from "styled-components";

export const Nav = styled.header`
  background-color: white;
  padding: 1rem;
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.151);
  position: fixed;
  width: 100%;
  z-index: 100;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavMenu = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;
`;

export const NavOptions = styled.ul`
  display: flex;
  gap: 2.5rem;

  li {
    text-transform: uppercase;
    font-weight: bold;
  }

  a {
    color: black;
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
  height: 6rem;
`;

export const AuthButtons = styled.div`
  display: flex;
  flex-direction: row;
  white-space: nowrap;

  button {
    text-transform: uppercase;
    font-weight: bold;
    color: black;
    font-size: 15px;
    padding: 0px;
  }
`;

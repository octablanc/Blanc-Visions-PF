import styled from 'styled-components';

export const Menu = styled.header`
  background-color: ${props => props.theme.colors.secondary};
  padding-top: 1.2rem;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Input = styled.input`
  background-color: ${props => props.theme.colors.secondary};
  border: none;
  border-bottom: 1px solid;
  text-align: center;

  &:focus {
    outline: none;
  }
`;

export const Icons = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1.5rem;

  li {
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    justify-content: space-between;
    align-items: center;
  }
`;

export const CategoriesBar = styled.div`
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  width: 100%;
  display: flex;
  align-items: center;

  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }
  }
`;

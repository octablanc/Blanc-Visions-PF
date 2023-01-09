import styled from 'styled-components';

export const AdminImage = styled.div`
  overflow: hidden;
  img {
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const AdminContent = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  margin-bottom: 3rem;
  width: 100%;
  h4,
  h3 {
    margin: 0;
  }
`;

export const SideBarContainer = styled.nav`
  position: sticky;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  /* width: 8rem; */
  width: 28rem;
  background: white;
  overflow: hidden;
  transition: width 1s;
  padding: 3rem 0 1rem 0;
  display: grid;
  grid-template-rows: auto auto 1fr auto;

  &:hover {
    width: 28rem;
    transition: 1s;
  }

  a {
    font-size: 1.4rem;
    color: rgb(85, 83, 83);
  }
`;

export const Item = styled.li`
  a {
    display: flex;
    width: 100%;
    align-items: center;
    color: rgb(85, 83, 83);
    text-transform: capitalize;
    font-weight: 500;
    transition: 0.2s;

    &:hover {
      background-color: #eee;
    }
  }

  &:hover svg {
    transition: 0.5s;
    color: ${props => props.theme.colors.primary};
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 6rem;
  font-size: 2.5rem;
`;

export const Logo = styled.div`
  padding-left: 2rem;
  margin-bottom: 3rem;
`;

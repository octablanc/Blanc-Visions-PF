import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

const GridLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
`;

export const Layout = () => {
  return (
    <GridLayout>
      <Header />
      <Outlet />
      <Footer />
    </GridLayout>
  );
};

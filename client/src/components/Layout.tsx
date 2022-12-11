import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

const GridLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
`;

const ContainerLayout = styled.div`
  padding: 3.5rem 0;
`;

export const Layout = () => {
  return (
    <GridLayout>
      <Header />
      <ContainerLayout>
        <Outlet />
      </ContainerLayout>
      <Footer />
    </GridLayout>
  );
};

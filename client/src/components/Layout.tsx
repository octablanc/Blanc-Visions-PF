import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useAppSelector } from '../redux/app/hooks';


const GridLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
`;

const ContainerLayout = styled.div`
  padding: 3.5rem 0;
`;

export const Layout = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const loading = useAppSelector(({userState})=> userState.loading);
  
  useEffect(()=> {
    setOpen(loading);
  }, [ loading ]);

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open? true:false}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <GridLayout>
        <Header />
        <ContainerLayout>
          <Outlet />
        </ContainerLayout>
        <Footer />
      </GridLayout>
    </div>
  );
};

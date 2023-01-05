import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer/Footer';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useAppSelector } from '../../redux/app/hooks';
import { Header } from '../Header/Header';
import { ContainerLayout, GridLayout } from './styled-components/style';

export const Layout = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const loading = useAppSelector(({ userState }) => userState.loading);

  useEffect(() => {
    setOpen(loading);
  }, [loading]);

  return (
    <div>
      <Backdrop
        sx={{
          backgroundColor: '#00000061',
          backdropFilter: 'blur(10px)',
          color: '#fff',
          zIndex: theme => theme.zIndex.drawer + 1,
        }}
        open={open ? true : false}
      >
        <CircularProgress color='inherit' />
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

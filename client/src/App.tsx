import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Detail } from './pages/detail/Detail';
import { Home } from './pages/home/Home';
import { Products } from './pages/products/list/Products';
import CreateProduct from './pages/products/create/CreateProduct';
import { store } from './redux/app/store';
import { NotFound } from './pages/error/NotFound';
import { CrearProduct } from './pages/products/create/CrearProduct';
import { Profile } from './pages/profile/components/Profile';
import { Cart } from './pages/cart/components/Cart/Cart';
import { About } from './pages/about/about';

// Authentication
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase/firebase.config';

// Redux
import { useAppDispatch, useAppSelector } from './redux/app/hooks';
import { getUser } from './redux/slices/user-authentication';

function App() {
  const userState = useAppSelector(({ userState })=> userState.user);
  const dispatch = useAppDispatch();

  // Set the user logged in the start 
  useEffect(()=> {
    onAuthStateChanged(auth, async (user)=>{
        if(user && !userState)
          dispatch(getUser(user.email));
        if(!user)
          dispatch(getUser(user));
    });
  });

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='products' element={<Products />} />
            <Route path='products/create' element={<CreateProduct />} />
            <Route path='products/crear' element={<CrearProduct />} />
            <Route path='products/:id' element={<Detail />} />
            <Route path='cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
            <Route path='profile/' element={<Profile />} />
            <Route path='about' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Detail } from './pages/detail/Detail';
import { Home } from './pages/home/Home';
import { Products } from './pages/products/list/Products';
import CreateProduct from './pages/products/create/CreateProduct';
import { NotFound } from './pages/error/NotFound';
import { Profile } from './pages/profile/components/Profile';
import { Cart } from './pages/cart/components/Cart/Cart';
import { About } from './pages/about/about';
import { Questions } from './pages/questions/Questions';

// Authentication
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase.config';

// Redux
import { useAppDispatch, useAppSelector } from './redux/app/hooks';
import { getUser } from './redux/slices/user-authentication';
import MyBuy from './pages/mybuy/MyBuy';
import { Privacy } from './pages/privacy/Privacy';
import { Terms } from './pages/terms/Terms';
import { AdminDash } from './components/Admin/AdminDash';

function App() {
  const userState = useAppSelector(({ userState }) => userState.user);
  const dispatch = useAppDispatch();

  // Set the user logged in the start
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user && !userState) dispatch(getUser(user.email));
      if (!user) dispatch(getUser(user));
    });
  });

  console.log(process.env.REACT_APP_BACKEND_URL);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='products' element={<Products />} />
          {userState?.role?.name === 'admin' && (
            <Route path='/create' element={<CreateProduct />} />
          )}
          <Route path='products/:id' element={<Detail />} />
          <Route path='cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
          <Route path='profile/' element={<Profile />} />
          <Route path='about' element={<About />} />
          <Route path='buy' element={<MyBuy />} />
          {/*Hecho para testear mis compras...*/}
          {/*Hecho para testear dashAdm..*/}
          <Route path='admindash' element={<AdminDash />} />
          <Route path='questions' element={<Questions />} />
          <Route path='privacy' element={<Privacy />} />
          <Route path='termsyconditions' element={<Terms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

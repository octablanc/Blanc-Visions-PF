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
import { LayoutDashboard } from './pages/dashboard/components/Layout/LayoutDashboard';
import {
  AdminProducts,
  AdminCategories,
  AdminSales,
  AdminUsers,
} from './pages/dashboard/pages';
import { FormCategory } from './pages/dashboard/pages/categories/FormCategory';

// import { LayoutDashboard } from './pages/Dashboard/Dashboard';

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
          {/* {userState?.role?.name === 'admin' && (
        
            <Route path='/create' element={<CreateProduct />} />
       
          )} */}

          <Route path='products/:id' element={<Detail />} />
          <Route path='cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
          <Route path='profile/' element={<Profile />} />
          <Route path='about' element={<About />} />

          {userState?.id && <Route path='buy' element={<MyBuy />} />}
          {/*Hecho para testear mis compras...*/}
          <Route path='questions' element={<Questions />} />
          <Route path='privacy' element={<Privacy />} />
          <Route path='termsyconditions' element={<Terms />} />
        </Route>
        <Route path='/dashboard' element={<LayoutDashboard />}>
          <Route path='products' element={<AdminProducts />} />
          <Route path='products/create' element={<CreateProduct />} />

          <Route path='categories' element={<AdminCategories />} />
          <Route path='categories/edit/:id' element={<FormCategory />} />
          <Route path='categories/create' element={<FormCategory />} />

          <Route path='sales' element={<AdminSales />} />
          <Route path='users' element={<AdminUsers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

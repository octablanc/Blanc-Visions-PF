import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Detail } from './pages/detail/Detail';
import { Home } from './pages/home/Home';
import { Products } from './pages/products/Products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index path='home' element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='detail' element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

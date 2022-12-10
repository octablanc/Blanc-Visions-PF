import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Detail } from "./pages/detail/Detail";
import { Home } from "./pages/home/Home";
import { Products } from "./pages/products/Products";
import { store } from "./redux/app/store";
import { Error } from "./pages/error/Error";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="home" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="detail" element={<Detail />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

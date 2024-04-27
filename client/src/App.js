
import  {BrowserRouter, Route, Routes } from "react-router-dom"
import RegisterForm from "./screens/register";
import LoginForm from "./screens/login";
import ProductList from "./screens/ProductList";
import ProductDetail from "./screens/ProductDetail";
import Home from "./screens/home";
import ShoppingCart from "./screens/shoppingCart";
import OrderConformation from "./screens/orderConfirmation";


function App() {

  return (<>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product/:productId/:variantId" element={<ProductDetail />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/order-confirm" element={<OrderConformation />} />

       
  </Routes>
  </BrowserRouter>
    </>

  );
}

export default App;
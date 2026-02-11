import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import ProductCard from "./components/ProductCard";
import CategoryPage from "./pages/CategoryPage";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/loginPage/Login";
import Signup from "./pages/signupPage/Signup";
import Men from "./pages/shop/Beauty";
import Beauty from "./pages/shop/Beauty";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
     
      <Routes>
        <Route path="/shop/beauty" element={<Beauty />} />
        <Route path="/shop/men" element={<Men />} />
          <Route path="/signup" element={<Signup />} />
           <Route path="/login" element={<Login />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productCard" element={<ProductCard />} />
         <Route path="/shop/:category" element={<CategoryPage />} />
       
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;





import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import ProductCard from "./components/ProductCard";
import CategoryPage from "./pages/CategoryPage";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/loginPage/Login";
import Signup from "./pages/signupPage/Signup";
import Beauty from "./pages/shop/Beauty";
import Men from "./pages/shop/Men";
import Women from "./pages/shop/Women";
import GenZ from "./pages/shop/GenZ";
import Studio from "./pages/shop/Studio";
import Kids from "./pages/shop/Kids";
import Home from "./pages/shop/Home";


function App() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    console.log("User logged in App:", userData);
  };

  return (
    <BrowserRouter>
  
      <Navbar user={user} />

      <Routes>
        <Route path="/shop/men" element={<Men />} />
        <Route path="/shop/women" element={<Women />} />
        <Route path="/shop/kids" element={<Kids />} />
        <Route path="/shop/genz" element={<GenZ />} />
        <Route path="/shop/home" element={<Home />} />
        <Route path="/shop/beauty" element={<Beauty />} />
        <Route path="/shop/studio" element={<Studio />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/login"
          element={<Login onLoginSuccess={handleLoginSuccess} />}
        />

        <Route path="/" element={<LandingPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productCard" element={<ProductCard />} />
        <Route path="/shop/:category" element={<CategoryPage />} />
      
<Route path="/cart" element={<Cart />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

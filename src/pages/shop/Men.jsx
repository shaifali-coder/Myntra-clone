import React from "react";
import "./Men.css";
import { useNavigate } from "react-router-dom";

const Men = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1617137968427-85924c800a22",
      brand: "Roadster",
      name: "Men Regular Fit T-Shirt",
      price: 699,
      oldPrice: 1299,
      rating: 4.3,
      ratingCount: 1200
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
      brand: "HRX",
      name: "Men Slim Fit Shirt",
      price: 899,
      oldPrice: 1799,
      rating: 4.1,
      ratingCount: 980
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7",
      brand: "Levis",
      name: "Men Casual Jacket",
      price: 1999,
      oldPrice: 3999,
      rating: 4.5,
      ratingCount: 2100
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
      brand: "H&M",
      name: "Men Sports T-Shirt",
      price: 799,
      oldPrice: 1499,
      rating: 4.0,
      ratingCount: 650
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1603252109303-2751441dd157",
      brand: "Nike",
      name: "Men Running Shoes",
      price: 2999,
      oldPrice: 5999,
      rating: 4.6,
      ratingCount: 3400
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1584865288642-42078afe6942",
      brand: "H&M",
      name: "Men Hoodie",
      price: 1199,
      oldPrice: 2499,
      rating: 4.2,
      ratingCount: 1120
    },
    {
      id: 7,
      img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
      brand: "Mufti",
      name: "Men Track Pants",
      price: 999,
      oldPrice: 1999,
      rating: 4.4,
      ratingCount: 1450
    },
    {
      id: 8,
      img: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34",
      brand: "Zara",
      name: "Men Denim Shirt",
      price: 1299,
      oldPrice: 2599,
      rating: 4.3,
      ratingCount: 870
    },
    {
      id: 9,
      img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35",
      brand: "Roadster",
      name: "Men Jeans",
      price: 1499,
      oldPrice: 2999,
      rating: 4.1,
      ratingCount: 910
    },
    {
      id: 10,
      img: "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f",
      brand: "HRX",
      name: "Men Gym Wear",
      price: 899,
      oldPrice: 1899,
      rating: 4.0,
      ratingCount: 720
    },
    {
      id: 11,
      img: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e",
      brand: "Levis",
      name: "Men Check Shirt",
      price: 999,
      oldPrice: 1999,
      rating: 4.5,
      ratingCount: 1880
    },
    {
      id: 12,
      img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a",
      brand: "Puma",
      name: "Men Casual Shoes",
      price: 2499,
      oldPrice: 4999,
      rating: 4.4,
      ratingCount: 2500
    }
  ];

  return (
    <div className="men-container">
         <div className="men-banner">
        <img
          src="https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=1400&q=80"
          alt="Men Fashion Banner"
        />
        <div className="banner-content">
          <h1>Men’s Fashion Sale</h1>
          <p>Up To 60% OFF</p>
          
        </div>
      </div>


      <h2 className="men-title">Men Collection</h2>

      <div className="men-grid">
        {products.map((product) => (
             <div
  key={product.id}
  className="men-card"
  onClick={() =>
    navigate(`/products/${product.id}`, { state: { product } })
  }
  style={{ cursor: "pointer" }}
>

      
            <div className="image-container">
              <img
                src= {`${product.img}?auto=format&fit=crop&w=500&q=80`}
                alt={product.name}
              />

              <div className="rating-badge">
                {product.rating} ★ | {product.ratingCount}
              </div>
            </div>

            <div className="product-info">
              <h4 className="brand-name">{product.brand}</h4>
              <p className="product-name">{product.name}</p>

              <div className="price-section">
                <span className="new-price">₹{product.price}</span>
                <span className="old-price">₹{product.oldPrice}</span>
                <span className="discount">
                  {Math.round(
                    ((product.oldPrice - product.price) / product.oldPrice) * 100
                  )}% OFF
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Men;


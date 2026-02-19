
import { useNavigate } from "react-router-dom";

import React from "react";
import Navbar from "../../components/Navbar";
import "./Women.css";

const Women = () => {
  const navigate = useNavigate();

const products = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1727430228383-aa1fb59db8bf",
    brand: "H&M",
    name: "Women Floral Dress",
    price: 1499,
    oldPrice: 2999,
    rating: 4.3,
    ratingCount: 1200
  },
  {
    id: 2,
    img: "https://koshurindia.com/cdn/shop/files/KSR_2374copy.jpg",
    brand: "Zara",
    name: "Women Casual Top",
    price: 999,
    oldPrice: 1999,
    rating: 4.1,
    ratingCount: 980
  },
  {
    id: 3,
    img: "https://witcdn.klaudiofashion.com/waist-showing-woman-dress-orangeportokalli-dress-klaudio-fashion-el-8474-21648-68-K.jpg",
    brand: "Biba",
    name: "Women Ethnic Kurti",
    price: 1299,
    oldPrice: 2599,
    rating: 4.5,
    ratingCount: 2100
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    brand: "Forever 21",
    name: "Women Party Dress",
    price: 2499,
    oldPrice: 4999,
    rating: 4.6,
    ratingCount: 3400
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    brand: "ONLY",
    name: "Women Slim Fit Jeans",
    price: 1799,
    oldPrice: 3599,
    rating: 4.4,
    ratingCount: 1500
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1509631179647-0177331693ae",
    brand: "Levis",
    name: "Women Casual Shirt",
    price: 1099,
    oldPrice: 2199,
    rating: 4.2,
    ratingCount: 870
  },
  {
    id: 7,
    img: "https://assets.ajio.com/medias/sys_master/root/20250110/0prw/6781372b0431850e0d927504/-473Wx593H-701040430-blue-MODEL.jpg",
    brand: "H&M",
    name: "Women Long Coat",
    price: 2999,
    oldPrice: 5999,
    rating: 4.4,
    ratingCount: 1900
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    brand: "Zara",
    name: "Women Stylish Jacket",
    price: 1999,
    oldPrice: 3999,
    rating: 4.2,
    ratingCount: 1100
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
    brand: "Biba",
    name: "Women Designer Saree",
    price: 2199,
    oldPrice: 4399,
    rating: 4.5,
    ratingCount: 2500
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    brand: "ONLY",
    name: "Women Crop Top",
    price: 899,
    oldPrice: 1799,
    rating: 4.1,
    ratingCount: 760
  },
  {
    id: 11,
    img: "https://t3.ftcdn.net/jpg/02/57/42/18/360_F_257421816_x7SfiuzzV1dboglZ0E8i85VtoLDoK1i8.jpg",
    brand: "Forever 21",
    name: "Women Blazer",
    price: 2199,
    oldPrice: 4399,
    rating: 4.3,
    ratingCount: 1320
  },
  {
    id: 12,
    img: "https://t3.ftcdn.net/jpg/04/07/00/22/360_F_407002254_4DT8TXeH3AdBiuqageEVYZ9g3BmrWAsR.jpg",
    brand: "Levis",
    name: "Women Casual Dress",
    price: 1399,
    oldPrice: 2799,
    rating: 4.2,
    ratingCount: 940
  }
];


 return (
    <div className="women-container">

      <div className="women-banner">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=80"
          alt="Women Banner"
        />
        <div className="banner-content">
          <h1>WOMEN COLLECTION</h1>
          <p>Flat 50% OFF On New Arrivals</p>
    
        </div>
      </div>

      <h2 className="women-title">Women Collection</h2>
<div className="women-grid">
  {products.map((product) => {

    const price = Number(product.price) || 0;
    const oldPrice = Number(product.oldPrice) || 0;

    let discount = 0;
    if (oldPrice > price && oldPrice > 0) {
      discount = Math.round(((oldPrice - price) / oldPrice) * 100);
    }

    return (
    <div
  key={product.id}
  className="women-card"
  onClick={() =>
    navigate(`/products/${product.id}`, { state: { product } })
  }
  style={{ cursor: "pointer" }}
>


        <div className="image-wrapper">
          <img
            src={`${product.img}?auto=format&fit=crop&w=500&q=80`}
            alt={product.name}
          />

          <div className="rating-badge">
            {product.rating} ★ | {product.ratingCount}
          </div>
        </div>

        <div className="product-info">
          <h4 className="brand">{product.brand}</h4>
          <p className="name">{product.name}</p>

          <div className="price-section">
            <span className="new-price">₹{price}</span>

            {oldPrice > 0 && (
              <>
                <span className="old-price">₹{oldPrice}</span>
                {discount > 0 && (
                  <span className="discount">{discount}% OFF</span>
                )}
              </>
            )}
          </div>
        </div>

      </div>
    );
  })}
</div>




    </div>
  );
};

export default Women;

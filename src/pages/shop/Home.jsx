import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: "Modern Sofa Set",
      price: 45999,
      oldPrice: 59999,
      rating: 4.5,
      ratingCount: 1243,
      img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
    },
    {
      id: 2,
      name: "Wooden Dining Table",
      price: 25999,
      oldPrice: 34999,
      rating: 4.2,
      ratingCount: 876,
      img: "https://ikiru.in/cdn/shop/files/buy-dining-furniture-set-hiro-wooden-and-marble-finish-modern-designed-6-seater-dining-table-for-dining-room-by-orange-tree-on-ikiru-online-store-2.jpg?v=1739205898&width=1840"
    },
    {
      id: 3,
      name: "King Size Bed",
      price: 38999,
      oldPrice: 48999,
      rating: 4.6,
      ratingCount: 1543,
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    },
    {
      id: 4,
      name: "Luxury Wardrobe",
      price: 32999,
      oldPrice: 41999,
      rating: 4.1,
      ratingCount: 654,
      img: "https://images.unsplash.com/photo-1618220179428-22790b461013"
    },
    {
      id: 5,
      name: "Study Table",
      price: 11999,
      oldPrice: 15999,
      rating: 4.3,
      ratingCount: 942,
      img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4"
    },
    {
      id: 6,
      name: "Office Chair",
      price: 7999,
      oldPrice: 10999,
      rating: 4.4,
      ratingCount: 1120,
      img: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8"
    },
    {
      id: 7,
      name: "TV Unit",
      price: 14999,
      oldPrice: 19999,
      rating: 4.0,
      ratingCount: 523,
      img: "https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/Catalogue/20240925104408-4486234c-27c6-4d19-bc4b-7f8230079e5a.jpg"
    },
    {
      id: 8,
      name: "Bookshelf",
      price: 9999,
      oldPrice: 13999,
      rating: 4.3,
      ratingCount: 812,
      img: "https://m.media-amazon.com/images/I/71bU11ixVaL._AC_UF894,1000_QL80_.jpg"
    },
    {
      id: 9,
      name: "Coffee Table",
      price: 6999,
      oldPrice: 9999,
      rating: 4.2,
      ratingCount: 675,
      img: "https://ikiru.in/cdn/shop/products/buy-center-table-wood-and-black-metal-center-table-or-coffee-table-for-living-room-by-the-home-dekor-on-ikiru-online-store-1.jpg?v=1739198570"
    },
    {
      id: 10,
      name: "Wall Decor Set",
      price: 3999,
      oldPrice: 5999,
      rating: 4.5,
      ratingCount: 1102,
      img: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353"
    },
    {
      id: 11,
      name: "Floor Lamp",
      price: 2999,
      oldPrice: 4499,
      rating: 4.4,
      ratingCount: 734,
      img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4"
    },
    {
      id: 12,
      name: "Recliner Chair",
      price: 18999,
      oldPrice: 25999,
      rating: 4.7,
      ratingCount: 1432,
      img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
    }
  ];

  return (
    <div className="home">

      <div className="banner">
        <img 
          src="https://www.shutterstock.com/image-photo/interior-living-room-sofa-armchair-260nw-2483938673.jpg" 
          alt="Home Banner"
        />
        <div className="banner-text">
          <h1>HOME SALE IS LIVE</h1>
          <p>Up to 50% OFF on Premium Furniture</p>
        </div>
      </div>

      <h2 className="home-title">TRENDING HOME COLLECTION</h2>

      <div className="products-grid">
        {products.map((product) => {
          const discount = Math.round(
            ((product.oldPrice - product.price) / product.oldPrice) * 100
          );

          return (
               <div
  key={product.id}
  className="product-card"
  onClick={() =>
    navigate(`/products/${product.id}`, { state: { product } })
  }
  style={{ cursor: "pointer" }}
>

              <div className="image-container">
                <img src={`${product.img}?auto=format&fit=crop&w=400&q=80`} 
                alt={product.name} />

                <div className="rating-badge">
                  {product.rating} ★ | {product.ratingCount}
                </div>
              </div>

              <div className="product-info">
                <h4>{product.name}</h4>

                <div className="price-section">
                  <span className="price">₹{product.price.toLocaleString()}</span>
                  <span className="old-price">
                    ₹{product.oldPrice.toLocaleString()}
                  </span>
                  <span className="discount">
                    ({discount}% OFF)
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

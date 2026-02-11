import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <div className="card-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="card-info">
          <p className="brand">{product.brand}</p>
          <h3 className="title">{product.title}</h3>
          <div className="price-details">
            <span className="price">₹{product.price}</span>
            <span className="mrp">₹{product.mrp}</span>
            <span className="discount">{product.discount}% off</span>
          </div>
          <div className="rating">⭐ {product.rating}</div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;




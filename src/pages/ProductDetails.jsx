import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <h2 className="not-found">Product Not Found</h2>;
  }

  const price = Number(product.price) || 0;
  const oldPrice = Number(product.oldPrice) || 0;

  let discount = 0;
  if (oldPrice > price && oldPrice > 0) {
    discount = Math.round(((oldPrice - price) / oldPrice) * 100);
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select size");
      return;
    }

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const updatedProduct = {
      ...product,
      selectedSize,
      quantity,
    };

    existingCart.push(updatedProduct);
    localStorage.setItem("cart", JSON.stringify(existingCart));

    navigate("/cart");
  };

  return (
    <div className="product-container">

      <div className="image-section">
        <img
          src={`${product.img}?auto=format&fit=crop&w=700&q=80`}
          alt={product.name}
          className="main-image"
        />
      </div>


      <div className="details-section">
        <h2 className="brand">{product.brand}</h2>
        <p className="product-name">{product.name}</p>

        <div className="price-section">
          <span className="price">₹{price}</span>

          {oldPrice > 0 && (
            <>
              <span className="old-price">₹{oldPrice}</span>
              {discount > 0 && (
                <span className="discount">{discount}% OFF</span>
              )}
            </>
          )}
        </div>

        <div className="rating-box">
          ⭐ {product.rating} | {product.ratingCount} Ratings
        </div>


        <div className="size-section">
          <h4>Select Size</h4>
          <div className="sizes">
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className={`size-btn ${selectedSize === size ? "active" : ""}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

    
        <div className="quantity-section">
          <h4>Quantity</h4>
          <div className="quantity-controls">
            <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
        </div>

        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;






































































// / import { useParams, useLocation, useNavigate } from "react-router-dom";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();

//   const product = location.state?.product;

//   const handleAddToCart = () => {
//     const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

//     existingCart.push(product);

//     localStorage.setItem("cart", JSON.stringify(existingCart));

//     navigate("/cart"); 
//   };

//   if (!product) {
//     return <p>No product data found</p>;
//   }

//   return (
//     <div style={{ padding: "100px 20px" }}>
//       <h2>{product.title}</h2>
//       <img src={product.image} width="200" />
//       <p>₹ {product.price}</p>

//       <button onClick={handleAddToCart}>
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default ProductDetails;







































// import { useParams } from "react-router-dom";

// const ProductDetails = () => {
//   const { id } = useParams();

//   return (
//     <div style={{ padding: "100px 20px" }}>
//       <h2>Product Details Page</h2>
//       <p>Product ID: {id}</p>
//     </div>
//   );
// };

// export default ProductDetails;




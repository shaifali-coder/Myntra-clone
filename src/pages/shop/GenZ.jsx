
import React from "react";
import "./GenZ.css";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    title: "Oversized Printed T-Shirt",
    brand: "Urban Street",
    price: "₹799",
    rating: "4.3",
    views: "12.5k"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    title: "Baggy Fit Jeans",
    brand: "Denim Culture",
    price: "₹1,299",
    rating: "4.5",
    views: "9.8k"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    title: "Chunky Sneakers",
    brand: "Street Kicks",
    price: "₹2,199",
    rating: "4.6",
    views: "15.2k"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1514996937319-344454492b37",
    title: "Crop Hoodie",
    brand: "GenZ Wear",
    price: "₹999",
    rating: "4.2",
    views: "8.3k"
  },
  {
    id: 5,
    image: "https://pronk.in/cdn/shop/files/BO4557-PRONK-24STYLE03554.jpg?v=1726737973",
    title: "Cargo Pants",
    brand: "Urban Mode",
    price: "₹1,499",
    rating: "4.4",
    views: "11.4k"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1516826957135-700dedea698c",
    title: "Graphic Sweatshirt",
    brand: "Trendify",
    price: "₹1,199",
    rating: "4.1",
    views: "6.9k"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1521334884684-d80222895322",
    title: "Street Style Jacket",
    brand: "Hype Co.",
    price: "₹2,499",
    rating: "4.7",
    views: "13.6k"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1",
    title: "Casual Shirt",
    brand: "Young Mode",
    price: "₹899",
    rating: "4.0",
    views: "7.5k"
  },
  {
    id: 9,
    image: "https://www.iconicindia.com/cdn/shop/products/2302-ICM-PAN6731_1_f450144e-0650-4b38-98c8-6e56e861fe45.jpg?v=1757094115",
    title: "Slim Fit Trousers",
    brand: "Urban Edge",
    price: "₹1,099",
    rating: "4.3",
    views: "10.1k"
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f",
    title: "Trendy Backpack",
    brand: "Street Bags",
    price: "₹1,299",
    rating: "4.6",
    views: "14.8k"
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
    title: "Casual Co-Ord Set",
    brand: "GenZ Style",
    price: "₹1,799",
    rating: "4.4",
    views: "9.4k"
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    title: "Stylish Sunglasses",
    brand: "Urban Shades",
    price: "₹599",
    rating: "4.2",
    views: "5.7k"
  }
];

function GenZ() {
  const navigate = useNavigate();
  return (
    <div className="genz-container">

      <div className="genz-banner">
        <img
          src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1600&q=80"
          alt="GenZ Fashion Banner"
          className="banner-img"
        />
        <div className="banner-overlay">
          <h1>GEN Z STREET COLLECTION</h1>
          <p>Fresh Trends</p>
        </div>
      </div>

      <div className="products-grid">
        {products.map((product) => (
             <div
  key={product.id}

    className="product-card"
  onClick={() =>
    navigate(`/products/${product.id}`, { state: { product } })
  }
  style={{ cursor: "pointer" }}
>

  <div className="image-container">
    <img
      src={`${product.image}?auto=format&fit=crop&w=400&q=80`}
      alt={product.title}
    />
    <div className="rating-badge">
      ⭐ {product.rating} | {product.views}
    </div>
  </div>

  <div className="product-info">
    <h3>{product.brand}</h3>
    <p>{product.title}</p>
    <div className="price">{product.price}</div>
  </div>
</div>

        ))}
      </div>
    </div>
  );
}

export default GenZ;








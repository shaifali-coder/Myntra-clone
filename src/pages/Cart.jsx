import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.location.reload();
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  return (
    <div style={{ padding: "100px 20px" }}>
      <h2>Shopping Cart</h2>
      <hr />

      {cartItems.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <button onClick={() => navigate("/shop/women")}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px"
              }}
            >
              <img
  src={item.image || item.img}
  alt={item.name}
  width="100"
/>

              <h4>{item.brand}</h4>
              <p>{item.name}</p>
              <p>Price: ₹{item.price}</p>

              <button onClick={() => handleRemove(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <hr />
          <h3>Total: ₹{totalAmount}</h3>

          <button>Place Order</button>
        </div>
      )}
    </div>
  );
};

export default Cart;























































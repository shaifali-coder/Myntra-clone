import { useLocation, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product;

  if (!product) {
    return <h2 style={{ padding: "100px" }}>Product Not Found</h2>;
  }

  const price = Number(product.price) || 0;
  const oldPrice = Number(product.oldPrice) || 0;

  let discount = 0;
  if (oldPrice > price && oldPrice > 0) {
    discount = Math.round(((oldPrice - price) / oldPrice) * 100);
  }

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(product);
    localStorage.setItem("cart", JSON.stringify(existingCart));
    navigate("/cart");
  };

  return (
    <div style={{
      padding: "120px 40px",
      display: "flex",
      gap: "60px"
    }}>

  
      <div>
        <img
          src={`${product.img}?auto=format&fit=crop&w=700&q=80`}
          alt={product.name}
          style={{ width: "400px", borderRadius: "10px" }}
        />
      </div>

      <div style={{ maxWidth: "500px" }}>
        <h2>{product.brand}</h2>
        <p style={{ fontSize: "20px", color: "gray" }}>
          {product.name}
        </p>

        <div style={{ margin: "15px 0" }}>
          <span style={{
            fontSize: "26px",
            fontWeight: "bold"
          }}>
            ₹{price}
          </span>

          {oldPrice > 0 && (
            <>
              <span style={{
                marginLeft: "10px",
                textDecoration: "line-through",
                color: "gray"
              }}>
                ₹{oldPrice}
              </span>

              {discount > 0 && (
                <span style={{
                  marginLeft: "10px",
                  color: "green",
                  fontWeight: "bold"
                }}>
                  {discount}% OFF
                </span>
              )}
            </>
          )}
        </div>

        <div style={{
          marginBottom: "20px",
          background: "#f3f3f3",
          display: "inline-block",
          padding: "5px 10px",
          borderRadius: "5px"
        }}>
          ⭐ {product.rating} | {product.ratingCount} Ratings
        </div>

        <button
          onClick={handleAddToCart}
          style={{
            display: "block",
            marginTop: "20px",
            padding: "15px 40px",
            backgroundColor: "#ff3f6c",
            color: "white",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "5px"
          }}
        >
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




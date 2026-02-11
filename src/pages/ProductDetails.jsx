import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "100px 20px" }}>
      <h2>Product Details Page</h2>
      <p>Product ID: {id}</p>
    </div>
  );
};

export default ProductDetails;

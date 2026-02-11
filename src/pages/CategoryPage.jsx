import { useParams } from "react-router-dom";

function CategoryPage() {
  const { category } = useParams();

  return (
    <div>
      <h2>{category.toUpperCase()} COLLECTION</h2>

      
    </div>
  );
}

export default CategoryPage;

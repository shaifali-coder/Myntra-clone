import React from "react";
import "./Kids.css";
import { useNavigate } from "react-router-dom";

export const kidsProducts = [

  {
    id: 1,
    brand: "H&M",
    name: "Girls Floral Party Dress",
    price: 1299,
    originalPrice: 1999,
    discount: "35% OFF",
    rating: 4.3,
    reviews: 128,
    views: 540,
    image: "https://cc-west-usa.oss-us-west-1.aliyuncs.com/17136576/2404210606350322700.jpg"
  },
  {
    id: 2,
    brand: "Zara Kids",
    name: "Printed Cotton Frock",
    price: 1499,
    originalPrice: 2499,
    discount: "40% OFF",
    rating: 4.1,
    reviews: 98,
    views: 430,
    image: "https://www.littlecheer.com/cdn/shop/files/LC24CW_GL231_1_1200x.jpg?v=1717943666"
  },
  {
    id: 3,
    brand: "Max",
    name: "Sleeveless Summer Dress",
    price: 999,
    originalPrice: 1599,
    discount: "30% OFF",
    rating: 3.9,
    reviews: 76,
    views: 320,
    image: "https://thelittletrunk.com/cdn/shop/collections/carte-cadeau-desk_1024x_1418dea0-ad77-40ad-9266-1e8b9498cbc7.webp"
  },
  {
    id: 4,
    brand: "Lifestyle",
    name: "Kids A-Line Dress",
    price: 1199,
    originalPrice: 1899,
    discount: "37% OFF",
    rating: 4.5,
    reviews: 210,
    views: 690,
    image: "https://brownliving.in/cdn/shop/files/geometric-ikkat-a-line-dress-for-girls-handcrafted-cotton-wear-lb10-02-01-little-buttercups-m-grey-2806426.jpg?v=1764678253"
  },
  {
    id: 5,
    brand: "H&M",
    name: "Pink Party Frock",
    price: 899,
    originalPrice: 1399,
    discount: "35% OFF",
    rating: 4.0,
    reviews: 85,
    views: 410,
    image: "https://image.made-in-china.com/202f0j00JyRildqIypbN/Sweet-Girls-Kids-Party-Wear-Children-Evening-Multilayer-Dress.webp"
  },
  {
    id: 6,
    brand: "Zara Kids",
    name: "Denim Boys Dress",
    price: 1099,
    originalPrice: 1799,
    discount: "38% OFF",
    rating: 4.2,
    reviews: 120,
    views: 500,
    image: "https://cutethee.com/cdn/shop/files/ea5d932499e2101c25985228313a9dc9.jpg"
  },
  {
    id: 7,
    brand: "Max",
    name: "Flared Casual Dress",
    price: 1599,
    originalPrice: 2599,
    discount: "39% OFF",
    rating: 4.4,
    reviews: 150,
    views: 610,
    image: "https://i.pinimg.com/236x/1b/c9/d5/1bc9d5343db92ef9c890d72fc95a0928.jpg"
  },
  {
    id: 8,
    brand: "Pantaloons",
    name: "Printed Boys Dress",
    price: 999,
    originalPrice: 1499,
    discount: "33% OFF",
    rating: 3.8,
    reviews: 67,
    views: 290,
    image: "https://i5.walmartimages.com/asr/1fa90581-f546-4992-998d-2808b9886c4c.6b9c7c15c0125df75d9d2b12e9cc2fab.jpeg"
  },
  {
    id: 9,
    brand: "H&M",
    name: "Cotton Dress",
    price: 1199,
    originalPrice: 1899,
    discount: "36% OFF",
    rating: 4.6,
    reviews: 240,
    views: 720,
    image: "https://thetribekids.com/cdn/shop/files/estelle-sleeveless-embroided-cambric-girls-dress-green-flower-697556.jpg?v=1718862563"
  },
  {
    id: 10,
    brand: "Zara Kids",
    name: "Embroidered Frock",
    price: 899,
    originalPrice: 1399,
    discount: "35% OFF",
    rating: 4.1,
    reviews: 95,
    views: 380,
    image: "https://img.drz.lazcdn.com/static/pk/p/aab4881cfd5b5a5fce322591ecb6fab9.jpg_960x960q80.jpg_.webp"
  },
  {
    id: 11,
    brand: "Max",
    name: "Layered Party Dress",
    price: 1699,
    originalPrice: 2699,
    discount: "37% OFF",
    rating: 4.7,
    reviews: 310,
    views: 850,
    image: "https://babiesfrock.in/cdn/shop/products/image_e93e1712-f2df-45db-8bf7-6d832f724bfd.jpg?v=1676480158&width=1445"
  },
  {
    id: 12,
    brand: "Lifestyle",
    name: "Girls Casual Frock",
    price: 799,
    originalPrice: 1199,
    discount: "33% OFF",
    rating: 4.0,
    reviews: 72,
    views: 260,
    image: "https://image.cdn.shpy.in/55036/1655320205223_SKU-16283_2.jpg?width=600&format=webp"
  }
];

const Kids = () => {
  const navigate = useNavigate();
  return (
    <div className="kids-container">
      <div className="kids-banner">
        <img
          src="https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1400&q=80"
          alt="Kids Fashion Banner"
        />
        <div className="banner-content">
          <h1>KIDS COLLECTION</h1>
          <p>Fun, Fashionable, and Full of Joy!</p>
         </div>
       </div>
      <div className="kids-grid">
        {kidsProducts.map((product) => (
            <div
  key={product.id}
  className="kids-card"
  onClick={() =>
    navigate(`/products/${product.id}`, { state: { product } })
  }
  style={{ cursor: "pointer" }}
>

            <div className="img-wrapper">
              <img src={`${product.image}?auto=format&fit=crop&w=400&q=80`}
               alt={product.name} />

              <div className="rating-badge">
                ⭐ {product.rating} | {product.reviews}
              </div>
            
            </div>

            <div className="kids-info">
              <h4>{product.brand}</h4>
              <p className="name">{product.name}</p>
              <div className="price-section">
                <span className="price">₹{product.price}</span>
                <span className="original">₹{product.originalPrice}</span>
                <span className="discount">{product.discount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kids;




















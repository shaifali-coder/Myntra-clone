
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import ShowList from "../../components/ShowList";
import "./Beauty.css";
import Navbar from "../../components/Navbar";



const Beauty = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Beauty Page</h1>
      <ShowList />
    </div>
  );
};

export default Beauty;

// const sampleProducts = [
//   { id: 1, name: "Face Wash", brand: "Brand A", price: 199, rating: 4.2, views: "12k", img: "https://images-static.nykaa.com/media/catalog/product/e/8/e8f0db38901012184028_01.jpg?tr=w-500" },
//   { id: 2, name: "Moisturizer", brand: "Brand B", price: 399, rating: 4.5, views: "18k", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQTvoGQrrDYWx0mkLwK9lqLqNyFXABtgCg_g&s" },
//   { id: 3, name: "Sunscreen", brand: "Brand C", price: 249, rating: 3.9, views: "9k", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpKX0vla5_J33tsXIFZbvKLE-Iz4HEkq25MQ&s" },
//   { id: 4, name: "Shampoo", brand: "Brand D", price: 299, rating: 4.1, views: "7k", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReOfcVjIopEN5VCKL4mSdlZW8s7h8W9-C8DA&s" },
//   { id: 5, name: "Face Wash", brand: "Brand E", price: 165, rating: 3.6, views: "5k", img: "https://www.audora.in/cdn/shop/files/02_22101c69-2a7f-459a-988b-77ba856c686c.jpg?v=1709292565" },
//   { id: 6, name: "Pill of mask", brand: "Brand F", price: 350, rating: 4.6, views: "20k", img: "https://m.media-amazon.com/images/I/61eepy5CY+L._AC_UF1000,1000_QL80_.jpg" },
//   { id: 7, name: "Lipstick", brand: "Brand G", price: 495, rating: 4.4, views: "25k", img: "https://media6.ppl-media.com//tr:h-750,w-750,c-at_max,dpr-2,q-40/static/img/product/380980/ny-bae-velvet-mousse-lipstick-spicy-rust-06_1_display_1760003083_14c83e62.jpg" },
//   { id: 8, name: "Body lotion", brand: "Brand H", price: 299, rating: 4.0, views: "11k", img: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/SEPTEMBER/8/taWWnoeY_ae659fc2e49e46eaa3a179512ca3281f.jpg" },
//   { id: 9, name: "Blush & Highlight Palette", brand: "Brand I", price: 110, rating: 3.8, views: "6k", img: "https://swissbeauty.in/cdn/shop/products/2_06ddaee4-cfe0-4601-8c79-958984db380f.png?v=1748634598&width=620" },
//   { id: 10, name: "Eyeliner", brand: "Brand J", price: 399, rating: 4.7, views: "30k", img: "https://artdeco.com/cdn/shop/collections/Kategoriebanner-Eyeliner-Kajal.jpg?v=1695401377&width=1024" },
//   { id: 11, name: "Foundation", brand: "Brand K", price: 445, rating: 4.1, views: "14k", img: "https://www.coloressence.com/cdn/shop/files/HDF-5.jpg?v=1747659886" },
//   { id: 12, name: "Primer", brand: "Brand L", price: 120, rating: 3.7, views: "8k", img: "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:540/891942/imo9dyQ8qO-891942_1.jpg" },
//   { id: 13, name: "Nail Polish", brand: "Brand M", price: 399, rating: 4.3, views: "16k", img: "https://m.media-amazon.com/images/I/718Ksdx1xCL._AC_UF1000,1000_QL80_.jpg" },
//   { id: 14, name: "Compact", brand: "Brand N", price: 249, rating: 4.0, views: "10k", img: "https://hilaryrhoda.in/cdn/shop/files/3_a71386eb-90f5-478a-a04b-f34e99095132.jpg?v=1755456712&width=1200" },
//   { id: 15, name: "Shower gel", brand: "Brand O", price: 299, rating: 3.9, views: "9k", img: "https://bellavitaluxury.co.in/cdn/shop/files/2_12.jpg?v=1709993456&width=1000" }
// ];

// const sampleCategories = [
//   { name: "Baby Body Oil", count: 43 },
//   { name: "Massage Oils", count: 6 },
//   { name: "Hair Oil", count: 1146 },
//   { name: "Baby Lotions and Creams", count: 973 },
//   { name: "Baby Body Wash and Soap", count: 648 },
//   { name: "Mask and Peel", count: 515 },
//   { name: "Hair Oil", count: 431 },
//   { name: "Nail Art and Nail Care", count: 364 },

// ];

// const sampleBrands = [
//   { name: "THE RUPAWAT Perfumery House", count: 6769 },
//   { name: "VENVO", count: 2153 },
//   { name: "RAVIOUR LIFESTYLE", count: 803 },
//   { name: "Menjewell", count: 442 },
//   { name: "Park Daniel", count: 347 },
//   { name: "CHIWA", count: 263 },
//   { name: "Urbanorganics", count: 230 },
//   { name: "Coco Crush", count: 230 },

// ];

// const sampleColors = [
//   { name: "White", count: 26388, hex: "#ffffff" },
//   { name: "Black", count: 21709, hex: "#000000" },
//   { name: "Transparent", count: 20286, hex: "transparent" },
//   { name: "Brown", count: 16602, hex: "#8B4513" },
//   { name: "Pink", count: 16385, hex: "#FFC0CB" },
//   { name: "Red", count: 11188, hex: "#ff3b30" },
//   { name: "Multi", count: 11165, hex: "linear-gradient(45deg, #f00, #0f0)" },
// ];
// function Collapsible({ title, children }) {
//   const [open, setOpen] = useState(true);
//   return (
//     <div className="filter-section">
//       <button className="filter-title" onClick={() => setOpen(!open)}>
//         {title}
//       </button>
//       {open && <div className="filter-body">{children}</div>}
//     </div>
//   );
// }

// function GenderFilter({ selectedGender, setSelectedGender }) {
//   const navigate = useNavigate();
//   const genders = ["Men", "Women", "Boys", "Girls"];

//   return (
//     <div className="gender-row inline-genders">
//       {genders.map(g => (
//         <label
//           key={g}
//           className={`gender-list-item ${selectedGender === g ? "active" : ""}`}
//         >
//           <input
//             type="radio"
//             name="gender"
//             checked={selectedGender === g}
//             onChange={() => {
//               setSelectedGender(g);
//               navigate(`/shop/${g.toLowerCase()}`);
//             }}
//           />
//           <span className="item-name">{g}</span>
//         </label>
//       ))}
//     </div>
//   );
// }
// function Beauty() {
//   const [selectedBrands, setSelectedBrands] = useState(new Set());
//   const [selectedCategories, setSelectedCategories] = useState(new Set());
//   const [selectedColors, setSelectedColors] = useState(new Set());
//   const [priceRange, setPriceRange] = useState([0, 100000]);
//   const [brandQuery, setBrandQuery] = useState("");
//   const [selectedDiscount, setSelectedDiscount] = useState("");
//   const [selectedGender, setSelectedGender] = useState("");

//   const brands = sampleBrands;
//   const colors = sampleColors;
//   const categories = sampleCategories;

//   const filteredBrands = useMemo(() => {
//     if (!brandQuery) return brands;
//     return brands.filter(b =>
//       b.name.toLowerCase().includes(brandQuery.toLowerCase())
//     );
//   }, [brands, brandQuery]);

//   function toggleSet(setState, value) {
//     setState(prev => {
//       const next = new Set(prev);
//       next.has(value) ? next.delete(value) : next.add(value);
//       return next;
//     });
//   }

//   const filteredProducts = useMemo(() => {
//     return sampleProducts.filter(p => {
//       if (selectedBrands.size && !selectedBrands.has(p.brand)) return false;
//       if (selectedColors.size && !selectedColors.has(p.color)) return false;
//       if (selectedCategories.size && !selectedCategories.has(p.category))
//         return false;

//       if (p.price < priceRange[0] || p.price > priceRange[1]) return false;

//       if (selectedDiscount) {
//         const discountValue = Number(selectedDiscount.replace("% and above", ""));
//         if (p.discount < discountValue) return false;
//       }

//       return true;
//     });
//   }, [
//     selectedBrands,
//     selectedColors,
//     selectedCategories,
//     priceRange,
//     selectedDiscount
//   ]);

//   function clearAll() {
//     setSelectedBrands(new Set());
//     setSelectedColors(new Set());
//     setSelectedCategories(new Set());
//     setSelectedDiscount("");
//     setPriceRange([0, 100000]);
//     setBrandQuery("");
//   }

//   return (
//     <div className="myntra-page">

//       <aside className="sidebar">
//         <div className="sidebar-top">
//           <div className="small-breadcrumb">Home / Personal Care</div>
//           <div className="category-title">
//             Personal Care <span className="item-count-top">- 127 items</span>
//           </div>
//         </div>

//         <div className="filters-header">
//           <div className="filters-title">FILTERS</div>
//           <button className="clear-all" onClick={clearAll}>
//             CLEAR ALL
//           </button>
//         </div>
//         <GenderFilter
//     selectedGender={selectedGender}
//     setSelectedGender={setSelectedGender}
//   />
      
// <Collapsible title="CATEGORIES">
//   <div className="category-list">
//     {sampleCategories.map(c => (
//       <label key={c.name} className="list-item">
//         <input
//           type="checkbox"
//           checked={selectedCategories.has(c.name)}
//           onChange={() => toggleSet(setSelectedCategories, c.name)}
//         />
//         <span className="item-name">{c.name}</span>
//         <span className="item-count">({c.count})</span>
//       </label>
//     ))}
//   </div>
// </Collapsible>


// <Collapsible title="BRANDS">
//   <input
//     type="text"
//     placeholder="Search Brand"
//     value={brandQuery}
//     onChange={e => setBrandQuery(e.target.value)}
//     className="brand-search"
//   />
//   <div className="brand-list">
//     {filteredBrands.map(b => (
//       <label key={b.name} className="list-item">
//         <input
//           type="checkbox"
//           checked={selectedBrands.has(b.name)}
//           onChange={() => toggleSet(setSelectedBrands, b.name)}
//         />
//         <span className="item-name">{b.name}</span>
//         <span className="item-count">({b.count})</span>
//       </label>
//     ))}
//   </div>
// </Collapsible>


       
//         <Collapsible title="PRICE">
//           <div className="price-range-wrapper">
//             <input
//               type="range"
//               min="0"
//               max="100000"
//               step="500"
//               value={priceRange[1]}
//               onChange={e =>
//                 setPriceRange([0, Number(e.target.value)])
//               }
//             />
//             <div className="price-label">
//               ₹0 - ₹{priceRange[1]}+
//             </div>
//           </div>
//         </Collapsible>

    
//         <Collapsible title="COLOR">
//           <div className="color-list">
//             {colors.map(c => (
//               <label key={c.name} className="color-row">
//                 <input
//                   type="checkbox"
//                   checked={selectedColors.has(c.name)}
//                   onChange={() =>
//                     toggleSet(setSelectedColors, c.name)
//                   }
//                 />
//                 <span
//                   className="swatch"
//                   style={{ background: c.hex }}
//                 />
//                 <span className="item-name">{c.name}</span>
//                 <span className="item-count">({c.count})</span>
//               </label>
//             ))}
//           </div>
//         </Collapsible>

//         <Collapsible title="DISCOUNT RANGE">
//           {[
//             "10% and above",
//             "20% and above",
//             "30% and above",
//             "40% and above",
//             "50% and above",
//             "60% and above",
//             "70% and above",
//             "80% and above"
//           ].map(d => (
//             <label key={d} className="list-item">
//               <input
//                 type="radio"
//                 name="discount"
//                 checked={selectedDiscount === d}
//                 onChange={() => setSelectedDiscount(d)}
//               />
//               <span className="item-name">{d}</span>
//             </label>
//           ))}
//         </Collapsible>
//       </aside>

//       <main>
//         <div className="products-grid">
//           {filteredProducts.map(p => (
//             <div key={p.id} className="product-card">
//            <div className="card-image">
//   <img src={p.img} alt={p.name} />

//   {p.rating >= 3.5 && (
//     <div className="rating-views">
//       <div className="rating-badge">
//         <span className="star text-black">
//   {p.rating} ★
// </span>
//         <span className="divide-line">|</span>
//         <span className="views">{p.views}</span>
//       </div>
//     </div>
//   )}
// </div>


//               <div className="product-info">
//                 <div className="p-brand">{p.brand}</div>
//                 <div className="p-name">{p.name}</div>
//                 <div className="p-price">
//                   Rs. {p.price}{" "}
//                   {/* <span className="discount">({p.discount}% OFF)</span> */}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Beauty;






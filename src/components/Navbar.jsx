
import { Link, NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FiUser, FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import myntraLogo from "../assets/myntra-logo.png";
import "./Navbar.css";


const Navbar = () => {
  const navigate = useNavigate();

 
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

 
  useEffect(() => {
    if (!search.trim()) {
      setResults([]);
      return;
    }

    const timer = setTimeout(() => {
      fetchSearchResults(search);
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

const fetchSearchResults = async (query) => {
  console.log("API called for:", query);

  const res = await fetch(
    `https://fakestoreapi.com/products?q=${query}`
  );
  const data = await res.json();

  setResults(data); 
};


   return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">
          <img src={myntraLogo} alt="Myntra" className="logo-img" />
        </Link>

        <ul className="nav-links">
          <li onClick={() => navigate("/shop/men")}>MEN</li>
          <li onClick={() => navigate("/shop/women")}>WOMEN</li>
          <li onClick={() => navigate("/shop/kids")}>KIDS</li>
          <li onClick={() => navigate("/shop/home")}>HOME</li>
          <li onClick={() => navigate("/shop/beauty")}>BEAUTY</li>
          <li onClick={() => navigate("/shop/genz")}>GENZ</li>
          <li onClick={() => navigate("/shop/studio")}>STUDIO</li>
        </ul>
      </div>

   
      <div className="nav-search">
        <FiSearch className="search-icon" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for products, brands and more"
        />

       
        {results.length > 0 && (
          <div className="search-dropdown">
            {results.map((item) => (
              <div key={item.id} className="search-item">
                {item.name}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="nav-right">
        <div className="nav-icon" onClick={() => navigate("/signup")}>
          <FiUser size={22} />
          <span>Profile</span>
        </div>

        <div className="nav-icon" onClick={() => navigate("/wishlist")}>
          <AiOutlineHeart size={22} />
          <span>Wishlist</span>
        </div>

        
        <div className="nav-icon" onClick={() => navigate("/cart")}>
           <HiOutlineShoppingBag size={22} />
          <span>Bag</span>
        </div>




      </div>
    </nav>
  );
};

export default Navbar;

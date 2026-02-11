
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiUser, FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import myntraLogo from "../assets/myntra-logo.png";
import "./Navbar.css";







const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">

      <div className="nav-left">
        <Link to="/">
          <img src={myntraLogo} alt="Myntra" className="logo-img" />
        </Link>

        <ul className="nav-links">
         <li onClick={() => navigate("/shop/beauty")}>BEAUTY</li>
     {/* <li onClick={() => navigate("/shop/men")}>MEN</li> */}
        {/* <li onClick={() => navigate("/shop/women")}>WOMEN</li>
        <li onClick={() => navigate("/shop/kids")}>KIDS</li>
        <li onClick={() => navigate("/shop/home")}>HOME</li>
        /
        <li onClick={() => navigate("/shop/genz")}>GEN Z</li> */}
        </ul>
      </div>

      <div className="nav-search">
        <FiSearch className="search-icon" />
        <input placeholder="Search for products, brands and more" />
      </div>

      <div className="nav-right">

        <div
          className="nav-icon"
          onClick={() => navigate("/signup")}
        >
          <FiUser size={22} />
          <span>Profile</span>
        </div>

        <div className="nav-icon">
          <AiOutlineHeart size={22} />
          <span>Wishlist</span>
        </div>

        <Link to="/cart" className="nav-icon">
          <HiOutlineShoppingBag size={22} />
          <span>Bag</span>
        </Link>

      </div>
    

    </nav>
  );
};

export default Navbar;

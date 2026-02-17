import React from "react";
import Link from "next/link";
import "./Navbar.css"
import Image from "next/image";
import searchImg from "../public/assets/search.png"
import cartImg from "../public/assets/cart.png"
import profileImg from "../public/assets/profile.png"
import homeImg from "../public/assets/home.png"
import logoImg from "../public/assets/logo.png"

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link href={"/"}><Image src={logoImg} height={180} width={200} alt="logo"></Image></Link>
      </div>
  
      <div className="left-content">
        <div className="search-container">
          <input type="text" placeholder="Search" />
          <Image src={searchImg} height={15} width={15} alt="Search" className="search-icon"></Image>
        </div>
        <ul>
          <Link href={"/"} className="home-button">
            <li><Image src={homeImg} height={20} width={20} alt="home"></Image></li>
          </Link>
          <Link href={"/cart"} className="cart-button">
            <li><Image src={cartImg} height={20} width={20} alt="cart"></Image></li>
          </Link>
          <Link href={"/profile"} className="profile-button">
            <li><Image src={profileImg} height={20} width={20} alt="profile"></Image></li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

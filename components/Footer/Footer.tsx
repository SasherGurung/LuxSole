import "./Footer.css"
import Link from "next/link"
import Image from "next/image"
import logoImg from "../../public/assets/logo.png"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <Link href={"/"}><Image src={logoImg} height={190} width={190} alt="logo"></Image></Link>
        <p>@ 2026 LuxSole</p>
        <p>All rights reserved</p>
      </div>
      <div className="footer-column">
        <h1>Links</h1>
        <p>Home Page</p>
        <p>Contact</p>
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
      </div>
      <div className="footer-column">
        <h1>Products</h1>
        <p>All Products</p>
        <p>New Arraivals</p>
        <p>Best Sellers</p>
        <p>Sale</p>
      </div>
      <div className="footer-column">
        <h1>Company</h1>
        <p>About</p>
        <p>Contact</p>
        <p>Blog</p>
        <p>Afflicate Program</p>
      </div>
    </footer>
  )
}

export default Footer
import Link from "next/link";
import Image from "next/image";
import logoImg from "../../public/assets/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <Link href="/">
            <Image src={logoImg} height={150} width={150} alt="logo" />
          </Link>
          <p>© 2026 LuxSole</p>
          <p>All rights reserved</p>
        </div>
        <div className="footer-column">
          <h1>Links</h1>
          <Link href="/">Home Page</Link>
          <Link href="/contact">Contact</Link>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
        <div className="footer-column">
          <h1>Products</h1>
          <Link href="/products">All Products</Link>
          <p>New Arrivals</p>
          <p>Best Sellers</p>
          <p>Sale</p>
        </div>
        <div className="footer-column">
          <h1>Company</h1>
          <p>About</p>
          <p>Contact</p>
          <p>Blog</p>
          <p>Affiliate Program</p>
        </div>
      </div>
      <div className="footer-bottom">Designed & Developed by LuxSole</div>
    </footer>
  );
}

export default Footer;

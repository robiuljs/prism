import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-content-inner">
          <div className="description-block">
            <div className="footer-logo">
              <img src="/assets/image/logo.svg" alt="" />
            </div>
            <p>
              Mi auctor sagittis habitasse elit. In orci lorem sodales sem enim
              fusce.
            </p>
          </div>
          <div className="footer-list">
            <h3 className="footer-title">Company</h3>
            <ul className="list">
              <li><Link href="/">About Us</Link></li>
              <li><Link href="/">Our Team</Link></li>
              <li><Link href="/">Careers</Link></li>
              <li><Link href="/">Blog</Link></li>
            </ul>
          </div>
          <div className="footer-list">
            <h3 className="footer-title">Resources</h3>
            <ul className="list">
              <li><Link href="/">Knowledge Base</Link></li>
              <li><Link href="/">FAQs</Link></li>
              <li><Link href="/">Support Center</Link></li>
              <li><Link href="/">Terms of Service</Link></li>
              <li><Link href="/">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="footer-list">
            <h3 className="footer-title">Get Started</h3>
            <ul className="list">
              <li><Link href="/">Get Started</Link></li>
              <li><Link href="/">Sign Up</Link></li>
              <li><Link href="/">Free Trial</Link></li>
              <li><Link href="/">Pricing</Link></li>
              <li><Link href="/">Request Demo</Link></li>
            </ul>
          </div>
          <div className="footer-list">
            <h3 className="footer-title">Connect</h3>
            <ul className="list">
              <li><Link href="/">Facebook</Link></li>
              <li><Link href="/">Twitter</Link></li>
              <li><Link href="/">LinkedIn</Link></li>
              <li><Link href="/">Instagram</Link></li>
            </ul>
          </div>
        </div>
        <div className="copyright-block">
          <p>Copyright ©Prism 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

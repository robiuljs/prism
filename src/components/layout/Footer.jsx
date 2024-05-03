import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-content">
        <div className="footer-content-inner flex flex-col lg:flex-row sm:gap-[100px] gap-10  justify-between">
          <div className="description-block max-w-[268px]">
            <div className="footer-logo">
              <img src="/assets/image/logo.svg" alt="" />
            </div>
            <p>
              Mi auctor sagittis habitasse elit. In orci lorem sodales sem enim
              fusce.
            </p>
          </div>
          <div className="flex sm:flex-row flex-col justify-between gap-10 w-full max-w-[816px]">
            <div className="footer-list w-full max-w-[132px]">
              <h3 className="footer-title text-xl leading-6 font-medium">Company</h3>
              <ul className="list">
                <li><Link href="/" className="text-sm leading-5 text-[#9AA19E]">About Us</Link></li>
                <li><Link href="/" className="text-sm leading-5 text-[#9AA19E]">Our Team</Link></li>
                <li><Link href="/" className="text-sm leading-5 text-[#9AA19E]">Careers</Link></li>
                <li><Link href="/" className="text-sm leading-5 text-[#9AA19E]">Blog</Link></li>
              </ul>
            </div>
            <div className="footer-list w-full max-w-[132px]">
              <h3 className="footer-title text-xl leading-6 font-medium">Resources</h3>
              <ul className="list">
                <li><Link href="/" className="text-sm leading-5 text-[#9AA19E]">Knowledge Base</Link></li>
                <li><Link href="/" className="text-sm leading-5 text-[#9AA19E]">FAQs</Link></li>
                <li><Link href="/" className="text-sm leading-5 text-[#9AA19E]">Support Center</Link></li>
                <li><Link href="/" className="text-sm leading-5 text-[#9AA19E]">Terms of Service</Link></li>
                <li><Link href="/" className="text-sm leading-5 text-[#9AA19E]">Privacy Policy</Link></li>
              </ul>
            </div>
            <div className="footer-list w-full max-w-[132px]">
              <h3 className="footer-title text-xl leading-6 font-medium">Get Started</h3>
              <ul className="list">
                <li><Link href="/" className="text-sm leading-5 text-[#9AA19E]">Get Started</Link></li>
                <li><Link href="/" className="text-sm leading-5 text-[#9AA19E]">Sign Up</Link></li>
                <li><Link href="/" className="text-sm leading-5 text-[#9AA19E]">Free Trial</Link></li>
                <li><Link href="/" className="text-sm leading-5 text-[#9AA19E]">Pricing</Link></li>
                <li><Link href="/" className="text-sm leading-5 text-[#9AA19E]">Request Demo</Link></li>
              </ul>
            </div>
            <div className="footer-list w-full max-w-[132px]">
              <h3 className="footer-title text-xl leading-6 font-medium">Connect</h3>
              <ul className="list">
                <li><Link href="/" className="text-sm leading-5 text-[#9AA19E]">Facebook</Link></li>
                <li><Link href="/" className="text-sm leading-5 text-[#9AA19E]">Twitter</Link></li>
                <li><Link href="/" className="text-sm leading-5 text-[#9AA19E]">LinkedIn</Link></li>
                <li><Link href="/" className="text-sm leading-5 text-[#9AA19E]">Instagram</Link></li>
              </ul>
            </div>
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

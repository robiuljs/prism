import { Inter, Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "../../styles/globals.scss";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
// import "https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

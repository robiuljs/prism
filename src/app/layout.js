import { Inter, Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "../styles/globals.scss";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
// import "https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css";
import Script from "next/script";
 
const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({
  subsets: ['latin'],
  variable: "--font-manrope"
})
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta"
})

export const metadata = {
  title: 'Prism',
  description: 'Your online crypto wallet',
  metadataBase: new URL("https://prism-omega.vercel.app/"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#090a0c]">
      <head>
      <link rel="stylesheet" type="text/css" href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"/>
      </head>
      <body className={`${inter.className} ${manrope.variable} relative overflow-x-hidden`}>
        <Header/>
        {children}
        <Footer />
        <Script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js" />
      </body>

    </html>
  );
}

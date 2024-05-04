import { Inter, Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "../styles/globals.scss";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#090a0c]">
      <body className={`${inter.className} ${manrope.variable} relative overflow-x-hidden`}>
        <Header/>
        
        {children}
        <Footer />
      </body>

    </html>
  );
}

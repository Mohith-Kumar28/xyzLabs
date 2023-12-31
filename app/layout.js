import Footer from "@/components/layout/Footer";
import "./globals.css";

import { Barlow_Condensed, Inter, Krona_One } from "next/font/google";
import NavBar from "@/components/layout/NavBar";

const krona = Krona_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-krona",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${krona.variable} `}>
        <div className="bg-pri-bg">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

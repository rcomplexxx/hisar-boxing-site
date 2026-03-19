import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./components/LayoutComponents/Footer/Footer";
import Navbar from "./components/LayoutComponents/Navbar/Navbar";

const inter = Inter({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Boxing Website Template",
  description: "An open-source template of a boxing website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="mainHtml" lang="en">

      <body className={inter.className}>
 <Navbar/>
       <main className="main">
          {children}
        </main>
  <Footer/>
      </body>
     
     
    
     
    </html>
  );
}

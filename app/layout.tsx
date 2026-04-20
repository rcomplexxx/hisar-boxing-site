import type { Metadata } from "next";
import "./globals.css";
// import { Inter } from "next/font/google";
import AppInitializer from '@/app/AppInitializer/AppInitializer'
import Footer from "./components/LayoutComponents/Footer/Footer";
import Navbar from "./components/LayoutComponents/Navbar/Navbar";

import {
  Inter,
  Montserrat,
  Poppins,
  DM_Sans,
  Space_Grotesk,
  Manrope,
  Urbanist,
  Plus_Jakarta_Sans
} from "next/font/google";


import { Roboto } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-dm",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
});

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-urbanist",
});

export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

import { Source_Sans_3 } from "next/font/google";

export const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source",
});

import { IBM_Plex_Sans } from "next/font/google";

export const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex",
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
    <html 
  lang="en"
  className={`mainHtml
    ${inter.variable}
    ${montserrat.variable}
    ${poppins.variable}
    ${dmSans.variable}
    ${spaceGrotesk.variable}
    ${manrope.variable}
    ${urbanist.variable}
    ${jakarta.variable}
    ${roboto.variable}
    ${sourceSans.variable}
    ${plex.variable}
  `}
>

      <body>
       <AppInitializer/>
 <Navbar/>
       <main className="main">
          {children}
        </main>
  <Footer/>
      </body>
     
     
    
     
    </html>
  );
}

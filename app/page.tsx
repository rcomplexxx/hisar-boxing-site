"use client";


import NumberItem from "./components/Pocetna/2NumberCopyWriting/NumberItem";
import Navbar from './components/LayoutComponents/Navbar/Navbar'
import Hero from './components/Pocetna/1Hero/Hero'
import FirstSection from './components/Pocetna/3FirstSection/FirstSection'
import Faq from './components/Pocetna/4Faq/Faq'
import Footer from './components/LayoutComponents/Footer/Footer'
import NumberCopyWriting from './components/Pocetna/2NumberCopyWriting/NumberCopyWriting'
import Image from "next/image";

export default function Pocetna() {
 

  return (<div>
      
        <Hero/>
      

    <NumberCopyWriting/>

      <FirstSection/>


   
        <Faq/>


   
   

      <Footer/>
</div>
      
  );
}

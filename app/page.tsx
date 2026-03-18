"use client";


import NumberItem from "./components/NumberItem";
import Navbar from './components/Navbar/Navbar'
import FirstSection from './components/Pocetna/FirstSection/FirstSection'
import Faq from './components/Pocetna/Faq/Faq'
import Footer from './components/Footer/Footer'
import Image from "next/image";

export default function Pocetna() {
 

  return (
    <div>
      <section id="hero" className="hero min-h-screen relative">
        <Navbar/>
      </section>

      {/* Numbers section */}
      <section className="bg-black text-white px-10 py-12 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        
          <div className="flex w-100 md:w-1/2 justify-around mb-6 md:mb-0">
          <NumberItem number="15" text="Godina postojimo" />
          <NumberItem number="9" text="Osvojenih zlatnih medalja" />
          
        </div>
        
        <div className="flex w-100 md:w-1/2 justify-around mb-6 md:mb-0 z-1">
        <NumberItem number="3" text="Profesionalnih instruktora" />
          <NumberItem number="6" text="Termina nedeljno" />
          
        </div>

      
      </section>

      <FirstSection/>


      <section>
        <Faq/>
      </section>


      <section id="cta" className="bg-black text-white pt-16 pb-12">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center text-center bg-gradient-to-b from-red-600 to-red-900 px-24 py-12 rounded-sm">
            <h1 className="mb-6 font-black text-2xl">Want to join us or talk to us?</h1>
            <p className="text-xl">Call us at +34 671 71 71 71</p>
          </div>
        </div>
      </section>

      <Footer/>

      
    </div>
  );
}

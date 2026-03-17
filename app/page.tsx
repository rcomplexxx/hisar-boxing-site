"use client";


import NumberItem from "./components/NumberItem";
import Navbar from './components/Navbar/Navbar'
import Faq from './components/Faq/Faq'
import Footer from './components/Footer/Footer'

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

      <section id="our-classes" className="bg-black text-white w-100 py-12">
        <div className="container mx-auto px-10">
          <div className="flex flex-col md:flex-row w-100">
            <div>
              <img src="/boxer2.png" className="h-full" />
            </div>
            
            <div className="flex flex-col w-100 md:w-3/4 lg:w-1/2 mt-10 text-center md:text-start space-y-10">
              <h1 className="text-2xl uppercase font-black">Boks trening koji donosi rezultate</h1>

              <p>Naši treninzi kombinuju proverene metode profesionalnog boksa sa modernim pristupom kondicionoj pripremi. Fokus je na pravilnoj tehnici, snazi i izdržljivosti. Rezultat su bolja forma, veće samopouzdanje i realan napredak iz treninga u trening.</p>

              <div className="flex flex-row justify-between">
                <div className="flex flex-row space-x-4">
                  <img src="/gloves.png" className="invert w-16" alt="" />
                  <div>
                    <p className="font-black">Boxing</p>
                    <p className="opacity-50">Instructor: José Luis</p>
                  </div>
                </div>

                <div className="flex flex-row space-x-4">
                  <img src="/mma.png" className="invert w-16" alt="" />
                  <div>
                    <p className="font-black">MMA</p>
                    <p className="opacity-50">Instructor: José Luis</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-row justify-between">
                <div className="flex flex-row space-x-4">
                  <img src="/kickboxing.png" className="invert w-16" alt="" />
                  <div>
                    <p className="font-black">Kickboxing</p>
                    <p className="opacity-50">Instructor: José Luis</p>
                  </div>
                </div>

                <div className="flex flex-row space-x-4">
                  <img src="/selfdefense.png" className="invert w-16" alt="" />
                  <div>
                    <p className="font-black">Self-defense</p>
                    <p className="opacity-50">Instructor: José Luis</p>
                  </div>
                </div>
              </div>


            </div>
            
          </div>
        </div>
      </section>


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

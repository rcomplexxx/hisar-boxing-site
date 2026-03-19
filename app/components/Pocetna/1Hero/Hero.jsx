import React from 'react'
import Navbar from '../../LayoutComponents/Navbar/Navbar'


export default function Hero() {
  return (
    <section id="hero" className="hero min-h-screen relative">

        <Navbar/>

           <div className="pb-10 flex text-center lg:text-left justify-center md:justify-end">
          <div className="flex flex-col items-start justify-start lg:w-2/5 space-y-16 lg:space-y-10 mx-10 mt-20 md:mt-40 object-scale-down">
            <h1 className="text-5xl uppercase font-black">
              GRUPNI I INDIVIDUALNI TRENINZI BOKSA U LESKOVCU
            </h1>

            <p>
              Naučite boks uz profesionalnog trenera sa iskustvom od 45 profesionalnih mečeva. Naučite pravilnu tehniku, taktiku i disciplinu koja stoji iza ovog sporta. Treninzi su prilagođeni vašim ciljevima – bilo da želite bolju formu, samoodbranu ili takmičarski nivo. Uđite u ring spremni i sigurni u svoje sposobnosti.
            </p>

            <button className="mx-auto lg:mx-0 bg-red-700 hover:bg-red-500 duration-200 uppercase font-semibold px-20 py-4">
              Kontaktirajte nas
            </button>
          </div>
        </div>
      
    </section>
  )
}

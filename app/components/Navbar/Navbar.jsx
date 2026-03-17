
import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";
import DesktopNavLinks from "./DesktopNavLinks";
import styles from './navbar.module.css'
import Link from "next/link";

export default function Navbar() {

 const [isOpen, setOpen] = useState(false);

  function handleClick() {
    setOpen(!isOpen);
    console.log("clicked");
    console.log(isOpen);
  }

  return (
    <>
    <div className={styles.topBar}>📍 Devet jugovica 24, Leskovac | 📞 +381 62 123456</div>
        <nav className={styles.navBar}>
          
          <div
           className={`${styles.mobileMenu} ${!isOpen ? styles.hidden : ''}`}
          >
         <a href="" onClick={handleClick}>Pocetna</a>
    <a href="#our-classes" onClick={handleClick}>Nas tim</a>
    <a href="#cta" onClick={handleClick}>Galerija</a>
    <a href="#cta" onClick={handleClick}>O nama</a>
    <a href="#cta" onClick={handleClick}>Kontaktirajte nas</a>
           
          </div>

          <div className={styles.logoDiv}>

            <Link id='logo' href="/" className={styles.logoLink}>
         
             
             
              <Image
               height={0}
               width={0}
               sizes="128px"
               src='/logo3.png'
               alt={`logo`}
               className={styles.logoImg}/>

            </Link>

          <h1 className="font-black uppercase text-red-600 hover:text-red-400 text-xl">
            Hisar Boxing Club
          </h1>

          </div>

         
          

          <button
            type="button"
            className={clsx("w-[24px] h-[20px] relative group", {
              open: isOpen,
              "md:hidden": !isOpen,
            })}
            onClick={handleClick}
          >
            <span className="hamburger-top bg-white group-hover:bg-red-500"></span>
            <span className="hamburger-middle bg-white group-hover:bg-red-500"></span>
            <span className="hamburger-bottom bg-white group-hover:bg-red-500"></span>
          </button>

          <DesktopNavLinks isOpen={isOpen}/>
        </nav>

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

      

        </>
  )
}







import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";
import DesktopNavLinks from "./DesktopNavLinks";
import {MenuIcon,CancelIcon } from "@/public/Images/svgs/svgImages";
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
    <nav className={styles.navWrapper}>
    <div className={styles.topBar}>📍 Devet jugovica 24, Leskovac | 📞 +381 62 123456</div>
        <div className={styles.navBar}>
          
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
               src='/Images/logo3.png'
               alt={`logo`}
               className={styles.logoImg}/>

            </Link>

          <h1 className={styles.heading}>
            Hisar Boxing Club
          </h1>

          </div>

         <button className={styles.menuOpenButton} onClick={handleClick}>
    {isOpen?<CancelIcon color={"#ad4a4a"}/>:<MenuIcon/>}
    </button>
          

      

          <DesktopNavLinks isOpen={isOpen}/>
        </div>

     

      

        </nav>
  )
}






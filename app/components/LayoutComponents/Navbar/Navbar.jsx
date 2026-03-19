"use client";



import Image from "next/image";
import { useState } from "react";
import DesktopNavLinks from "./DesktopNavLinks/DesktopNavLinks";
import {MenuIcon,CancelIcon } from "@/public/Images/svgs/svgImages";
import styles from './navbar.module.css'
import Link from "next/link";
import MobileNavPanel from './MobileNavPanel/MobileNavPanel'




export default function Navbar() {

 const [isOpen, setOpen] = useState(false);



  function toggleOpen() {
    setOpen(!isOpen);
    
  }

  return (
    <nav className={styles.navWrapper}>
    <div className={styles.topBar}>📍 Devet jugovica 24, Leskovac | 📞 +381 62 123456</div>
        <div className={styles.navBar}>
          
      <MobileNavPanel isOpen={isOpen} toggleOpen={toggleOpen}/>

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

         <button className={styles.menuOpenButton} onClick={toggleOpen}>
    {isOpen?<CancelIcon color={"#ad4a4a"}/>:<MenuIcon/>}
    </button>
          

      

          <DesktopNavLinks isOpen={isOpen}/>
        </div>

     

      

        </nav>
  )
}






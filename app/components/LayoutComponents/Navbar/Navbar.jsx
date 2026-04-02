"use client";



import Image from "next/image";
import { useState } from "react";
import DesktopNavLinks from "./DesktopNavLinks/DesktopNavLinks";
import {MenuIcon,CancelIcon } from "@/public/Images/svgs/svgImages";
import styles from './navbar.module.css'
import MobileNavPanel from './MobileNavPanel/MobileNavPanel'
import Logo from './Logo/Logo'




export default function Navbar() {

 const [isOpen, setOpen] = useState(false);



  function toggleOpen() {
    setOpen(!isOpen);
    
  }

  return (
    <nav className={styles.navWrapper}>
    {/* <div className={styles.topBar}>📍 Devet jugovica 24, Leskovac | 📞 +381 62 123456</div> */}
    {isOpen && <MobileNavPanel isOpen={isOpen} toggleOpen={toggleOpen}/>}
        <div className={styles.navBar}>
          
      

        <Logo/>

         <button className={styles.menuOpenButton} onClick={toggleOpen}>
   <MenuIcon/>
    </button>
          

      

          <DesktopNavLinks isOpen={isOpen}/>
        </div>

     

      

        </nav>
  )
}






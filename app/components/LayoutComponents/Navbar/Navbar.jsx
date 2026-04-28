"use client";



import { useState } from "react";
import DesktopNavLinks from "./DesktopNavLinks/DesktopNavLinks";
import {MenuIcon,CancelIcon } from "@/public/Images/svgs/svgImages";
import styles from './navbar.module.css'
import MobileNavPanel from './MobileNavPanel/MobileNavPanel'
import Logo from './Logo/Logo'
import { useGlobalStoreShallow } from "../../../Contexts/AppContext";




export default function Navbar() {

 const [isOpen, setOpen] = useState(false);

  const { router } = useGlobalStoreShallow((state) => ({
       router: state.router
  }));



  function toggleOpen() {
    setOpen(!isOpen);
    
  }

  return (
    <nav className={styles.navWrapper}>
    {/* <div className={styles.topBar}>📍 Mlinska 30, Leskovac | 📞 +381 62 123456</div> */}
   
        <div className={styles.navBar}>
          
      

        <Logo/>

        {isOpen?   <button className={styles.menuOpenButton} onClick={()=>{router.back();}}>
                  <CancelIcon
                    styleClassName={styles.closeButton}
                    color={"#ad4a4a"}
                  />
                </button>
                :<button className={styles.menuOpenButton} onClick={toggleOpen}>
   <MenuIcon/>
    </button>}
          

      

          <DesktopNavLinks isOpen={isOpen}/>
        </div>

      <MobileNavPanel isOpen={isOpen} toggleOpen={toggleOpen}/>

      

        </nav>
  )
}






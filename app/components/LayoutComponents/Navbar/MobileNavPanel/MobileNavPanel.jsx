

import React, { useEffect } from 'react'
import styles from './mobilenavpanel.module.css'
import Link from 'next/link'
import { useGlobalStoreShallow } from "@/app/Contexts/AppContext";
import { useRouter } from 'next/router';
import { CancelIcon } from '../../../../../public/Images/svgs/svgImages';
import Logo from '../Logo/Logo';


export default function MobileNavPanel({isOpen, toggleOpen}) {





    const { router, increaseDeepLink, decreaseDeepLink } = useGlobalStoreShallow((state) => ({
      router: state.router,
      increaseDeepLink: state.increaseDeepLink,
      decreaseDeepLink: state.decreaseDeepLink
    }));


 useEffect(() => {



        const handlePopState = ()=>{

          console.log('mobile nav pop state activated.')
          
          toggleOpen();
          
        }
 console.log('mobile nav pop state activated.')
       
        increaseDeepLink('mobile_menu');
        window?.addEventListener("popstate", handlePopState);
         
  
        return () => {

          
          window?.removeEventListener("popstate", handlePopState);
          decreaseDeepLink()

        

        };
      }, []);


      const clickClose = ()=>{router.back();}
  


  return (
      <div className={styles.mobileMenu}>
       
         <div className={styles.mobileMenuTop}>
              

                <Logo/>
        <button className={styles.menuOpenButton} onClick={clickClose}>
             <CancelIcon styleClassName={styles.closeButton} color={"#ad4a4a"}/>
             </button>

                </div>
    

          <div
           className={`${styles.mobileMenuMain}`}
          >
             <Link href={"/"} className={`${styles.linkStyle}`} onClick={toggleOpen} >Početna</Link>
              <Link href={"/ekipa"} className={`${styles.linkStyle}`} onClick={toggleOpen} >Ekipa</Link>
              <Link href={"/galerija"} className={`${styles.linkStyle}`} onClick={toggleOpen} >Galerija</Link>
              <Link href={"/o-nama"} className={`${styles.linkStyle}`} onClick={toggleOpen} >O nama</Link>
              <Link href={"/kontakt"} className={`${styles.linkStyle}`} onClick={toggleOpen} >Kontakt</Link>
  
           
          </div>
            </div>
  )
}

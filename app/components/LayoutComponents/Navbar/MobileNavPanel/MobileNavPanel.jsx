

import React, { useEffect } from 'react'
import styles from './mobilenavpanel.module.css'
import Link from 'next/link'
import { useGlobalStoreShallow } from "@/app/Contexts/AppContext";
import { usePathname } from 'next/navigation';



const navLinks = [
  { href: "/", label: "Početna" },
  { href: "/treninzi", label: "Treninzi" },
  { href: "/galerija", label: "Galerija" },
  { href: "/o-nama", label: "Naša priča" },
  // { href: "/kontakt", label: "Kontakt" },
];


export default function MobileNavPanel({isOpen, toggleOpen}) {





    const { increaseDeepLink, decreaseDeepLink } = useGlobalStoreShallow((state) => ({
      increaseDeepLink: state.increaseDeepLink,
      decreaseDeepLink: state.decreaseDeepLink
    }));



      

      useEffect(()=>{

          const handlePopState = ()=>{

          console.log('mobile nav pop state activated.', isOpen)
          
          toggleOpen();
          
        }

        if(isOpen){
            increaseDeepLink('mobile_menu');
        window?.addEventListener("popstate", handlePopState);
        }

        else{
           window?.removeEventListener("popstate", handlePopState);
          decreaseDeepLink()
        }

         return () => {

            window?.removeEventListener("popstate", handlePopState);
          decreaseDeepLink()
        
        };

      }, [isOpen])


  

  const pathname = usePathname();

  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <div className={`${styles.mobileMenu} ${isOpen?styles.mobileMenuOpen:styles.mobileMenuClosed}`}>
     
       {/* <button className={styles.menuOpenButton} onClick={clickClose}>
          <CancelIcon
            styleClassName={styles.closeButton}
            color={"#ad4a4a"}
          />
        </button> */}

      <div className={styles.mobileMenuMain}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.linkStyle} ${
              isActive(link.href) ? styles.activeLink : ""
            }`}
            onClick={toggleOpen}
          >
            {link.label}
          </Link>
        ))}

         <Link href="/kontakt"   className={styles.cta}>
        Učlani se
      </Link>

      </div>

     
    </div>
  );
}
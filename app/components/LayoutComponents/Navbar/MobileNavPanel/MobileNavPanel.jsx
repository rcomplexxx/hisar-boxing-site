

import React, { useEffect } from 'react'
import styles from './mobilenavpanel.module.css'
import Link from 'next/link'
import { useGlobalStoreShallow } from "@/app/Contexts/AppContext";
import { useRouter } from 'next/router';
import { CancelIcon } from '../../../../../public/Images/svgs/svgImages';
import Logo from '../Logo/Logo';
import { usePathname } from 'next/navigation';



const navLinks = [
  { href: "/", label: "Početna" },
  { href: "/ekipa", label: "Ekipa" },
  { href: "/galerija", label: "Galerija" },
  { href: "/o-nama", label: "Naša Priča" },
  { href: "/kontakt", label: "Kontakt" },
];


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
  

  const pathname = usePathname();

  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <div className={styles.mobileMenu}>
      <div className={styles.mobileMenuTop}>
        <Logo />
        <button className={styles.menuOpenButton} onClick={clickClose}>
          <CancelIcon
            styleClassName={styles.closeButton}
            color={"#ad4a4a"}
          />
        </button>
      </div>

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
      </div>
    </div>
  );
}
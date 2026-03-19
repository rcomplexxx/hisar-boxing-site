import React from 'react'
import styles from './mobilenavpanel.module.css'
import Link from 'next/link'

export default function MobileNavPanel({isOpen, toggleOpen}) {
  return (
          <div
           className={`${styles.mobileMenu} ${!isOpen ? styles.hidden : ''}`}
          >
             <Link href={"/"} className={`${styles.linkStyle}`} onClick={toggleOpen} >Pocetna</Link>
              <Link href={"/ekipa"} className={`${styles.linkStyle}`} onClick={toggleOpen} >Ekipa</Link>
              <Link href={"/galerija"} className={`${styles.linkStyle}`} onClick={toggleOpen} >Galerija</Link>
              <Link href={"/o-nama"} className={`${styles.linkStyle}`} onClick={toggleOpen} >O nama</Link>
              <Link href={"/kontakt"} className={`${styles.linkStyle}`} onClick={toggleOpen} >Kontakt</Link>
  
           
          </div>
  )
}

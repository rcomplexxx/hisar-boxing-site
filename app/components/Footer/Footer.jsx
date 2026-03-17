import styles from './footer.module.css';


import React from 'react'

export default function Footer() {
  return (
   <footer className={styles.footer}>
  <div className={styles.contact}>
    <p>📧 <a href="mailto:hisarboxing@gmail.com">hisarboxing@gmail.com</a></p>
    <p>📞 <a href="tel:+381600000000">+381 60 000 0000</a></p>
    <p>📍 Stara Pazova, Serbia</p>
  </div>

  <div className={styles.links}>
    <a href="">Pocetna</a>
    <a href="#our-classes">Nas tim</a>
    <a href="#cta">Galerija</a>
    <a href="#cta">O nama</a>
    <a href="#cta">Kontaktirajte nas</a>
  </div>

  <div className={styles.copy}>
    <p>© {new Date().getFullYear()} Hisar Boxing Gym. Sva prava zadržana.</p>
  </div>
</footer>
  )
}



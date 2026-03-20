import styles from "./footer.module.css";
import React from "react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Brand */}
        <div className={styles.col}>
          <h3 className={styles.logo}>Hisar Boxing</h3>
          <p className={styles.desc}>
            Profesionalni boks klub u Staroj Pazovi. Trening za početnike i napredne.
          </p>
        </div>

        {/* Navigation */}
        <div className={styles.col}>
          <h4>Navigacija</h4>
          <a href="/">Početna</a>
          <a href="#our-classes">Naš tim</a>
          <a href="#gallery">Galerija</a>
          <a href="#about">O nama</a>
          <a href="#contact">Kontakt</a>
        </div>

        {/* Contact */}
        <div className={styles.col}>
          <h4>Kontakt</h4>
          <p>📧 <a href="mailto:hisarboxing@gmail.com">hisarboxing@gmail.com</a></p>
          <p>📞 <a href="tel:+381600000000">+381 62 123456</a></p>
          <p>📍 Devet jugovica 24, Leskovac</p>
        </div>

        {/* Extra (makes it feel legit) */}
        <div className={styles.col}>
          <h4>Radno vreme</h4>
          <p>Pon - Pet: 08:00 - 22:00</p>
          <p>Subota: 10:00 - 18:00</p>
          <p>Nedelja: Zatvoreno</p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Hisar Boxing Gym. Sva prava zadržana.</p>
      </div>
    </footer>
  );
}
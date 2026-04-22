"use client";


import Image from "next/image";
import styles from "./footer.module.css";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {


  const pathname = usePathname();

    const navLinks = [
    { href: "/", label: "Početna" },
    { href: "/treninzi", label: "Treninzi" },
    { href: "/galerija", label: "Galerija" },
    { href: "/o-nama", label: "Naša priča" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  console.log('current pathname', pathname)


  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Brand */}
        <div className={styles.col}>
          <div className={styles.logoWrapper}>
  <Image
    src="/Images/logo3.png" // put your logo in /public
    alt="Hisar Boxing Club logo"
    width={40}
    height={40}
  />
  <h4 className={styles.logoText}>Hisar Boxing Club</h4>
</div>
          <p>
            Profesionalni boks klub u Leskovcu. Trening za početnike i napredne.
          </p>
        </div>

        {/* Navigation */}
        <div className={styles.col}>
          <h4>Navigacija</h4>
            {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.link} ${pathname === link.href && styles.activeLink}` }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className={styles.col}>
          <h4>Kontakt</h4>
           <p>📞 <a href="tel:+381600000000">+381 62 123456</a></p>
          <p>📧 <a href="mailto:hisarboxing@gmail.com">hisarboxing@gmail.com</a></p>
          <p>📍 Mlinska 30, Leskovac</p>
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
        <p>© {new Date().getFullYear()} Hisar Boxing Club.</p>
      </div>
    </footer>
  );
}

"use client";


import React from 'react'

import Link from "next/link";

import { usePathname } from "next/navigation";
import styles from './footernavigation.module.css'

export default function FooterNavigation() {


      const pathname = usePathname();

    const navLinks = [
    { href: "/", label: "Početna" },
    { href: "/treninzi", label: "Treninzi" },
    { href: "/galerija", label: "Galerija" },
    { href: "/o-nama", label: "Naša priča" },
    { href: "/kontakt", label: "Kontakt" },
  ];


  return (
       <>
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
       </>
  )
}

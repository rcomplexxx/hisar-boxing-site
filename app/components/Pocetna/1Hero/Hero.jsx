import React from 'react'
import styles from './hero.module.css'
import Link from 'next/link'


export default function Hero() {
  return (
    <section id="hero" className={`${styles.hero}`}>


         <div className={styles.outerWrapper}>
  <div className={styles.innerWrapper}>
    
       <h1 className={styles.heroHeading}>
              Postani Bokser — Treninzi Boksa u Leskovcu
            </h1>

            <p className={styles.heroPharagraph}>


            Hisar Boxing je klub u Leskovcu koji nudi kvalitetne boks treninge uz stručno vođstvo iskusnih trenera i fokus na napredak svakog člana.
             Kroz kvalitetan trening i podršku trenera gradiš formu, tehniku i sigurnost u sebe.

           
            </p>

            <Link href={`/kontakt`} className={styles.kontaktButton}>
              POČNI ODMAH
            </Link>
          </div>
        </div>
      
    </section>
  )
}

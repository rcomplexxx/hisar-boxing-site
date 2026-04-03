import Image from 'next/image'
import React from 'react'
import styles from './firstsection.module.css'
import { BoxingGloves } from '@/public/Images/svgs/svgImages'

export default function FirstSection() {
  return (
    <section id="our-classes" className={styles.firstSection}>
      <div className={styles.containerWrapper}>
        <div className={styles.container}>

          {/* IMAGE */}
          <div className={styles.imageWrapper}>
            <Image
              height={0}
              width={0}
              sizes="100vw"
              src="/Images/main_1.png"
              className={styles.imgMain1}
              alt="Boks trening"
            />
          </div>

          {/* TEXT */}
          <div className={styles.textWrapper}>
            {/* HOOK / TITLE */}
            <h2 className={styles.title}>Rezultati ne dolaze slučajno</h2>

            {/* SHORT BODY */}
            <p className={styles.bodyText}>
              Prestani da treniraš bez rezultata. <br/>
              Naši treninzi kombinuju pravu boks tehniku, snagu i kondiciju. <br/>
              Svaki trening ima cilj — i vidiš napredak.
            </p>

            {/* BENEFITS */}
            <div className={styles.benefits}>
              <span>✔ Brži rezultati</span>
              <span>✔ Prava tehnika</span>
              <span>✔ Veće samopouzdanje</span>
            </div>

            {/* TRAINERS / PROOF */}
            <div className={styles.trainers}>
              <div className={styles.boxerRow}>
                <BoxingGloves className={styles.glovesIcon}/>
                <div className={styles.boxerNameDiv}>
                  <p className="font-black">Glavni trener</p>
                  <p className="opacity-50">Rastko Stamenvkovic – 15+ godina iskustva</p>
                </div>
              </div>

              <div className={styles.boxerRow}>
                <BoxingGloves className={styles.glovesIcon}/>
                <div className={styles.boxerNameDiv}>
                  <p className="font-black">Kondicioni trener</p>
                  <p className="opacity-50">Marko Manojlovic – stručnjak za snagu i izdržljivost</p>
                </div>
              </div>

              <div className={styles.boxerRow}>
                <BoxingGloves className={styles.glovesIcon}/>
                <div className={styles.boxerNameDiv}>
                  <p className="font-black">Trener za početnike</p>
                  <p className="opacity-50">Nikola Markovic – vodi te od prvog koraka</p>
                </div>
              </div>
            </div>

            {/* CTA BUTTON */}
            {/* <button className={styles.ctaButton}>
              Započni trening →
            </button> */}
          </div>

        </div>
      </div>
    </section>
  )
}
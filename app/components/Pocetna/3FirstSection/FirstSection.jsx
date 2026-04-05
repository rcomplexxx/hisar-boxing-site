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
              src="/Images/background.png"
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
            {/* <div className={styles.trainers}>
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
            </div> */}

            {/* CTA BUTTON */}
            {/* <button className={styles.ctaButton}>
              Započni trening →
            </button> */}
          </div>

        </div>
      </div>

       <div className={`${styles.containerWrapper} ${styles.secondPoint}`}>
        <div className={`${styles.container} ${styles.container_section_2}`}>

          {/* TEXT ON LEFT */}
          <div className={styles.textWrapper}>
            <h2>Trening koji se prilagođava tebi</h2>

            <p className={styles.bodyText}>
              Svaki član ima svoj tempo i cilj. <br/>
              Bilo da tek počinješ ili već treniraš, naši treninzi balansiraju tehniku, kondiciju i snagu. <br/>
              Fokus je na postepenom, sigurnom napretku i motivaciji koja traje.
            </p>

            <div className={styles.benefits}>
              <span>Prilagođeno početnicima i naprednima</span>
              <span>Fokus na pravilnu tehniku</span>
              <span>Vidljiv napredak iz treninga u trening</span>
            </div>
          </div>

          {/* IMAGE ON RIGHT */}
          <div className={styles.imageWrapper}>
            <Image
              height={0}
              width={0}
              sizes="100vw"
              src="/Images/box-action-2.png" // a different image showing action / training
              className={styles.imgMain1}
              alt="Boks trening metoda"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
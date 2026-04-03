import Image from 'next/image'
import React from 'react'
import styles from './firstsection.module.css' // reuse same CSS
import { BoxingGloves } from '@/public/Images/svgs/svgImages'

export default function SecondSection() {
  return (
    <section id="our-method" className={styles.firstSection}>
      <div className={styles.containerWrapper}>
        <div className={`${styles.container} ${styles.container_section_2}`}>

          {/* TEXT ON LEFT */}
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>Trening koji se prilagođava tebi</h2>

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
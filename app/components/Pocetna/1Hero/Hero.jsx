import React from 'react'
import styles from './hero.module.css'


export default function Hero() {
  return (
    <section id="hero" className={`${styles.hero}`}>


         <div className={styles.outerWrapper}>
  <div className={styles.innerWrapper}>
    
       <h1 className={styles.heroHeading}>
              GRUPNI I INDIVIDUALNI TRENINZI BOKSA U LESKOVCU
            </h1>

            <p className={styles.heroPharagraph}>
              Naučite boks uz profesionalnog trenera sa iskustvom od 45 profesionalnih mečeva. Naučite pravilnu tehniku, taktiku i disciplinu koja stoji iza ovog sporta. Treninzi su prilagođeni vašim ciljevima – bilo da želite bolju formu, samoodbranu ili takmičarski nivo. Uđite u ring spremni i sigurni u svoje sposobnosti.
            </p>

            <button className={styles.kontaktButton}>
              Kontaktirajte nas
            </button>
          </div>
        </div>
      
    </section>
  )
}

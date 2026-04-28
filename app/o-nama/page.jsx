import Image from 'next/image';
import styles from './o-nama.module.css'
import PageHeader from "@/app/components/LayoutComponents/PageHeader/PageHeader"
import Link from 'next/link';


export default function AboutPage() {
  return (

    <section className={styles.wrapper2}>
       <PageHeader title="Naša priča" />
      

    <div className={styles.wrapper}>
   

<section className={styles.intro}>
  
      <div className={styles.contentWrapper}>

<div>
<Image 
sizes='100vw'
height={0} width={0}
className={styles.oldSparring}
  src="/Images/old-sparring2.jpg" 
        alt="Stara slika bokserskog kluba"
/>
</div>


{/* Kako je sve počelo
Naš klub je nastao iz strasti prema boksu i želje da se prenese prava vrednost ovog sporta na nove generacije. Godinama gradimo borce — ne samo u ringu, već i u životu.

Kroz tradiciju, rad i disciplinu, stvaramo mesto gde svako ima priliku da postane jača verzija sebe. */}



    {/* RIGHT - CONTENT */}
    <div className={styles.content}>
      <span className={styles.kicker}>Od 2008</span>
      <h2>Tradicija rada i discipline</h2>

      <p>
        Više od decenije gradimo sportiste i karakter. Klub je prošao kroz 
        generacije takmičara, rekreativaca i ljudi koji su ovde pronašli svoju snagu.
      </p>

      {/* STATS */}
      <div className={styles.stats}>
        <div>
          <strong>15+</strong>
          <span>godina rada</span>
        </div>

        <div>
          <strong>9</strong>
          <span>zlatnih medalja</span>
        </div>

      
      </div>
    </div>
</div>


      <div className={`${styles.contentWrapper} ${styles.contentWrapper2}`}>

      <div className={styles.content}>
      <h2>Naša misija</h2>
      <p>
        Naša misija je da pomognemo svakom članu da postane jača, stabilnija 
        i sigurnija verzija sebe.
      </p>
      <p>
        Bez obzira na cilj — kondicija, samopouzdanje ili takmičenje — 
        pristup ostaje isti: rad, disciplina i kontinuitet.
      </p>
    </div>

<div>
      <Image
        src="/Images/main_1.png" // ubaci svoju sliku
        alt="Trening u bokserskom klubu"
        height={0} width={0}
        className={styles.oldSparring}
       
        sizes="100vw"
      />
    </div>
  </div>

</section>

 
  <div className={`${styles.spacerMainColor} ${styles.spacerOnlyDesktop}`}/>

            {/* VALUES */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <h2>Naše vrednosti</h2>

          <div className={styles.grid3}>
            <div className={styles.valueCard}>
              <h3>Tradicija</h3>
              <p>Poštujemo korene boksa i prenosimo znanje.</p>
            </div>

            <div className={styles.valueCard}>
              <h3>Disciplina</h3>
              <p>Svaki trening je korak ka jačem telu i umu.</p>
            </div>

            <div className={styles.valueCard}>
              <h3>Poštovanje</h3>
              <p>Karakter je ono što nas definiše.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ŠTA NAS IZDVAJA */}
      <section className={styles.sectionAlt}>
        <div className={styles.altContainer}>
          <h2>Šta nas izdvaja</h2>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Individualan pristup</h3>
              <p>
                Svaki član ima svoj cilj — trening se prilagođava tvom nivou i tempu.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Struktura i disciplina</h3>
              <p>
                Treninzi imaju jasan plan i progresiju koja daje rezultate.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Zajednica</h3>
              <p>
                Okruženje koje te gura napred, bez ega i negativne energije.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Iskustvo</h3>
              <p>
                Kombinujemo praktično iskustvo i moderno razumevanje treninga.
              </p>
            </div>
          </div>
        </div>
      </section>

 

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Spreman da počneš?</h2>
          <p>Dođi na probni trening i uveri se sam.</p>
        
            <Link  className={styles.button} href="/kontakt">Kontaktiraj nas</Link>
        </div>
      </section>

    </div>
     </section>
  );
}
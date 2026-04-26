


import Link from "next/link";
import PageHeader from "../components/LayoutComponents/PageHeader/PageHeader";
import styles from './treninzi.module.css';
import Image from "next/image";
import TrainingTypes from "./TrainingTypes/TrainingTypes";

export default function TreninziPage() {









  return (
    <section className={styles.wrapper2}>

      <PageHeader title="Treninzi" />

      <section className={styles.wrapper}>




<div className={styles.container}>



  <div className={styles.right}>
   <div className={styles.trainingImageWrap}>
  <Image
    src="/Images/box-training-2.jpg" // promeni po potrebi
    alt="Boks trening"
    height={0} width={0} sizes="100vw"
    className={styles.trainingImage}
    priority
  />
</div>
  </div>

    <div className={styles.left}>
    <h2>Treninzi za svaki nivo</h2>
      <p>
              Bilo da si početnik ili želiš da se takmičiš, naši treninzi su
              prilagođeni tvom nivou i ciljevima. Fokus je na pravilnoj tehnici,
              kondiciji i konstantnom napretku.
            </p>

      <ul className={styles.benefits}>
  <li>Rad na tehnici i gardu</li>
  <li>Kondiciono i snaga</li>
  <li>Sparing i kontrolisani rad</li>
  <li>Individualni pristup</li>
</ul>
   
  </div>

</div>

      <TrainingTypes/>

      

        {/* APPROACH */}
        <div className={styles.approach}>
          
          <div>
            <h2 className={styles.sectionTitle}>Kako radimo</h2>
        <p className={styles.textPrimary}>
  Svaki trening ima jasnu strukturu:{" "}
  <span className={styles.highlight}>zagrevanje</span>,{" "}
  <span className={styles.highlight}>tehnika</span>,{" "}
  <span className={styles.highlight}>rad na džaku</span> i{" "}
  <span className={styles.highlight}>kondicija</span>.
</p>
            <p className={styles.textSecondary}>
              Radimo u manjim grupama kako bi svaki član dobio pažnju
              i napredovao iz treninga u trening.
            </p>
          </div>

     <div>
          <h2 className={styles.sectionTitle}>Fokus treninga</h2>

          <div className={styles.featuresGrid}>

      
            {["Tehnika", "Snaga", "Kondicija", "Disciplina"].map((item) => (
              <div key={item} className={styles.featureCard}>
                <p>{item}</p>
              </div>
            ))}
          </div>

        </div>

        
     </div>

        {/* SCHEDULE */}
        {/* <div className={styles.schedule}>
          <h2 className={styles.sectionTitle}>Raspored treninga</h2>
          <p className={styles.textSecondary}>
            Ponedeljak – Petak: 18:00 – 21:00 <br />
            Subota: 12:00 – 14:00
          </p>
        </div> */}

        {/* CTA */}
        <div className={styles.linkWrap}>
          <Link href="/o-nama" className={styles.link}>
            {/* Prijavi se na trening */}

            Saznajte više o nama
          </Link>
        </div>

      </section >
    </section>
  );
}
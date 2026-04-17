import Image from "next/image";
import Link from "next/link";
import PageHeader from "../components/LayoutComponents/PageHeader/PageHeader";
import styles from './ekipa.module.css';

const trainers = [
  {
    name: "Rastko Stamenković",
    role: "Glavni trener",
    image: "/Images/boxer_ra_3.png",
    bio: "Bivši profesionalni bokser sa preko 50 mečeva. Specijalizovan za tehniku i pripremu takmičara.",
    achievements: ["Nacionalni šampion", "15+ godina iskustva"],
    experience: "15+ god"
  },
  {
    name: "Nikola Jovanović",
    role: "Kondicioni trener",
    image: "/Images/gym_trainer.jpg",
    bio: "Ekspert za snagu i izdržljivost. Radi sa sportistima svih nivoa.",
    achievements: ["Certified Strength Coach", "Radio sa 100+ sportista"],
    experience: "10+ god"
  },
  {
    name: "Stefan Ilić",
    role: "Trener za početnike",
    image: "/Images/gym_trainer_2.jpg",
    bio: "Fokusiran na pravilne osnove i razvoj novih boraca.",
    achievements: ["10+ godina iskustva", "Specijalista za početnike"],
    experience: "10+ god"
  }
];

export default function TeamPage() {
  return (
    <section className={styles.wrapper2}>

      <PageHeader title="Ekipa" />

      <div className={styles.wrapper}>

        {/* INTRO */}
        <div className={styles.teamIntro}>
          <div className={styles.teamIntroText}>
            <h2>Tim koji stoji iza svakog napretka</h2>
            <p>
              Naš tim čine treneri sa dugogodišnjim iskustvom u radu sa rekreativcima 
              i takmičarima. Svaki član donosi specifično znanje, ali svi dele isti pristup — 
              rad, disciplina i posvećenost.
            </p>
          </div>
        </div>

        {/* TRAINERS GRID */}
        <div className={styles.trainersGrid}>
          {trainers.map((trainer, index) => (
            <div key={index} className={styles.card}>
              
              <div className={styles.imageWrap}>
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className={styles.image}
                />

                <div className={styles.badge}>
                  {trainer.experience}
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{trainer.name}</h3>
                <p className={styles.cardRole}>{trainer.role}</p>

                <p className={styles.cardBio}>
                  {trainer.bio}
                </p>

                <ul className={styles.achievements}>
                  {trainer.achievements.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* TRAINING APPROACH */}
        <div className={styles.approach}>
          
          <div>
            <h2 className={styles.sectionTitle}>Kako radimo</h2>
            <p className={styles.textPrimary}>
              Naš pristup je jednostavan: tehnika, disciplina i kontinuitet.
              Svaki trening je strukturiran tako da razvija tvoju snagu,
              brzinu i izdržljivost.
            </p>
            <p className={styles.textSecondary}>
              Radimo u malim grupama kako bismo svakom članu posvetili
              maksimalnu pažnju i omogućili napredak iz treninga u trening.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {["Tehnika", "Snaga", "Kondicija", "Disciplina"].map((item) => (
              <div key={item} className={styles.featureCard}>
                <p>{item}</p>
              </div>
            ))}
          </div>

        </div>

        {/* QUOTE */}
        <div className={styles.quote}>
          <p>
            "Šampioni se ne stvaraju u ringu — tamo se samo dokazuje ono što su izgradili na treninzima."
          </p>
        </div>

        {/* LINK */}
        <div className={styles.linkWrap}>
          <Link href="/o-nama" className={styles.link}>
            Saznajte više o nama
          </Link>
        </div>

      </div>
    </section>
  );
}
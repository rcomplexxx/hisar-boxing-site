import Image from "next/image";
import Link from "next/link";
import PageHeader from "../components/LayoutComponents/PageHeader/PageHeader";
import styles from './ekipa.module.css'

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
    image: "/Images/boxer.png",
    bio: "Ekspert za snagu i izdržljivost. Radi sa sportistima svih nivoa.",
    achievements: ["Certified Strength Coach", "Radio sa 100+ sportista"],
    experience: "10+ god"
  },
  {
    name: "Stefan Ilić",
    role: "Trener za početnike",
    image: "/Images/boxer.png",
    bio: "Fokusiran na pravilne osnove i razvoj novih boraca.",
    achievements: ["10+ godina iskustva", "Specijalista za početnike"],
    experience: "10+ god"
  }
];

export default function TeamPage() {
  return (
    <section className={styles.wrapper2}>

    <PageHeader title="Ekipa"/>

      <div className={styles.wrapper}>

        {/* Heading */}
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold uppercase mb-4">
            Ekipa
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ljudi iza svakog uspeha. Iskustvo, znanje i posvećenost.
          </p>
        </div> */}

        {/* STATS BAR */}
        {/* <div className="grid grid-cols-3 text-center mb-16 border-y border-gray-800 py-6">
          <div>
            <p className="text-3xl font-bold text-red-600">30+</p>
            <p className="text-gray-400 text-sm">Godina iskustva</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-red-600">500+</p>
            <p className="text-gray-400 text-sm">Članova</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-red-600">50+</p>
            <p className="text-gray-400 text-sm">Osvojenih medalja</p>
          </div>
        </div> */}



<div className={styles.teamIntro}>

  <div className={styles.teamIntroText}>
    <h2>Tim koji stoji iza svakog napretka</h2>
    <p>
      Naš tim čine treneri sa dugogodišnjim iskustvom u radu sa rekreativcima 
      i takmičarima. Svaki član donosi specifično znanje, ali svi dele isti pristup — 
      rad, disciplina i posvećenost.
    </p>
  </div>

  {/* VALUES STRIP */}
  {/* <div className={styles.values}>
    <div>
      <strong>Iskustvo</strong>
      <span>godine rada u ringu</span>
    </div>
    <div>
      <strong>Posvećenost</strong>
      <span>rad sa svakim članom</span>
    </div>
    <div>
      <strong>Rezultati</strong>
      <span>vidljiv napredak</span>
    </div>
  </div> */}

</div>



        {/* Trainers Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
            >
              <div className="relative h-80 w-full">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover"
                />

                {/* EXPERIENCE BADGE */}
                <div className="absolute top-4 left-4 bg-red-600 text-black text-xs px-3 py-1 rounded-full font-semibold">
                  {trainer.experience}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{trainer.name}</h3>
                <p className="text-red-500 mb-4">{trainer.role}</p>

                <p className="text-gray-400 text-sm mb-4">
                  {trainer.bio}
                </p>

                <ul className="text-sm text-gray-300 space-y-1">
                  {trainer.achievements.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* TRAINING APPROACH SECTION */}
        <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Kako radimo</h2>
            <p className="text-gray-300 mb-4">
              Naš pristup je jednostavan: tehnika, disciplina i kontinuitet.
              Svaki trening je strukturiran tako da razvija tvoju snagu,
              brzinu i izdržljivost.
            </p>
            <p className="text-gray-400">
              Radimo u malim grupama kako bismo svakom članu posvetili
              maksimalnu pažnju i omogućili napredak iz treninga u trening.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-900 p-6 rounded-xl text-center">
              <p className="text-red-600 font-bold text-lg">Tehnika</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">
              <p className="text-red-600 font-bold text-lg">Snaga</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">
              <p className="text-red-600 font-bold text-lg">Kondicija</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl text-center">
              <p className="text-red-600 font-bold text-lg">Disciplina</p>
            </div>
          </div>
        </div>

        {/* QUOTE SECTION */}
        <div className="text-center mt-20 max-w-3xl mx-auto">
          <p className="text-xl italic text-gray-300">
            {'"Šampioni se ne stvaraju u ringu — tamo se samo dokazuje ono što su izgradili na treninzima."'}

          </p>
        </div>

        {/* CONTACT LINK (NO HARD CTA) */}
        <div className="text-center mt-16">
          <Link
            href="/o-nama"
            className="text-red-500 hover:text-red-400 underline"
          >
            Saznajte više o nama
          </Link>
        </div>

      </div>
    </section>
  );
}

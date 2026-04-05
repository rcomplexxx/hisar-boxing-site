import Image from 'next/image';
import React from 'react';
import styles from './o-nama.module.css';

export default function Page() {
  return (
    <>
      <section className={styles.hero}>
        <Image
          height={9}
          width={9}
          sizes="100vw"
          src="/Images/main_1.png"
          alt="Boxing gym"
          className={styles.heroImage}
        />
        <div className={styles.heroContent}>
          <h2 className={styles.heroTitle}>Naša Priča</h2>
          <p className={styles.heroText}>
            Tradicija, disciplina i borbeni duh — temelj našeg kluba.
          </p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className={styles.story}>
        <h2 className={styles.sectionTitle}>Kako je sve počelo</h2>
        <p className={styles.storyText}>
          Naš klub je nastao iz strasti prema boksu i želje da se prenese
          prava vrednost ovog sporta na nove generacije. Godinama gradimo
          borce — ne samo u ringu, već i u životu.
        </p>
        <p className={styles.storyTextSecondary}>
          Kroz tradiciju, rad i disciplinu, stvaramo mesto gde svako ima
          priliku da postane jača verzija sebe.
        </p>
      </section>

      {/* VALUES / TIMELINE */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitleCenter}>Naše vrednosti</h2>
          <div className={styles.grid3}>
            <div className={styles.valueCard}>
              <h3 className={styles.valueTitle}>Tradicija</h3>
              <p className={styles.valueText}>
                Poštujemo korene boksa i prenosimo znanje sa generacije na
                generaciju.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3 className={styles.valueTitle}>Disciplina</h3>
              <p className={styles.valueText}>
                Svaki trening je korak ka jačem telu i umu.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3 className={styles.valueTitle}>Poštovanje</h3>
              <p className={styles.valueText}>
                U ringu i van njega — karakter je ono što nas definiše.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE + TEXT SPLIT */}
      <section className={styles.splitSection}>
        <Image
          height={0}
          width={0}
          sizes="100vw"
          src="/Images/boxer.png"
          alt="Trainer"
          className={styles.splitImage}
        />
        <div>
          <h2 className={styles.sectionTitle}>Iskustvo koje pravi razliku</h2>
          <p className={styles.storyText}>
            Naši treneri dolaze iz stvarnog sveta boksa — sa iskustvom u
            takmičenjima i godinama rada sa borcima svih nivoa.
          </p>
          <p className={styles.storyTextSecondary}>
            Ovde nećeš dobiti samo trening, već mentorstvo i podršku.
          </p>
        </div>
      </section>
    </>
  );
}
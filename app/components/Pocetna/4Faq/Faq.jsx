"use client";

import { useState } from "react";
import styles from "./faq.module.css";

const faqs = [
  {
    question: "Cena članarine",
    answer: (
      <>
        Mesečna članarina iznosi oko <strong>6.000 RSD (±500 RSD)</strong>.
      </>
    ),
  },
  {
    question: "Kada su termini treninga?",
    answer: (
      <section>
        <p className={styles.day}>Ponedeljak</p>
        <ul>
          <li>(prepodne) 10:00 – 11:00</li>
          <li>(poslepodne) 19:00 – 21:00</li>
        </ul>

        <p className={styles.day}>Utorak</p>
        <ul>
          <li>19:00 – 21:00</li>
        </ul>

        <p className={styles.day}>Sreda</p>
        <ul>
          <li>(prepodne) 10:00 – 11:00</li>
          <li>(poslepodne) 19:00 – 21:00</li>
        </ul>

        <p className={styles.day}>Četvrtak</p>
        <ul>
          <li>Ne radimo</li>
        </ul>

        <p className={styles.day}>Petak</p>
        <ul>
          <li>19:00 – 21:00</li>
        </ul>
      </section>
    ),
  },
  {
    question: "Šta mi je potrebno za prvi trening?",
    answer: (
      <>
        <p>Za prvi trening potrebno je:</p>
        <ul>
          <li>majica</li>
          <li>šorc</li>
          <li>čiste patike za salu</li>
        </ul>

        <p>Nakon nekoliko treninga preporučuje se:</p>
        <ul>
          <li>rukavice</li>
          <li>bandažeri</li>
          <li>štitnik za zube</li>
        </ul>
      </>
    ),
  },
{question: "Da li ćeme treneri terati da sparingujem?",
    answer: "Nema problema; Ne morate da sparingujete ako ne osećate da je vreme. Nema nikakvog pritiska."
},

{
    question: "Kako mogu da se prijavim i učlanim?",
    answer: "Članstvo možete ostvariti putem e-maila, telefonom ili direktno na recepciji našeg centra."

}
 

];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
    <h2 className={styles.title}>Često postavljana pitanja</h2>
<p className={styles.subtitle}>
  Slobodno nam pošaljite poruku na <a href="mailto:hisarboxing@gmail.com">hisarboxing@gmail.com</a> ako imate dodatnih pitanja.
</p>
      <div className={styles.list}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.item}>
            
            <button
              onClick={() => toggle(index)}
              className={styles.question}
            >
              {faq.question}
              <span className={styles.icon}>
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            <div
              className={`${styles.answerWrapper} ${
                openIndex === index ? styles.open : styles.closed
              }`}
            >
              <div className={styles.answer}>
                {faq.answer}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
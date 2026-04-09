// app/contact/page.jsx
import Link from "next/link";
import styles from "./kontakt.module.css";
import { InstagramIcon, WhatsAppIcon } from "../../public/Images/svgs/svgImages";

export default function ContactPage() {
  return (
      <section className={styles.sectionContainer}>
        <div className={styles.container}>
        <h2>Kontaktiraj nas</h2>
        <p className={styles.subtitle}>
         Imate pitanje, želite da se učlanite ili vam je potrebna dodatna informacija? Slobodno nas kontaktirajte putem neke od opcija u nastavku — rado ćemo vam pomoći.
        </p>

        <div className={styles.options}>

       
   <a href="tel:+381601234567" className={styles.item}>
            <div className={styles.icon}>📞</div>
            <div>
              <h4>Pozovi nas</h4>
              <p>+381 60 1234567</p>
            </div>
          </a>



          <a href="mailto:your@email.com" className={styles.item}>
            <div className={styles.icon}>📧</div>
            <div>
              <h4>Email</h4>
              <p>hisarboxing@gmail.com</p>
            </div>
          </a>

            <a href="https://twitter.com" target="_blank" className={styles.item}>
            <div className={styles.icon}><InstagramIcon/></div>
            <div>
              <h4>Instagram</h4>
              <p>Send a DM</p>
            </div>
          </a>

          <a href="https://wa.me/123456789" target="_blank" className={styles.item}>
            <div className={styles.icon}><WhatsAppIcon/></div>
            <div>
              <h4>WhatsApp</h4>
              <p>Chat instantly</p>
            </div>
          </a>

        
        </div>

     <div className={styles.ctaBox}>
  <h2>Spreman za prvi trening?</h2>
  <p>Najbrži način je da nas pozoveš — odgovaramo odmah.</p>

  <div className={styles.ctaActions}>
    <a href="tel:+381601234567" className={styles.ctaPrimary}>
      📞 Pozovi nas
    </a>

    <a
      href="https://wa.me/381601234567"
      target="_blank"
      className={styles.ctaSecondary}
    >
      💬 WhatsApp
    </a>
  </div>
</div>

        <Link href="/" className={styles.backLink}>
  ← Vrati se na početnu
</Link>
</div>
      </section>
  );
}
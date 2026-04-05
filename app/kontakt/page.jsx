// app/contact/page.jsx
import Link from "next/link";
import styles from "./kontakt.module.css";
import { InstagramIcon, WhatsAppIcon } from "../../public/Images/svgs/svgImages";

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Kontaktiraj nas</h2>
        <p className={styles.subtitle}>
         Imate pitanje, želite da se učlanite ili vam je potrebna dodatna informacija? Slobodno nas kontaktirajte putem neke od opcija u nastavku — rado ćemo vam pomoći.
        </p>

        <div className={styles.options}>
          <a href="mailto:your@email.com" className={styles.item}>
            <div className={styles.icon}>📧</div>
            <div>
              <h3>Email</h3>
              <p>hisarboxing@gmail.com</p>
            </div>
          </a>

          <a href="https://wa.me/123456789" target="_blank" className={styles.item}>
            <div className={styles.icon}><WhatsAppIcon/></div>
            <div>
              <h3>WhatsApp</h3>
              <p>Chat instantly</p>
            </div>
          </a>

          <a href="https://twitter.com" target="_blank" className={styles.item}>
            <div className={styles.icon}><InstagramIcon/></div>
            <div>
              <h3>Instagram</h3>
              <p>Send a DM</p>
            </div>
          </a>
        </div>

        <div className={styles.ctaBox}>
          <h2>Spreman da počneš?</h2>
          <p>Pozovi nas da se učlanis i rezerviši svoj prvi trening.</p>
          <a href="mailto:your@email.com" className={styles.ctaButton}>
            Pozovi nas
          </a>
        </div>

        <Link href="/" className={styles.backLink}>
  ← Vrati se na početnu
</Link>
      </div>
    </div>
  );
}
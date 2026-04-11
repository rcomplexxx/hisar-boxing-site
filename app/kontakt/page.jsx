// app/contact/page.jsx
import Link from "next/link";
import styles from "./kontakt.module.css";
import  { PhoneIcon, EmailIcon, InstagramIcon, WhatsAppIcon } from "../../public/Images/svgs/svgImages";

export default function ContactPage() {
  return (
      <section className={styles.sectionContainer}>
        <div className={styles.container}>
        <h2>Kontaktiraj nas</h2>
        <p className={styles.subtitle}>
         Imate pitanje, želite da se učlanite ili vam je potrebna dodatna informacija? Slobodno nas kontaktirajte putem neke od opcija u nastavku — rado ćemo vam pomoći.
        </p>

        <div className={styles.options}>

       
   <Link href="tel:+381601234567" className={`${styles.item} ${styles.itemHighlight}`}>
            <div className={`${styles.icon} ${styles.iconPhone}`}><PhoneIcon/></div>
            <div>
              <h4>Pozovi nas</h4>
              <p>+381 60 1234567</p>
            </div>
          </Link>



          <Link href="mailto:your@email.com" className={`${styles.item} ${styles.itemHighlight2}`}>
            <div className={`${styles.icon} ${styles.iconEmail}`}><EmailIcon/></div>
            <div>
              <h4>Email</h4>
              <p>hisarboxing@gmail.com</p>
            </div>
          </Link>

            <Link href="https://instagram.com" target="_blank" className={`${styles.item} ${styles.itemInstagram}`}>
            <div className={styles.icon}><InstagramIcon/></div>
            <div>
              <h4>Instagram</h4>
              <p>Send a DM</p>
            </div>
          </Link>

          <Link href="https://wa.me/123456789" target="_blank" className={`${styles.item} ${styles.itemWhatsApp}`}>
            <div className={styles.icon}><WhatsAppIcon/></div>
            <div>
              <h4>WhatsApp</h4>
              <p>Chat instantly</p>
            </div>
          </Link>

        
        </div>

        <div className={styles.locationRow}>
  <div className={styles.locationHeader}>
    <h3>Gde se nalazimo?</h3>
    <Link
      href="https://maps.google.com"
      target="_blank"
      className={styles.locationLink}
    >
      Otvori u Google Maps →
    </Link>
  </div>

  <div className={styles.mapWrapper}>
    <iframe
      src="https://www.google.com/maps?q=Leskovac&output=embed"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
</div>

     <div className={styles.ctaBox}>
  <h2>Spreman za prvi trening?</h2>
  <p>Najbrži način je da nas pozoveš — odgovaramo odmah.</p>

  <div className={styles.ctaActions}>
    <Link href="tel:+381601234567" className={styles.ctaPrimary}>
      📞 Pozovi nas
    </Link>

    <Link
      href="https://wa.me/381601234567"
      target="_blank"
      className={styles.ctaSecondary}
    >
      💬 WhatsApp
    </Link>
  </div>
</div>

        <Link href="/" className={styles.backLink}>
  ← Vrati se na početnu
</Link>
</div>
      </section>
  );
}
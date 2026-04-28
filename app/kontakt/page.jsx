// app/contact/page.jsx
import Link from "next/link";
import styles from "./kontakt.module.css";
import PageHeader from "@/app/components/LayoutComponents/PageHeader/PageHeader"
import  { PhoneIcon, EmailIcon, InstagramIcon, WhatsAppIcon } from "../../public/Images/svgs/svgImages";

export default function ContactPage() {
  return (
      <section className={styles.sectionContainer}>



            <PageHeader title="Kontakt"/>


        <div className={styles.container}>
<div className={styles.leftColumn}>

          <div className={styles.mainContactContainer}>
        <h3>Kontaktirajte nas</h3>
        <p className={styles.subtitle}>
         Imate bilo koje pitanje, ili želite da se učlanite? Kontaktirajte nas putem opcija ispod.
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

            <Link href="https://instagram.com/hisarboxingclub/" target="_blank" className={`${styles.item} ${styles.itemInstagram}`}>
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
        </div>
</div>

 <div className={styles.rightColumn}>
        <div className={styles.locationRow}>
  <div className={styles.locationHeader}>
    <h3>Kako do nas?</h3>
    <Link
      href="https://maps.app.goo.gl/AF7Kne4mN6zydFq97"
      target="_blank"
      className={styles.locationLink}
    >
      Otvori u Google Maps →
    </Link>
  </div>

  <div className={styles.mapWrapper} tabindex="0">
   <iframe 
   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1062.0159893559558!2d21.947806839889495!3d42.992566820138784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475582adbba41269%3A0x60c7b8db3cf588a0!2sMlinska%2030%2C%20Leskovac%2016000!5e0!3m2!1sen!2srs!4v1776722843309!5m2!1sen!2srs" 
  loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"/>
  </div>
</div>
<div>
     <div className={styles.ctaBox}>
  <h3>Spreman za prvi trening?</h3>
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
</div>
</div>
      </section>
  );
}
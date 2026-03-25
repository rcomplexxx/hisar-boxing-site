// app/contact/page.jsx
import Link from "next/link";
import styles from "./kontakt.module.css";

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Get in Touch</h1>
        <p className={styles.subtitle}>
          Have a question, idea, or just want to connect? Reach out directly using the options below.
        </p>

        <div className={styles.options}>
          <a href="mailto:your@email.com" className={styles.item}>
            <div className={styles.icon}>📧</div>
            <div>
              <h3>Email</h3>
              <p>your@email.com</p>
            </div>
          </a>

          <a href="https://wa.me/123456789" target="_blank" className={styles.item}>
            <div className={styles.icon}>💬</div>
            <div>
              <h3>WhatsApp</h3>
              <p>Chat instantly</p>
            </div>
          </a>

          <a href="https://twitter.com" target="_blank" className={styles.item}>
            <div className={styles.icon}>🐦</div>
            <div>
              <h3>Twitter / X</h3>
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

        <Link href="/" className={styles.backLink}>← Back to Home</Link>
      </div>
    </div>
  );
}
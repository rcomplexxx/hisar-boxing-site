

"use client";
import styles from "./galerija.module.css";

const sections = [
  { title: "Gym " },
  { title: "Treninzi" },
  { title: "Video klipovi" },
];

export default function Gallery() {
  return (
    <div className={styles.galleryWrapper}>
      {sections.map((section, i) => (
        <div key={i} className={styles.section}>
          <h2 className={styles.title}>{section.title}</h2>

          <div className={styles.grid}>
            {Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className={styles.card}>
                {/* Replace with img or video */}
                <img
                  src={`https://picsum.photos/400/300?random=${i * 10 + idx}`}
                  alt="gallery"
                  className={styles.media}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}


"use client";
import { useState } from "react";
import styles from "./galerija.module.css";
import FullscreenMediaViewer from '@/app/components/Galerija/FullScreenMedia/FullScreenMedia'

const sections = [
  { title: "Sala " },
  { title: "Treninzi" },
  { title: "Video klipovi" },
];

export default function Gallery() {

  const [fullScreen, setFullScreen] = useState(false);

  const onClose=()=>{setFullScreen(!fullScreen)};

  return (
    <div className={styles.galleryWrapper}>
      {/* {fullScreen && <FullscreenMediaViewer onClose={onClose}/>} */}
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
                  onClick={()=>{setFullScreen(true)}}
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
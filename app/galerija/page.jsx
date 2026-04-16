

"use client";
import { useState } from "react";
import styles from "./galerija.module.css";
import FullscreenMediaViewer from '@/app/components/Galerija/FullScreenMedia/FullScreenMedia'
import PageHeader from "../components/LayoutComponents/PageHeader/PageHeader";

const sections = [
  { title: "Sala " },
  { title: "Treninzi" },
  { title: "Video klipovi" },
];

export default function Gallery() {

  const [fullScreen, setFullScreen] = useState(false);

  const onClose=()=>{setFullScreen(!fullScreen)};

  return (
    <>
    
    <section className={styles.galleryWrapper}>
      {/* {fullScreen && <FullscreenMediaViewer onClose={onClose}/>} */}

<PageHeader title={"Galerija"}/>

<div className={styles.galleryWrapper2}>

      {sections.map((section, i) => (
        <div key={i} className={styles.category}>
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
    </section>

    </>
  );
}
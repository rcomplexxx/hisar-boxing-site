

"use client";
import { useState } from "react";
import styles from "./galerija.module.css";
import FullscreenMediaViewer from '@/app/components/Galerija/FullScreenMedia/FullScreenMedia'
import PageHeader from "../components/LayoutComponents/PageHeader/PageHeader";
import Image from "next/image";



const treningImages = [
  "/Images/galerija/trening_1.jpeg",
  "/Images/galerija/trening_2.jpg",
  "/Images/galerija/trening_3.jpg",
  "/Images/galerija/trening_4.jpg",
  "/Images/galerija/trening_5.jpg",
  "/Images/galerija/trening_6.jpg",
];

const gymImages = [
  "/Images/galerija/gym_1.jpg",
  "/Images/galerija/gym_2.jpg",
  "/Images/galerija/gym_3.jpg",
  "/Images/galerija/gym_4.jpg",
  "/Images/galerija/gym_5.jpg",
  "/Images/galerija/gym_6.jpg",
];

const sections = [
  { title: "Sala", images: gymImages },
  { title: "Treninzi", images: treningImages },
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
  {(section.images || Array.from({ length: 6 })).map((item, idx) => {

    const src = section.images
      ? item
      : `https://picsum.photos/400/300?random=${i * 10 + idx}`;

    return (
      <div key={idx} className={styles.card}>
        <Image
          src={src}
          alt="gallery"
          onClick={() => setFullScreen(true)}
          className={styles.media}
          sizes="(max-width: 600px) 100vw, (max-width: 980px) 50vw, 30vw"
          width={400}
          height={300}
        />
      </div>
    );
  })}
</div>
         
        </div>
      ))}
       </div>
    </section>

    </>
  );
}
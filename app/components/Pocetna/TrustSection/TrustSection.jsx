'use client'

import React, { useEffect, useRef, useState } from "react";
import styles from "./trust.module.css";

export default function TrustSection() {



const items = [
{
number: "15+",
title: "godina tradicije",
desc: "kontinuiranog rada i iskustva",
highlight: true,
},
{
number: "9",
title: "zlatnih medalja",
desc: "sa domaćih i regionalnih takmičenja",
highlight: true,
}
];



return ( <section className={styles.section}> 
{/* <div className={styles.header}>
<h2>Naši rezultati</h2>
<p>Pogled na ono što smo zajedno gradili, i čemu smo se posvetili.</p>
</div> */}
<div className={styles.container}>

  <div className={styles.left}>
    <h3>Nova Energija u Bokserkom Treningu</h3>
    <p>
      U <strong>Leskovačkom Bokserkom Klubu</strong>, verujemo da boks nije samo sport – 
      on je način života koji jača telo i duh. Naša tradicija duguje se godinama stvaranja 
      vrhunskih boraca, a naš trening kombinuje ozbiljan rad sa druženjem i pozitivnom atmosferom.
    </p>
    <button className={styles.button}>Saznaj Više O Nama</button>
  </div>

  <div className={styles.right}>
    {items.map((item, i) => (
      <TrustCard item={item} i={i} key={i} />
    ))}
  </div>

</div>

</section>
);
}


function TrustCard({ item, index }) {
  const itemRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={`${styles.card} ${
        item.highlight && styles.highlight
      } ${visible && styles.animate}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <h3>{item.number}</h3>
      <h4>{item.title}</h4>
      <p>{item.desc}</p>
    </div>
  );
}

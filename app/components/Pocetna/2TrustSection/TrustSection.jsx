'use client'

import React, { useEffect, useRef, useState } from "react";
import styles from "./trust.module.css";
import Link from "next/link";

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
    <h2>Nova energija u bokserkom treningu</h2>
    <p>
      U <strong>Hisar Bokserkom Klubu</strong>, verujemo da boks nije samo sport – 
      on je način života koji jača telo i duh. Naša tradicija duguje se godinama stvaranja 
      vrhunskih boraca, a naš trening kombinuje ozbiljan rad sa druženjem i pozitivnom atmosferom.
    </p>
    <button className={styles.button}>
      <Link href='/o-nama'>
      Saznaj više o nama
      </Link>
      </button>
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
  const el = itemRef.current;
  if (!el) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(el);
      }
    },
    { threshold: 0.25 }
  );

  observer.observe(el);

  return () => observer.unobserve(el);
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

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
},
{
number: "3",
title: "profesionalna trenera",
desc: "sa takmičarskim iskustvom",
},
{
number: "6",
title: "termina nedeljno",
desc: "za sve nivoe spremnosti",
},
];



return ( <section className={styles.section}> <div className={styles.grid}>
{items.map((item, i) => (
  <TrustCard item={item} i = {i}/>
))} </div> </section>
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
      { threshold: 0.3 }
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
        item.highlight ? styles.highlight : ""
      } ${visible ? styles.animate : ""}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <h3>{item.number}</h3>
      <h4>{item.title}</h4>
      <p>{item.desc}</p>
    </div>
  );
}

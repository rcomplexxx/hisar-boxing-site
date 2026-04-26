'use client'

import React, { useEffect, useRef, useState } from "react";

import styles from './trustcards.module.css'








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

export default function TrustCards() {
  return (
    <>
       {items.map((item, i) => (
      <TrustCard item={item} i={i} key={i} />
    ))}
    </>
  )
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


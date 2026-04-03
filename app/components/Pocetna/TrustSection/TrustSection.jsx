import React from "react";
import styles from "./trust.module.css";

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

export default function TrustSection() {
return ( <section className={styles.section}> <div className={styles.header}> <h2>
Ovde se ne trenira rekreativno. <br /> <span>Ovde se stvara disciplina.</span> </h2> <p>
15 godina rada sa borcima svih nivoa — od početnika do takmičara. </p> </div>

  <div className={styles.grid}>
    {items.map((item, i) => (
      <div
        key={i}
        className={`${styles.card} ${
          item.highlight ? styles.highlight : ""
        }`}
      >
        <h3>{item.number}</h3>
        <h4>{item.title}</h4>
        <p>{item.desc}</p>
      </div>
    ))}
  </div>
</section>

);
}

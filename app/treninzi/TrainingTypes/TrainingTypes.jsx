'use client';


import React from 'react'

import { useEffect } from "react";
import styles from './trainingtypes.module.css'


export default function TrainingTypes() {



     useEffect(() => {
    const blocks = document.querySelectorAll(`.${styles.trainingBlock}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.4 }
    );

    blocks.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  return (
        <div className={styles.trainingTypes}>

          <div className={styles.trainingBlock}>
            <h3>Početnički treninzi</h3>
            <p>
              Učiš osnove boksa: stav, kretanje, udarci i pravilna tehnika.
              Idealno za one koji prvi put ulaze u salu.
            </p>
          </div>

          <div className={styles.trainingBlock}>
            <h3>Rekreativni treninzi</h3>
            <p>
              Kombinacija boksa i kondicije. Savršeno za formu, zdravlje i
              oslobađanje stresa.
            </p>
          </div>

          <div className={styles.trainingBlock}>
            <h3>Takmičarski treninzi</h3>
            <p>
              Intenzivni treninzi za borce koji žele da se takmiče.
              Fokus na sparingu, taktici i maksimalnoj spremi.
            </p>
          </div>

        </div>
  )
}

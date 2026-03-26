import React from "react";
import styles from "./numbercopywriting.module.css";
import NumberItem from "./NumberItem";

export default function NumberCopyWriting() {
  return (
    <section className={styles.section}>
      <div className={styles.column}>
        <NumberItem number="15" text="Godina postojimo" />
        <NumberItem number="9" text="Osvojenih zlatnih medalja" />
      </div>

      <div className={styles.column}>
        <NumberItem number="3" text="Profesionalnih instruktora" />
        <NumberItem number="6" text="Termina nedeljno" />
      </div>
    </section>
  );
}

    
import Link from "next/link";
import styles from "./pageheader.module.css";

export default function PageHeader({ title, subtitle }) {
  return (
<div className={styles.breadcrumb}>
  <a href="/" className={styles.link}>Početna</a>
  <span className={styles.chevron}>›</span>
  <span className={styles.current}>{title}</span>
</div>
  );
}
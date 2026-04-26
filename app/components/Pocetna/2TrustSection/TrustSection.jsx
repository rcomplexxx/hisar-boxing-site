
import TrustCards from './TrustCards/TrustCards'

import styles from "./trust.module.css";
import Link from "next/link";

export default function TrustSection() {







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
    <TrustCards/>
  </div>

</div>

</section>
);
}



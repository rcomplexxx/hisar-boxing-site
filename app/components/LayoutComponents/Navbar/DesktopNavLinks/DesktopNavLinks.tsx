import NavLink from "./NavLink/NavLink";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from './desktopnavlinks.module.css'

export default function DesktopNavLinks({ isOpen }: { isOpen: boolean }) {
  const currentPath = usePathname();

  return (
    <div
      className={`${styles.container} ${isOpen && styles.hiddenWhenOpen}`}
    >
      <NavLink link="/" text="Pocetna" currentPath={currentPath} />
      <NavLink link="/ekipa" text="Ekipa" currentPath={currentPath} />
      <NavLink link="/galerija" text="Galerija" currentPath={currentPath} />
      <NavLink link="/o-nama" text="O nama" currentPath={currentPath} />

      <Link href="/kontakt" className={styles.cta}>
        Učlani se
      </Link>
    </div>
  );
}
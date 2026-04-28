import NavLink from "./NavLink/NavLink";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from './desktopnavlinks.module.css'

export default function DesktopNavLinks() {
  const currentPath = usePathname();

  return (
    <div
      className={`${styles.container}`}
    >
      <NavLink link="/" text="Početna" currentPath={currentPath} />
      <NavLink link="/treninzi" text="Treninzi" currentPath={currentPath} />
      <NavLink link="/galerija" text="Galerija" currentPath={currentPath} />
      <NavLink link="/o-nama" text="Naša priča" currentPath={currentPath} />

      <Link href="/kontakt"   className={styles.cta}>
        Učlani se
      </Link>
    </div>
  );
}
import Link from "next/link";
import styles from './navlink.module.css'




export default function NavLink({link, text, currentPath}: {link: string, text: string, currentPath: string}) {
  return (

      <Link
              href={link}
              className={`${styles.linkStyle} ${currentPath === link && styles.currentLink}`}
            >
              {text}
            </Link>

   
  );
}

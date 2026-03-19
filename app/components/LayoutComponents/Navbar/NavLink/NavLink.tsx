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

"mx-2 mt-2 duration-500 border-b-2 opacity-0 border-red-500 group-hover:opacity-100"
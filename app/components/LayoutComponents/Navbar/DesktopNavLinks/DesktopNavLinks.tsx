import clsx from "clsx";
import NavLink from "./NavLink/NavLink";
import { usePathname } from "next/navigation";

export default function DesktopNavLinks({ isOpen }: { isOpen: boolean }) {

const currentPath = usePathname();

  
    return (
        <div className={
            clsx("hidden md:flex flex-row space-x-6 items-center",
            {
              "md:hidden": isOpen
            })
          }>
            
            <NavLink link="/" text="Pocetna" currentPath={currentPath} />
            <NavLink link="ekipa" text="Ekipa" currentPath={currentPath} />
             <NavLink link="galerija" text="Galerija" currentPath={currentPath} />
            <NavLink link="o-nama" text="O nama" currentPath={currentPath} />

            <button className="mb-2 bg-yellow-700 hover:bg-yellow-500 duration-200 py-2 px-3 font-semibold">
              Učlani se
            </button>
          </div>
    );
}
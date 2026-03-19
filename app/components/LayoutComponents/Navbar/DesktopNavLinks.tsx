import clsx from "clsx";
import NavLink from "./NavLink";

export default function DesktopNavLinks({ isOpen }: { isOpen: boolean }) {
    return (
        <div className={
            clsx("hidden md:flex flex-row space-x-6 items-center",
            {
              "md:hidden": isOpen
            })
          }>
            
            <NavLink link="#hero" text="Pocetna" />
            <NavLink link="#our-classes" text="Nas tim" />
             <NavLink link="#cta" text="Galerija" />
            <NavLink link="#cta" text="O nama" />

            <button className="mb-2 bg-yellow-700 hover:bg-yellow-500 duration-200 py-2 px-3 font-semibold">
              Kontaktirajte nas
            </button>
          </div>
    );
}
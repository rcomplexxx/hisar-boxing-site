"use client";

import { usePathname, useRouter } from "next/navigation";
import {  useGlobalStoreShallow } from "@/app/Contexts/AppContext";
import { useEffect } from "react";
// import GlobalLoader from './GlobalLoader/GlobalLoader.jsx'


export default function AppInitializer() {

  const router = useRouter();
 const pathname = usePathname();
  const {  appDataInitialize, setPathname} = useGlobalStoreShallow((state) =>  ({
    appDataInitialize: state.appDataInitialize, setPathname: state.setPathname
  }));

     

  useEffect(() => {
    appDataInitialize(router);
  }, []);

   useEffect(()=>{
    setPathname(pathname)
  },[pathname])

  return null;
}
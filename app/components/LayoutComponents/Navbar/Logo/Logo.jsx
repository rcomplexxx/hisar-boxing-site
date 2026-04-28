import Link from 'next/link'
import React from 'react'
import styles from './logo.module.css'
import Image from 'next/image'
import { useGlobalStoreShallow } from '../../../../Contexts/AppContext';

export default function Logo({isOpen}) {


   const { router } = useGlobalStoreShallow((state) => ({
        router: state.router
      }));


   const handleLinkExecution = (event, url) => {
    if(isOpen){
          event.preventDefault();
          global.executeNextLink = url;
           router.back();
    }
          
        }


  return (
   <div className={styles.logoDiv}>

            <Link id='logo' href="/" className={styles.logoLink} onClick={(event)=>{handleLinkExecution(event, "/") }}>
         
             
             
              <Image
               height={0}
               width={0}
               sizes="128px"
               src='/Images/logo3.png'
               alt={`logo`}
               className={styles.logoImg}/>

            </Link>
<Link id='logoHeading' href="/" onClick={(event)=>{handleLinkExecution(event, "/") }}>
          <h2 className={styles.heading}>
            Hisar Boxing Club
          </h2></Link>

          </div>
  )
}

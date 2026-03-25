import Link from 'next/link'
import React from 'react'
import styles from './logo.module.css'
import Image from 'next/image'

export default function Logo() {
  return (
   <div className={styles.logoDiv}>

            <Link id='logo' href="/" className={styles.logoLink}>
         
             
             
              <Image
               height={0}
               width={0}
               sizes="128px"
               src='/Images/logo3.png'
               alt={`logo`}
               className={styles.logoImg}/>

            </Link>

          <h1 className={styles.heading}>
            Hisar Boxing Club
          </h1>

          </div>
  )
}



import Image from 'next/image'
import React from 'react'
import styles from './firstsection.module.css'

export default function FirstSection() {
  return (
    <section id="our-classes" className="bg-black text-white w-100 py-12">
      <div className={styles.containerWrapper}>
  <div className={styles.container}>
            
              <Image height={0} width={0} sizes='100vw' src="/Images/main_1.png" className={styles.imgMain1} />
            
            
            <div className="flex flex-col w-100 md:w-3/4 lg:w-1/2 mt-10 text-center md:text-start space-y-10">
              <h1 className="text-2xl uppercase font-black">Boks trening koji donosi rezultate</h1>

              <p>Naši treninzi kombinuju proverene metode profesionalnog boksa sa modernim pristupom kondicionoj pripremi. Fokus je na pravilnoj tehnici, snazi i izdržljivosti. Rezultat su bolja forma, veće samopouzdanje i realan napredak iz treninga u trening.</p>

              <div className="flex flex-row justify-between">
                <div className="flex flex-row space-x-4">
                  <img src="/gloves.png" className="invert w-16" alt="" />
                  <div>
                    <p className="font-black">Boxing</p>
                    <p className="opacity-50">Instructor: José Luis</p>
                  </div>
                </div>

                <div className="flex flex-row space-x-4">
                  <img src="/mma.png" className="invert w-16" alt="" />
                  <div>
                    <p className="font-black">MMA</p>
                    <p className="opacity-50">Instructor: José Luis</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-row justify-between">
                <div className="flex flex-row space-x-4">
                  <img src="/kickboxing.png" className="invert w-16" alt="" />
                  <div>
                    <p className="font-black">Kickboxing</p>
                    <p className="opacity-50">Instructor: José Luis</p>
                  </div>
                </div>

                <div className="flex flex-row space-x-4">
                  <img src="/selfdefense.png" className="invert w-16" alt="" />
                  <div>
                    <p className="font-black">Self-defense</p>
                    <p className="opacity-50">Instructor: José Luis</p>
                  </div>
                </div>
              </div>


            </div>
            
          </div>
        </div>
      </section>
  )
}

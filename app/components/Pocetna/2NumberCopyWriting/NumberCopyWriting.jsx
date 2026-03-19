import React from 'react'
import NumberItem from './NumberItem'

export default function NumberCopyWriting() {
  return (
    <section className="bg-black text-white px-10 py-12 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        
          <div className="flex w-100 md:w-1/2 justify-around mb-6 md:mb-0">
          <NumberItem number="15" text="Godina postojimo" />
          <NumberItem number="9" text="Osvojenih zlatnih medalja" />
          
        </div>
        
        <div className="flex w-100 md:w-1/2 justify-around mb-6 md:mb-0 z-1">
        <NumberItem number="3" text="Profesionalnih instruktora" />
          <NumberItem number="6" text="Termina nedeljno" />
          
        </div>

      
      </section>
  )
}

    
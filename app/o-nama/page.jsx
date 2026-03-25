import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
  
    <>
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <Image
          height={9}
          width={9}
          sizes='100vw'
          src="/Images/main_1.png"
          alt="Boxing gym"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold uppercase mb-4">
            Naša Priča
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Tradicija, disciplina i borbeni duh — temelj našeg kluba.
          </p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Kako je sve počelo</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Naš klub je nastao iz strasti prema boksu i želje da se prenese
          prava vrednost ovog sporta na nove generacije. Godinama gradimo
          borce — ne samo u ringu, već i u životu.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Kroz tradiciju, rad i disciplinu, stvaramo mesto gde svako ima
          priliku da postane jača verzija sebe.
        </p>
      </section>

      {/* VALUES / TIMELINE */}
      <section className="bg-gray-950 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Naše vrednosti
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-red-600">
                Tradicija
              </h3>
              <p className="text-gray-400">
                Poštujemo korene boksa i prenosimo znanje sa generacije na
                generaciju.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-red-600">
                Disciplina
              </h3>
              <p className="text-gray-400">
                Svaki trening je korak ka jačem telu i umu.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-red-600">
                Poštovanje
              </h3>
              <p className="text-gray-400">
                U ringu i van njega — karakter je ono što nas definiše.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE + TEXT SPLIT */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <Image
          height={559}
          width={559}
          sizes='100vw'
          src="/Images/boxer.png"
          alt="Trainer"
          className="rounded-2xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-bold mb-6">Iskustvo koje pravi razliku</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Naši treneri dolaze iz stvarnog sveta boksa — sa iskustvom u
            takmičenjima i godinama rada sa borcima svih nivoa.
          </p>
          <p className="text-gray-400">
            Ovde nećeš dobiti samo trening, već mentorstvo i podršku.
          </p>

    </div>
    </section>

</>  )
}

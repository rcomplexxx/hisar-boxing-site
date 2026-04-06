"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import styles from "./atmosphereslider.module.css";

import "swiper/css";
import "swiper/css/pagination";
import { NextArrow, PrevArrow } from "../../../../public/Images/svgs/svgImages";
import Image from "next/image";

const images = [
  "/Images/gym_atmosphere_1.jpg",
  "/Images/gym_atmosphere_2.jpg",
  "/Images/gym_atmosphere_3.jpg",
  "/Images/gym_atmosphere_4.jpg",
  "/Images/gym_atmosphere_5.jpg",
  "/Images/gym_atmosphere_6.jpg",
];

export default function AtmosphereSlider() {
  const swiperRef = useRef(null);

  const handleSlide = (next) => {
    if (!swiperRef.current) return;

    if (next) {
      swiperRef.current.slideNext();
    } else {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Atmosfera na treningu</h2>

        <div className={styles.swiperWrapper}>
          <Swiper
            className={styles.mySwiper}
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            loopPreventsSliding={false}
            speed={400}                       // general transition speed
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              waitForTransition: false,       // ← Helps with rapid autoplay + clicks
            }}
            preventInteractionOnTransition={false}   // ← THIS ALLOWS CLICKS DURING TRANSITION
            allowTouchMove={false}

             preventClicks={false}
        touchStartPreventDefault={false}

            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className={styles.card}>
                  <Image
                    src={src}
                    alt={`Training ${index + 1}`}
                    className={styles.image}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                    priority={index < 3} // optional: preload first few images
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom arrows */}
          <div
            className={styles.prev}
            onClick={() => handleSlide(false)}
          >
            <PrevArrow />
          </div>
          <div
            className={styles.next}
            onClick={() => handleSlide(true)}
          >
            <NextArrow />
          </div>
        </div>
      </div>
    </section>
  );
}
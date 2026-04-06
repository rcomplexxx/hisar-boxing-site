"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import styles from "./atmosphereslider.module.css";

import "swiper/css";
import "swiper/css/pagination";
import { NextArrow, PrevArrow } from "../../../../public/Images/svgs/svgImages";

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
            autoplay={{ delay: 5000 }}
            allowTouchMove={false}
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
                  <img
                    src={src}
                    alt={`Training ${index + 1}`}
                    className={styles.image}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom arrows with onClick */}
          <div
            className={styles.prev}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <PrevArrow />
          </div>
          <div
            className={styles.next}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <NextArrow />
          </div>
        </div>
      </div>
    </section>
  );
}
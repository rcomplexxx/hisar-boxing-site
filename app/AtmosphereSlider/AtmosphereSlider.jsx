"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import styles from "./atmosphereslider.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/Images/gym_atmosphere_1.jpg",
  "/Images/gym_atmosphere_2.jpg",
  "/Images/gym_atmosphere_3.jpg",
  "/Images/gym_atmosphere_4.jpg",
  "/Images/gym_atmosphere_5.jpg",
  "/Images/gym_atmosphere_6.jpg",
];

export default function AtmosphereSlider() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Atmosfera na treningu</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000 }}
           navigation={{
      prevEl: `.${styles.prev}`,
      nextEl: `.${styles.next}`,
    }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
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
      </div>
    </section>
  );
}
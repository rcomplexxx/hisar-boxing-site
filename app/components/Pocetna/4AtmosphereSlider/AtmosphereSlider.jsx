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


const icons = [
    {
        icon: (
            `<svg
                width="86"
                height="87"
                viewBox="0 0 86 87"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect x="0.5" y="1.125" width="75" height="75" stroke="#1A1918" />
                <rect x="10.5" y="11.125" width="75" height="75" stroke="#1A1918" />
            </svg>`
        ),
    },
    {
        icon: (
            `<svg
                width="91"
                height="84"
                viewBox="0 0 91 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect x="0.5" y="1.125" width="75" height="75" stroke="#1A1918" />
                <path
                    d="M7.36379 83.25L48.5 12L89.6362 83.25H7.36379Z"
                    stroke="#1A1918"
                />
            </svg>`
        ),
    },
    {
        icon: (
            `<svg
                width="88"
                height="91"
                viewBox="0 0 88 91"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect x="0.5" y="1.125" width="75" height="75" stroke="#1A1918" />
                <rect
                    x="8.5"
                    y="11.5"
                    width="79"
                    height="79"
                    rx="39.5"
                    stroke="#1A1918"
                />
            </svg>`
        ),
    },
];




export default function AtmosphereSlider() {

      const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class=${className}>${icons[index].icon}</span>`
        },
    };


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

        <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Atmosfera na treningu</h2>
        <p className={styles.subTitle}>Ovako izgleda atmosfera na našim treninzima.</p>

        </div>

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
        preventClicksPropagation={false}
        touchMoveStopPropagation={false}
        touchStartPreventDefault={false}

        
          agination={pagination}
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
    </section>
  );
}
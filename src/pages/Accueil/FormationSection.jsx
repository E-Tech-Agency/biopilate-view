import React, { useState } from "react";
import FormationCard from "../../components/FormationCard";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../assets/styles/swiper.css";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export default function FormationSection() {
  const formations = [
    {
      title: "Reformer",
      image: require("../../assets/images/reformer.jpg"),
      prices: ["2299 €", "999 €"],
      levels: ["Débutant et intermédiaire", "Avancé"],
    },
    {
      title: "Matwork",
      image: require("../../assets/images/reformer.jpg"),
      prices: ["1599 €", "399 €"],
      levels: ["Débutant et intermédiaire", "Avancé"],
    },
    {
      title: "Chaise",
      image: require("../../assets/images/formation-2.jpg"),
      prices: ["699 €", "299 €"],
      levels: ["Débutant et intermédiaire", "Avancé"],
    },
    {
      title: "Cadillac",
      image: require("../../assets/images/reformer-gyrotonic.jpg"),
      prices: ["999 €", "399 €"],
      levels: ["Débutant et intermédiaire", "Avancé"],
    },
    {
      title: "Barrils",
      image: require("../../assets/images/formation-1.jpg"),
      prices: ["399 €", "299 €"],
      levels: ["Débutant et intermédiaire", "Avancé"],
    },
    {
      title: "Anatomie Fonctionnelle et biomécanique en privée",
      image: require("../../assets/images/formation-5.png"),
      prices: ["1199 €"],
    },
    {
      title: "Reformer",
      image: require("../../assets/images/reformer.jpg"),
      prices: ["1599 €"],
    },
  ];
  return (
    <div>
      <div className="mb-6 flex flex-col justify-center items-center gap-4 md:gap-2">
        <p className="text-blueText text-3xl font-ebGaramond font-bold">
          Formations professionnelles pour devenir instructeur Pilates
        </p>
        <p className=" lg:mx-40 text-center text-xl max-w-[1200px]">
          Explorez les bénéfices de sélectionner notre centre pour votre
          formation en Pilates : Nos programmes de premier ordre sont dirigés
          par des instructeurs chevronnés qui vous guideront tout au long de
          votre parcours.
        </p>
      </div>
      <Swiper
        className="centered-slide-carousel swiper-container relative"
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        spaceBetween={30}
        slideToClickedSlide={true}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-but-next",
          prevEl: ".swiper-but-prev",
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        breakpoints={{
          1920: {
            slidesPerView: 6,
            spaceBetween: 25,
          },
          1600: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1028: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          990: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 5,
          },

          640: {
            slidesPerView: 2,
            spaceBetween: 4,
          },
          550: {
            slidesPerView: 2,
            spaceBetween: 4,
          },
        }}
      >
        <div className="flex flex-nowrap gap-2 overflow-hidden">
          {formations.map((formation, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <FormationCard formation={formation} />
            </SwiperSlide>
          ))}
        </div>

        <div className="slider-controler flex justify-center gap-4 mb-10">
          <div className="cursor-pointer swiper-but-prev slider-arrow hidden sm:flex justify-center items-center bg-bgColor rounded-full w-10 h-10">
            <FaArrowLeftLong className="text-marron" />
          </div>
          <div className="cursor-pointer swiper-but-next slider-arrow hidden sm:flex justify-center items-center bg-bgColor rounded-full w-10 h-10">
            <FaArrowRightLong className="text-marron" />
          </div>
          <div className="swiper-pagination m-auto z-[1] block sm:hidden"></div>
        </div>
      </Swiper>
    </div>
  );
}

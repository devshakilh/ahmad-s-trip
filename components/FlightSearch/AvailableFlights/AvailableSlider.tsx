import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import qr from "../../../assets/packages/QR.png";
import ey from "../../../assets/packages/EY.png";
import airline from "../../../assets/packages/Airline3.png";
import { availableSlider } from "../../../fake_data/availableFlight";

const AvailableSlider = () => {
  const swiperRef = useRef<any>();

  const sliderSettings = {
    440: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };

  return (
    <div
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,.16)" }}
      className="bg-white rounded mb-3 flex items-center h-[50px]"
    >
      <button
        className="bg-white border-r-[1px] border-[#e5e5ea]"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <MdKeyboardArrowLeft className="h-full w-[44px] p-1" />
      </button>

      <Swiper
        // slidesPerView={4}
        breakpoints={sliderSettings}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <div className="">
          {availableSlider?.map((d) => {
            return (
              <div key={d?.id}>
                <SwiperSlide className="border-r-[1px] border-[#e5e5ea] h-full">
                  <div className="flex items-center ml-3">
                    <Image className="w-7 h-auto" src={d?.image} alt="" />
                    <p>
                      {d?.title} <span>{d?.flights} Flights</span>
                    </p>
                  </div>
                </SwiperSlide>
              </div>
            );
          })}
        </div>
      </Swiper>

      <button
        className="bg-white border-l-[1px] border-[#e5e5ea]"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <MdKeyboardArrowRight className="h-full w-[44px] p-1" />
      </button>
    </div>
  );
};

export default AvailableSlider;

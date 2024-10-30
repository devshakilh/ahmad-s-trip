import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import Image from "next/image";

import bannerimg1 from '../../../assets/package-details/1FyDTCge_jl9hLQYDY63XiYrhzzxy8C3.jpg'
import bannerimg2 from '../../../assets/package-details/e-y2hY9dDeq_aLYg3nVXmttqvENWIgLi.jpg'
import bannerimg3 from '../../../assets/package-details/kiOJfwY3sfLoJSSfwZTOX4WsLokOqkDL.jpg'

const DetailPageSlider = () => {
    return (
        <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            className="mySwiper"
        >
            <SwiperSlide><Image src={bannerimg1} alt="img" className="w-full h-[300px] md:h-[600px]" /></SwiperSlide>
            <SwiperSlide><Image src={bannerimg2} alt="img" className="w-full h-[300px] md:h-[600px]" /></SwiperSlide>
            <SwiperSlide><Image src={bannerimg3} alt="img" className="w-full h-[300px] md:h-[600px]" /></SwiperSlide>
        </Swiper>
    );
};

export default DetailPageSlider;
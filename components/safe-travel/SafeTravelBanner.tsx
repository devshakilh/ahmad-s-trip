import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


import { Autoplay, Mousewheel, Pagination } from "swiper";
import Image from "next/image";
import { bannerData } from "./SafeTravelBannerFake";

const SafeTravelBanner = () => {
    return (
        <>
            <Swiper
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Mousewheel, Pagination, Autoplay]}
                className="bg-green-200 h-[350px]"
            >
                {
                    bannerData?.map(item => {
                        return (
                            <SwiperSlide key={item.id} className="w-40 mx-auto">
                                <Image className="object-cover w-full h-full" src={item.img} alt="img" width={1519} height={232} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    );
};

export default SafeTravelBanner;
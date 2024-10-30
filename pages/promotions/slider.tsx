import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React from 'react';
import Image from "next/image";
import styles from "./styles.module.css";
import { PromotionsSlider } from "../../fake_data/promotionsSlider";
const Slider = () => {
    return (
        <div className="lg:px-24 px-4 ">

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{ delay: 1000 }}
                pagination={{
                    clickable: true,
                }}

                modules={[Pagination, Navigation]}
                className={styles.swiper}
            >
                {PromotionsSlider?.map((d) => {
                    return (
                        <div key={d?.id}>
                            <SwiperSlide className={styles.swiper}>

                                <div key={d?.id} >
                                    <div>
                                        <Image
                                            className="h-72 w-72 lg:w-[100%] lg:h-[100%]"
                                            src={d?.image}
                                            alt=""
                                        />


                                    </div>
                                </div>
                            </SwiperSlide>

                        </div>
                    );
                })}
            </Swiper>


        </div >






    );
};

export default Slider;
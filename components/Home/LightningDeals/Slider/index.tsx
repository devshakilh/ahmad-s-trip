import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React from 'react';
import Image from "next/image";
import styles from "./styles.module.css";
import { LightningDeals } from "../../../../fake_data/lightningDeals";
const Slider = () => {
    return (
        <div className=" lg:hidden">

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
                {LightningDeals?.map((d) => {
                    return (
                        <div key={d?.id} className=''>
                            <SwiperSlide className={styles.swiper}>

                                <div key={d?.id} className={`py-12 ${styles.bgImage}`}>
                                    <div>
                                        <Image

                                            className={`h-[300px]  ${styles.child}`}
                                            src={d?.image}
                                            alt=""
                                        />
                                        <h1>{d.tittle}</h1>
                                        <p><span className='text-black font-semibold '>BDT {d.taka}</span>/person</p>
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
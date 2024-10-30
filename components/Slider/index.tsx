import { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import React from 'react';
import Image from "next/image";
import styles from "./styles.module.css";
import img1 from '../../assets/slider/সিকিউরিটি_ডিপোজিটবিহীন_ইন্টারন্যাশনাল_রোমিং_প্যাকেজ1676455650.png'
import img2 from '../../assets/slider/Up_to_70_discount_on_domestic_hotels_&_resorts1678347033.png'
import img3 from '../../assets/slider/sliderEnjoy_BDT_1000_discount_while_purchasing_Domestic_Air_Tickets.png'
import img4 from '../../assets/slider/Enjoy_up_to_11_discount_on_flight_tickets1678346993.png'
import img5 from '../../assets/slider/sliderEnjoy_BDT_2000_discount_while_purchasing_International_Air_Tickets.png'

const Slider = () => {
    return (
        <div className="lg:px-28 px-4 py-28 grid lg:grid-cols-3 grid-cols-1 gap-4">
            <div className="lg:flex">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }} // Set autoplay delay here
                    pagination={{
                        clickable: true,
                    }}
                   
                    modules={[Pagination, Navigation, Autoplay]} // Add Autoplay module here
                    className={styles.swiper}
                >
                    <SwiperSlide className={styles.swiper}>
                        <div className="card w-full shadow-lg text-black text-xl inline-block ">
                            <div className="flex items-center gap-6">
                                <Image
                                    className=" pt-6 rounded-md "
                                    src={img2}
                                    alt="Picture of the author"
                                    width={160}
                                    height={160}
                                />
                                <div>
                                    <h1 className="text-[16px]">gpstar গ্রাহকদের শুধুমাত্র</h1>
                                    <h2 className="hover:text-blue-500">সিকিউরিটি <br /> ডিপোজিটবিহীন <br /> ইন্টারন্যাশনাল <br /> রোমিং প্যাকেজ</h2>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className={styles.swiper}>
                        <div className="card lg:w-full shadow-lg text-black text-xl inline-block ">
                            <div className="flex items-center gap-6">
                                <Image
                                    className=" pt-6 rounded-md "
                                    src={img3}
                                    alt="Picture of the author"
                                    width={160}
                                    height={160}
                                />
                                <div>
                                    <h1 className="text-[16px]">gpstar গ্রাহকদের শুধুমাত্র</h1>
                                    <h2 className="hover:text-blue-500">সিকিউরিটি <br /> ডিপোজিটবিহীন <br /> ইন্টারন্যাশনাল <br /> রোমিং প্যাকেজ</h2>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <SwiperSlide className={styles.swiper}>
                <div className="card lg:w-full shadow-lg text-black text-xl inline-block ">
                    <div className="flex items-center gap-6">
                        <Image
                            className=" pt-6 rounded-md "
                            src={img1}
                            alt="Picture of the author"
                            width={160}
                            height={160}
                        />
                        <div>
                            <h1 className="text-[16px]">gpstar গ্রাহকদের শুধুমাত্র</h1>
                            <h2 className="hover:text-blue-500">সিকিউরিটি <br /> ডিপোজিটবিহীন <br /> ইন্টারন্যাশনাল <br /> রোমিং প্যাকেজ</h2>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }} // Set autoplay delay here
                    pagination={{
                        clickable: true,
                    }}
                  
                    modules={[Pagination, Navigation, Autoplay]} // Add Autoplay module here
                    className={styles.swiper}
                >
                    <SwiperSlide className={styles.swiper}>
                        <div className="card lg:w-full shadow-lg text-black text-xl inline-block ">
                            <div className="flex items-center gap-6">
                                <Image
                                    className=" pt-6 rounded-md "
                                    src={img4}
                                    alt="Picture of the author"
                                    width={160}
                                    height={160}
                                />
                                <div>
                                    <h1 className="text-[16px]">gpstar গ্রাহকদের শুধুমাত্র</h1>
                                    <h2 className="hover:text-blue-500">সিকিউরিটি <br /> ডিপোজিটবিহীন <br /> ইন্টারন্যাশনাল <br /> রোমিং প্যাকেজ</h2>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className={styles.swiper}>
                        <div className="card lg:w-full shadow-lg text-black text-xl inline-block ">
                            <div className="flex items-center gap-6">
                                <Image
                                    className=" pt-6 rounded-md "
                                    src={img5}
                                    alt="Picture of the author"
                                    width={160}
                                    height={160}
                                />
                                <div>
                                    <h1 className="text-[16px]">gpstar গ্রাহকদের শুধুমাত্র</h1>
                                    <h2 className="hover:text-blue-500">সিকিউরিটি <br /> ডিপোজিটবিহীন <br /> ইন্টারন্যাশনাল <br /> রোমিং প্যাকেজ</h2>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;

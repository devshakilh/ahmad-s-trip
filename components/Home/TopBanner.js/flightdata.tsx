import Link from "next/link";
import Image from "next/image";
import styles from "./BlogCompo.module.css";
import { BlogCard, BlogCat } from "../../../fake_data/bannerData";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Flight = () => {
    const [selectedCat, setSelectedCat] = useState<string>("All Topics");
    const [value, onChange] = useState(new Date());


    const filtered = BlogCard.filter(
        (item) => item.category.name === selectedCat
    );
    return (
        <div className={styles.BannerImg}>
            <h1 className='text-white text-center text-3xl font-bold pb-8 pt-16'>{selectedCat.toLocaleUpperCase()}

            </h1>



            <div className="mx-4 lg:mx-28 md:mx-0 pb-12 bg-white rounded-md shadow-xl">

                <section className="mt-10">
                    <div className="">
                        <div className="text-[#3b3c3d]">

                            <div className=" flex justify-between border-b-[1px] border-gray-300 flex-wrap rounded-md ">
                                {BlogCat?.map((catego) => (
                                    <div
                                        className={` lg:w-64 w-16 text-center  rounded-md rounded-r-none py-3 cursor-pointer  ${selectedCat === catego.title &&
                                            "bg-[#ffc107]  text-black font-semibold"
                                            }`}
                                        key={catego.id}
                                        onClick={() => setSelectedCat(catego.title)}
                                    >
                                        <p className=''>{catego.title}</p>
                                    </div>
                                ))}
                            </div>
                            {/* <FlightD /> */}

                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Flight;

import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import Link from "next/link";

import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import styles from "./Promotions.module.css";
import { PromotionsCard, PromotionsCat } from "../../fake_data/promotions";
import App from "./app";
import BottomBanner from "./bottomBanner";
import Slider from "./slider";

const Promotions = () => {
    const [selectedCat, setSelectedCat] = useState<string>("All Topics");
    const [HoverEffect, setHoverEffect] = useState<string>("");

    const filtered = PromotionsCard.filter(
        (item) => item.category.name === selectedCat
    );
    return (
        <div className="mx-4 md:mx-0 pb-16">
            <Slider />

            <div className="main-container">
                <h1 className="text-3xl font-bold text-black pt-6">Promotions</h1>
            </div>
            <section className="mt-10">
                <div className="main-container">
                    <div className="text-[#3b3c3d]">

                        <div className=" flex overflow-x-auto  pb-6">
                            {PromotionsCat?.map((catego) => (
                                <div
                                    className={`bg-white -full  px-4  text-2xl font-bold cursor-pointer ${selectedCat === catego.title &&
                                        " font-semibold border-b-2 border-blue-500 text-blue-500 pb-2"
                                        }`}
                                    key={catego.id}
                                    onClick={() => setSelectedCat(catego.title)}
                                >
                                    <p className="">{catego.title}</p>
                                </div>
                            ))}
                        </div>

                        <div
                            className={`grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6  md:mt-20`}
                        >
                            {/* {
                                BlogCard?.filter((item) => item.category?.map((ii) => console.log(ii)))
                            } */}
                            {/* style={{ boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.12)" }} */}
                            {selectedCat === "All Topics" ? (
                                PromotionsCard.map((item) => (
                                    <div
                                        className={`w-full cursor-pointer flex items-center rounded-sm gap-4 ${styles.shadowStyle}`}
                                        key={item.id}
                                        onMouseEnter={() => setHoverEffect(item.id)}
                                        onMouseLeave={() => setHoverEffect("")}
                                    >
                                        <Image className="lg:w-52 w-24 rounded-md " src={item.img} alt="cardImg" />
                                        <div className="-52">

                                            <h4 className="text-[16px] font-bold ">
                                                {item.title}
                                            </h4>
                                            <p className="text-[14px] text-blue-500 flex items-center gap-2">{item.details} <span><AiOutlineRight /></span></p>
                                            <div className="md:flex justify-between font-semibold text-[#005eb8] mt-6">

                                            </div>
                                        </div>

                                    </div>
                                ))
                            ) : filtered.length === 0 ? (
                                <div className="text-center w-full">
                                    <p className="text-[24px] font-bold">No Data Found</p>
                                </div>
                            ) : (
                                filtered.map((item) => (
                                    <div
                                        className={`w-full cursor-pointer rounded-sm flex gap-4 ${styles.shadowStyle}`}
                                        key={item.id}
                                        onMouseEnter={() => setHoverEffect(item.id)}
                                        onMouseLeave={() => setHoverEffect("")}
                                    >
                                        <Image className="lg:w-52 w-24 rounded-md" src={item.img} alt="cardImg" />
                                        <div className=" 52">

                                            <h4 className="text-[16px] font-bold ">
                                                {item.title}
                                            </h4>
                                            <p className="text-[14px] text-blue-500 flex items-center gap-2">{item.details}  <span><AiOutlineRight /></span></p>

                                        </div>

                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
                <App />
                <BottomBanner />
            </section>

        </div>
    );
};

export default Promotions;

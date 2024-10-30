import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import SafeTravelBanner from './SafeTravelBanner';
import DownloadShare from '../Home/DownloadShare/DownloadShare';
import Image from 'next/image';

import qualityTravelImg from '../../assets/safe-travel/bangladeshs-leading-online-travel-agency-2020.webp'
import leadingTravelImg from '../../assets/safe-travel/bangladeshs-leading-travel-agency-2020.webp'
import { MdLocationOn } from 'react-icons/md';
import { IoMdArrowDropdownCircle } from 'react-icons/io';



const SafeTravel = () => {
    const [selected, setSelected] = useState("");

    return (
        <div>
            <SafeTravelBanner />
            <span>(dev: Arko, Date: 5-4-2023, responsive: Arko)</span>
            <div className="main-container">
                <div className="relative mt-20 mb-5 mx-5 md:mx-0">
                    <div className="flex items-center">
                        <div className="w-[10%] md:w-[5%] h-20 flex justify-center items-center ">
                            <MdLocationOn className='text-[28px]' />
                        </div>
                        <div className="w-[90%] md:w-[95%] h-20 ">
                            <p className="text-[12px] mb-1 text-[#4c4c4c]">Destination</p>
                            {/* <input type="text" className='outline-none ' /> */}
                            <ReactFlagsSelect
                                className={`menu-flags outline-none border-none p-0`}
                                selected={selected}
                                placeholder="Select Country"
                                onSelect={(code) => setSelected(code)}
                            />;
                        </div>
                    </div>
                    <div className="mx-auto hover:shadow-md text-center px-5 py-3 w-full md:w-60 text-[18px] font-bold text-white bg-[#EB611D] cursor-pointer hover:bg-[#fd681d] rounded-sm">Search</div>
                </div>
                <div className="mt-10 mb-16 py-10 px-4 md:px-10 md:p-10 bg-[#FAFAFA] rounded-sm">
                    <h3 className="text-[22px] md:text-[28px] font-extrabold leading-[27px] md:leading-[35px]">Stay safe when you travel</h3>
                    <h3 className="text-[18px] md:text-[24px] leading-[22px] md:leading-[30px] mt-2">The Centers for Disease Control and Prevention (CDC) recommends following these steps to protect yourself and others when you travel:</h3>
                    <ul className="list-disc ml-5 pt-5 text-[20px] leading-[24px] md:leading-[30px]">
                        <li className="pb-2">Maintain a distance of 6 feet (2 meters) between you and others as much as possible.</li>
                        <li className="pb-2">Avoid contact with anyone who is sick</li>
                        <li className="pb-2">Limit contact with frequently touched surfaces, such as handrails, elevator buttons and kiosks. If you must touch these surfaces, use hand sanitizer or wash your hands afterward.</li>
                        <li className="pb-2">Wear a cloth face mask.</li>
                        <li className="pb-2">Cover coughs and sneezes.</li>
                        <li className="pb-2">Clean your hands often. It’s especially important after going to the bathroom, before eating, and after coughing, sneezing or blowing your nose.</li>
                    </ul>
                </div>
            </div>
            <DownloadShare />
            <div className="text-center py-16 bg-[#EFEFF4] px-3 md:px-0">
                <h5 className="text-[20px] leading-[25px]">Leading Online Travel Agency</h5>
                <h2 className="text-[36px] leading-[45px] font-bold">Winning Multiple World Travel Awards</h2>
                <div className="flex my-10 justify-center items-center gap-5">
                    <div className="">
                        <Image src={qualityTravelImg} alt="img" height={305} width={275} />
                    </div>
                    <div className="">
                        <Image src={leadingTravelImg} alt="img" height={305} width={275} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SafeTravel;
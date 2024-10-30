import React from 'react';
import DetailPageSlider from './DetailPageSlider';
import { MdLocationOn } from 'react-icons/md';
import { BsCalendar3Event } from 'react-icons/bs';
import { PackageSidedata } from './PackageDetailFakeData';
import { FaHotel } from 'react-icons/fa';

import tripCoinImg from '../../../assets/package-details/tripCoin.png'
import tripshareimg from '../../../assets/package-details/tripCoinShare.png'
import Image from 'next/image';
import DetailPageAccordion from './DetailPageAccordion';


const DetailPage = () => {
    return (
        <div className='main-container px-3 md:px-inherit'>
            <DetailPageSlider />
            <div className="flex flex-col md:flex-row mt-5 pb-8 gap-6">
                <div className="md:w-[70%]">
                    <h1 className="text-[24px] md:text-[44px] font-extrabold ">Laos: Land of a Million Elephants!</h1>
                    <div className="flex items-center gap-2">
                        <MdLocationOn className='text-[16px] text-[#414042d6]' />
                        <p className="text-[16px] text-[#414042d6] font-extrabold">Vientiane, Laos</p>
                    </div>
                    <div className="flex items-center mt-4 gap-2">
                        <BsCalendar3Event className='text-[16px] text-[#414042d6]' />
                        <p className="text-[16px] text-[#414042d6]">3 days</p>
                    </div>

                    <div className="flex flex-col md:flex-row mt-5 gap-5 bg-[#FAFAFA] px-3 py-1">
                        <div className="md:w-[35%] flex gap-3 justify-between items-center">
                            <div className="w-[50%] gap-2 flex items-center">
                                <div className="">
                                    <Image src={tripCoinImg} alt="img" width={32} height={32} />
                                </div>
                                <div className="">
                                    <span className="text-[12px] leading-[18px]">Win TripCoin (max)</span>
                                    <p className="text-[16px] font-extrabold leading-6">2,100</p>
                                </div>
                            </div>
                            <div className="w-[10%]">OR</div>
                            <div className="w-[40%]">
                                <div className="">
                                    <span className="text-[12px] leading-[18px]">Redeem TripCoin (min)</span>
                                    <p className="text-[16px] font-extrabold leading-6">2,100</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-[65%] flex gap-4 items-center">
                            <div className="">
                                <Image src={tripshareimg} alt="img" width={32} height={32} />
                            </div>
                            <div className="">
                                <span className="text-[12px] leading-[18px]">Share to earn more Trip Coins</span>
                                <p className="text-[16px] font-extrabold leading-6">Get 50 More TripCoin</p>
                                <div className="capitalize text-[#1882ff] border border-[#1882ff] rounded-md w-fit px-3 mt-1 py-1 text-[13px] font-semibold">Share</div>
                            </div>
                        </div>
                    </div>
                    <DetailPageAccordion />
                </div>

                <div className="md:w-[30%]">
                    {
                        PackageSidedata?.map(item => {
                            return (
                                <div key={item.id} className="border mb-4">
                                    <div className="px-4 py-5 ">
                                        <h6 className="text-[20px] font-extrabold leading-[25px] text-[#1882ff] uppercase">{item.title}</h6>
                                        <div className="flex mt-4 justify-between">
                                            <div className="">
                                                <span className="text-[12px] leading-[18px]">Valid From</span>
                                                <p className='flex items-center'>
                                                    <span className="text-[24px] font-extrabold leading-[26px] ">{item.validFrom.date}</span>
                                                    <small className='pl-1'>{item.validFrom.month}</small>
                                                </p>
                                            </div>
                                            <div className="">
                                                <span className="text-[12px] leading-[18px]">Valid Till</span>
                                                <p className='flex items-center'>
                                                    <span className="text-[24px] font-extrabold leading-[26px] ">{item.validTo.date}</span>
                                                    <small className='pl-1'>{item.validTo.month}</small>
                                                </p>
                                            </div>
                                            <div className="">
                                                <span className="text-[12px] leading-[18px]">Departs</span>
                                                <p className='text-[16px] font-semibold leading-[18px]'>{item.departs}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap mt-4 gap-x-10 gap-y-2">
                                            <div className="">
                                                <span className="text-[12px] leading-[18px]">Price Per Person Double:</span>
                                                <p className='font-extrabold text-[12px]'>BDT {item.priceDouble}</p>
                                            </div>
                                            <div className="">
                                                <span className="text-[12px] leading-[18px]">Price Per Person Twin:</span>
                                                <p className='font-extrabold text-[12px]'>BDT {item.priceTwin}</p>
                                            </div>
                                            <div className="">
                                                <span className="text-[12px] leading-[18px]">Price Per Person Triple:</span>
                                                <p className='font-extrabold text-[12px]'>BDT {item.priceTriple}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 mt-4 text-[12px] leading-[18px]">
                                            <FaHotel />
                                            <p className="">{item.hotel}</p>
                                        </div>
                                        <p className="text-[12px] mt-5">Price includes VAT & Tax</p>
                                    </div>
                                    <div className="capitalize w-full py-3 bg-[#0F7AF8] hover:bg-[#126cd3] text-white rounded-[4px] text-[16px] text-center font-semibold">Select offer</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default DetailPage;
import React, { useState } from 'react';
import MultiRangeSliders from '../FlightSearch/AvailableFlights/MultiRangeSliders';
import { optionsFake } from './HotelSearchOptionsFakeData';
import { BsFilter } from 'react-icons/bs';
import RangeSlider from './RangeSlider';
import MultiRange from './MultiRange';

const LeftSideHotelSearch = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    const [filterBtn, setFilterBtn] = useState(false)
    const [distanceRange, setDistanceRange] = useState<any>(15)

    const [minPrice, setMinPrice] = useState<any>(3000)
    const [maxPrice, setMaxPrice] = useState<any>(10000)



    return (
        <div className=''>
            <div className="hidden lg:block">
                <div className="flex pt-2 justify-between px-5">
                    <p className="">filter</p>
                    <div className="uppercase bg-[#1882FF] text-white px-2 rounded-[6px] cursor-pointer">Reset</div>
                </div>
                <div className="mt-4 text-[16px] font-semibold">Price Range</div>
                <hr className='mr-4 mt-2 mb-3' />
                <div className="flex justify-between mb-4">
                    <div className="">
                        <p className="text-[12px] leading-[18px]">Minimum Price</p>
                        <p className="font-sans text-[16px] leading-[24px] font-bold">3000</p>
                    </div>
                    <div className="mr-5">
                        <p className="text-[12px] leading-[18px]">Maximum Price</p>
                        <p className="text-[16px] leading-[24px] font-bold">18001</p>
                    </div>
                </div>
                {/* <MultiRangeSliders min={0} max={18001} /> */}
                <MultiRange setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />

                <div className="mt-4 text-[16px] font-semibold pt-10">Search Hotel</div>
                <hr className='mr-4 mt-2 mb-3' />
                <div className="">
                    <p className="text-[12px] leading-[18px]">Enter hotel name</p>
                    <input type="text" placeholder='Find your Next Adventure ' className="rounded-md p-2 border border-slate-200 outline-[#1882FF] w-60 hidden md:block mt-1" />
                </div>

                <div className="mt-4 text-[16px] font-semibold">Location Range</div>
                <hr className='mr-4 mt-2 mb-3' />
                <div className="flex justify-between items-center mb-4">
                    <p className="text-[12px] leading-[18px]">Distance from the city centre</p>
                    <p className="text-[16px] font-bold">{distanceRange} KM</p>
                </div>
                <RangeSlider setDistanceRange={setDistanceRange} distanceRange={distanceRange} />

                {
                    optionsFake?.map(item => {
                        return (
                            <div key={item.id} className="">
                                <div className="mt-4 text-[16px] font-semibold">{item.title}</div>
                                <hr className='mr-4 mt-2 mb-3' />
                                <div className="">
                                    {
                                        item?.options?.map(subitem => {
                                            return (
                                                <label key={subitem.id} className="flex items-center gap-4 mb-2">
                                                    <input name={subitem?.name} type="checkbox" className="checkbox-sm checkbox-info cursor-pointer" />
                                                    <span className="flex text-[16px] font-normal leading-6 text-[#000000]">{subitem?.body}</span>
                                                </label>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="relative">
                <div onClick={() => setFilterBtn(!filterBtn)} className="flex gap-1 justify-center items-center lg:hidden text-[16px] font-bold ">
                    <BsFilter />
                    Filter
                </div>
                {
                    filterBtn &&
                    <div className="md:hidden mx-3 px-2 py-3 shadow-lg">
                        <div onClick={() => setFilterBtn(false)} className="text-right font-bold">X</div>
                        <div className="flex pt-2 justify-between px-5 ">
                            <p className="">filter</p>
                            <div className="uppercase bg-[#1882FF] text-white px-1 rounded-[6px] cursor-pointer">Reset</div>
                        </div>
                        <div className="mt-4 text-[16px] font-semibold">Price Range</div>
                        <hr className='mr-4 mt-2 mb-3' />
                        <div className="flex justify-between">
                            <div className="">
                                <p className="text-[12px] leading-[18px]">Minimum Price</p>
                                <p className="font-sans text-[16px] leading-[24px] font-bold">3000</p>
                            </div>
                            <div className="mr-5">
                                <p className="text-[12px] leading-[18px]">Maximum Price</p>
                                <p className="text-[16px] leading-[24px] font-bold">18001</p>
                            </div>
                        </div>
                        {/* <MultiRangeSliders min={0} max={18001} /> */}
                        <MultiRange setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />


                        <div className="mt-8 text-[16px] font-semibold">Search Hotel</div>
                        <hr className='mr-4 mt-2 mb-3' />
                        <div className="">
                            <p className="text-[12px] leading-[18px]">Enter hotel name</p>
                            <input type="text" placeholder='Find your Next Adventure ' className="rounded-md p-2 border border-slate-200 outline-[#1882FF] w-60 hidden md:block mt-1" />
                        </div>

                        <div className="mt-4 text-[16px] font-semibold">Location Range</div>
                        <hr className='mr-4 mt-2 mb-3' />
                        <div className="flex justify-between items-center">
                            <p className="text-[12px] leading-[18px]">Distance from the city centre</p>
                            <p className="text-[16px] font-bold">{distanceRange} KM</p>
                        </div>
                        <RangeSlider setDistanceRange={setDistanceRange} distanceRange={distanceRange} />

                        {
                            optionsFake?.map(item => {
                                return (
                                    <div key={item.id} className="">
                                        <div className="mt-4 text-[16px] font-semibold">{item.title}</div>
                                        <hr className='mr-4 mt-2 mb-3' />
                                        <div className="">
                                            {
                                                item?.options?.map(subitem => {
                                                    return (
                                                        <label key={subitem.id} className="flex items-center gap-4 mb-2">
                                                            <input name={subitem?.name} type="checkbox" className="checkbox-sm checkbox-info cursor-pointer" />
                                                            <span className="flex text-[16px] font-normal leading-6 text-[#000000]">{subitem?.body}</span>
                                                        </label>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                }
            </div>
        </div>
    );
};

export default LeftSideHotelSearch;
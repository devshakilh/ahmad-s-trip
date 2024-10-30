import Image from 'next/image';
import React from 'react';
import { AiOutlineSearch, AiFillEuroCircle } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import { BsCalendarWeek } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import styles from './styles.module.css'

import { packagesSearch } from '../../fake_data/package-search';
const Package = () => {

    return (
        <div >
            <div className='lg:flex text-center  justify-between bg-gray-100 py-4 border-b-[1px] lg:px-24 px-4  border-gray-200'>
                <h3 className='text-black text-[16px] font-[450]'>Search by destination city</h3>
                <button className='text-white rounded-md font-bold text- py-2 px-6 mt-2 bg-blue-500 hover:bg-blue-600'>Modify Search</button>
            </div>

            <div className='lg:flex gap-16 pt-8 bg-white lg:px-24 px-4  text-black'>
                <div className='lg:w-3/12'>
                    <div className='flex justify-between '>

                        <p className='text-[18px]'>Filter</p>
                        <button className='rounded-md font-semibold text-white bg-blue-500 hover:bg-blue-600 py-1 px-3'>RESET</button>
                    </div>
                    <h1 className='text-black pt-6 font-semibold text-[16px] border-b-[1px] border-gray-300 pb-2'>Price Range</h1>

                    <div>
                        <p className='text-[14px] py-3 flex justify-between'>  Minimum Price <span>Maximum Price</span></p>
                        <h1 className='text- font-bold flex justify-between'>6,600 <span>73,700</span></h1>

                        {/* <input type="range" min="0" max="100" value="40" className="range range-xs" /> */}

                    </div>
                    <div className='pt-4 hidden lg:block'>
                        <p className='text-xl py-2 border-b-[1px] border-gray-300 pb-2'>Package Search </p>

                        <div className='flex'>
                            <input className='mt-2 border-[1px] border-gray-300 p-2 rounded-md relative bg-white w-full text-gray-400' placeholder='Package Search' type="search" name="" id="" />
                            <span className='absolute ml-60 pt-5 text-blue-500 font-bold text-xl '><AiOutlineSearch /></span>
                        </div>
                    </div>
                    <div className='pt-6'>
                        <p className='text-xl py-2 border-b-[1px] border-gray-300 pb-2'>Filter Durations</p>

                        <div className=' rounded-md bg-white border-[1px] border-gray-400 mt-4' >
                            <select className="select w-full font-semibold max-w-xs bg-white">
                                <option disabled selected>Select Durations</option>
                                <option>3 Day</option>
                                <option>4 Day</option>
                                <option>5 Day</option>

                            </select>
                        </div>
                    </div>
                    <div className='pt-6'>
                        <p className='text-xl py-2 font-semibold border-b-[1px] border-gray-300 pb-2'>Airfare</p>

                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text text-black text-[18px]">With Air Fare</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-red-500 border-[2px] border-gray-400 rounded-full" checked />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text text-black text-[20px]">Without Air Fare</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-blue-500 border-[2px] border-gray-400 rounded-full" checked />
                            </label>
                        </div>

                    </div>

                </div>


                {/* =============================height 75 started ==================== */}

                <div className='lg:w-9/12'>
                    <div>
                        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 pb-12 pt-20 lg:pt-0 '>
                            {(
                                packagesSearch.map((item) => (

                                    <div
                                        key={item.id}
                                        className={`rounded-md  ${styles.bg}`}
                                    // style={{
                                    //     backgroundImage: `{item.image}`,

                                    // }}

                                    >
                                        <div className='flex justify-between text-white p-4 jus'>
                                            <p className='font-bold flex gap-3 items-center'><span><BsCalendarWeek /></span> {item.packages}</p>
                                            <div className='flex gap-5 items-center'>
                                                <h1 className='font-bold flex gap-2 items-center lg:text-xl'><span className='lg:text-2xl'><AiFillEuroCircle /></span>{item.euro}</h1>
                                                <h3 className='font-bold flex gap-2 items-center lg:text-xl'><span className='lg:text-2xl'><IoIosShareAlt /></span>{item.share}</h3>
                                            </div>
                                        </div>
                                        <div className='lg:pt-60 pt-44 p-4 text-white'>
                                            <p className='font-semibold text-[14px]'>Price starts (per person)</p>
                                            <h1 className='font-bold text-2xl py-1'>{item.perPerson}</h1>

                                            <h2 className='text-xl font-semibold'>{item.state}</h2>
                                            <p className='py-1 text-[14px] font-semibold flex gap-1 items-center'><span ><GoLocation /></span> {item.location}</p>
                                        </div>

                                    </div>

                                ))
                            )}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Package;
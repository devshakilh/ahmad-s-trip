import React from 'react';
import styles from './Banner.module.css'
import img1 from '../../../assets/subtract.svg'
import img2 from '../../../assets/flight.svg'
import img3 from '../../../assets/passport.svg'
import Image from 'next/image';
import Flight from './flightdata';

const TopBanner = () => {
    return (
        <div>
            <Flight />

            <div className='lg:px-28 px-4  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between pt-16 pb-12'>
                <div className='flex gap-4 items-center'>
                    <Image
                        className='w-16 h-16'
                        src={img1}
                        alt=''
                    />
                    <div className=''>
                        <h1 className='text-black pb-4 font-bold text-xl'>Can I travel to…?</h1>
                        <button className='text-white rounded-md text-semibold py-2 px-6 bg-blue-500 hover:bg-blue-600'>Explore</button>
                    </div>


                </div>
                <div className='flex py-12 gap-4 items-center'>
                    <Image
                        className='w-16 h-16'
                        src={img2}
                        alt=''
                    />
                    <div className=''>
                        <h1 className='text-black pb-4 font-bold text-xl'>Track your Flight Status
                        </h1>
                        <button className='text-white rounded-lg text-semibold py-2 px-6 bg-blue-500 hover:bg-blue-600'>Track Flight</button>
                    </div>


                </div>
                <div className='flex gap-4 items-center'>
                    <Image
                        className='w-16 h-16'
                        src={img3}
                        alt=''
                    />
                    <div className=''>
                        <h1 className='text-black pb-4 font-bold text-xl'>Track Visa Application Status</h1>
                        <div className='flex gap-4'>
                            <input type="search" name="" className='hover:border-[1px] border-black bg-white' placeholder='ST Ref. No.' id="" />
                            <button className='text-white rounded-md text-semibold py-2 px-6 bg-blue-500 hover:bg-blue-600'>Go</button>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default TopBanner;
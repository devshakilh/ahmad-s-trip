import Image from 'next/image';
import React from 'react';
import img from '../../assets/Promotions/bangladeshs-leading-travel-agency-2020.webp'
const BottomBanner = () => {
    return (
        <div className='pt-16 lg:px-24 px-4 bg-gray-100'>
            <h1 className='text-xl text-center text-black'>Leading Online Travel Agency</h1>
            <h2 className='text-3xl text-center font-bold pt-3 pb-6 text-black'>Winning Multiple World Travel Awards</h2>
            <div className='flex gap-4 justify-center pt-6'>
                <Image className=" rounded-md  w-48 h-48 lg:w-72 lg:h-72" src={img} alt="cardImg" />
                <Image className=" rounded-md  w-48 h-48 lg:w-72 lg:h-72" src={img} alt="cardImg" />
            </div>
        </div>
    );
};

export default BottomBanner;
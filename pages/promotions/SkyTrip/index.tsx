import Image from 'next/image';
import React from 'react';
import { AiOutlineRight } from "react-icons/ai";
import { PromotionsCard, PromotionsCat } from "../../../fake_data/promotions";
import img from '../../../assets/SkyTrip-Travel-card-launch-LAnding-page.png'
import App from '../app';
import BottomBanner from '../bottomBanner';
const SkyTrip = () => {
    return (
        <div className='lg:px-24 px-4'>
            <h1 className='text-4xl font-bold py-3 text-black'>Sharetrip introduces Bangladeshs first ever travel credit card SkyTrip</h1>
            <Image className='pt-4' src={img} alt='banner' />

            <p className='text-black text-[18px] pt-12 pb-16'>Sharetrip is introducing first ever travel credit card along with EBL & Mastercard. Now you can avail this amazing credit card and enjoy <br /> exceptional benefits from Sharetrip. With SkyTrip card you can enjoy additional discounts on the base fare of air tickets.</p>

            <div className='border-2 border-black'>
                <h1 className='text-black font-bold text-3xl pt-8 pb-6 px-4 border-b-[1px] border-gray-300'>Exclusive offers of SkyTrip</h1>
                <div className='p-4'>
                    <li className=''><span className='font-semibold text-xl  text-black'>15% Discount on All Local Airlines</span></li>
                    <li className=' py-2'>  <span className='text-[18px] py-2 text-black'>15% Discount on the Base Fare of all Local Airlines purchased from Sharetrip for Domestic and International routes. (i.e., Biman Bangladesh Airlines, Us- Bangla, Novo Air, and Air Astra).</span></li>
                    <li ><span className='font-semibold text-xl  text-black'>15% Discount on All Local Airlines</span></li>
                    <li className=' py-2'>  <span className='text-[18px] py-2 text-black'>Exclusive Airfare for Dhaka-Kolkata -Dhaka from NOVOAIR .</span></li>
                </div>
            </div>
            <div className='border-2 border-black lg:mx-16 my-24'>
                <div className='p-4 '>
                    <h1 className='text-black font-bold text-3xl pt-8 pb-6 px-4 border-b-[1px] border-gray-300'>Value Added Benefits</h1>

                    <li className=' py-2'>  <span className='text-[18px] py-2 text-black'>Issuance Fee Waiver for the 1st Year for the co-brand MASTERCARD TITANIUM.</span></li>
                    <li className=' py-2'>  <span className='text-[18px] py-2 text-black'>Issuance Fee Waiver for the 1st Year for the co-brand MASTERCARD TITANIUM.</span></li>
                    <li className=' py-2'>  <span className='text-[18px] py-2 text-black'>Issuance Fee Waiver for the 1st Year for the co-brand MASTERCARD TITANIUM.</span></li>
                    <li className=' py-2'>  <span className='text-[18px] py-2 text-black'>Issuance Fee Waiver for the 1st Year for the co-brand MASTERCARD TITANIUM.</span></li>
                    <li className=' py-2'>  <span className='text-[18px] py-2 text-black'>Discounts at Hundreds of Outlets ranging from Lifestyle, Shopping and Dining merchants at home and abroad.</span></li>

                </div>
            </div>
            <div className='border-2 border-black'>
                <h1 className='text-black font-bold text-3xl pt-8 pb-6 px-4 border-b-[1px] border-gray-300'>Card based Benefits</h1>
                <div className='p-4'>
                    <li className=' py-2'>  <span className='text-[18px] py-2 text-black'>Zero Annual Fee if a minimum of 18 transactions are performed in a year</span></li>
                    <li className=' py-2'>  <span className='text-[18px] py-2 text-black'>Free supplementary cards (Up to 02 (Two).</span></li>
                    <li className=' py-2'>  <span className='text-[18px] py-2 text-black'>Issuance Fee Waiver for the 1st Year for the co-brand MASTERCARD TITANIUM.</span></li>
                    <li className=' py-2'>  <span className='text-[18px] py-2 text-black'>Issuance Fee Waiver for the 1st Year for the co-brand MASTERCARD TITANIUM.</span></li>
                    <li className=' py-2'>  <span className='text-[18px] py-2 text-black'>Credit Card payment convenience through EBL ATMs, EBL SKYBANKING app, EBL DROPBOX machines, Mobile Financial Services (MFS</span></li>
                </div>
            </div>
            <div className='pt-36'>
                <h1 className='text-4xl font-semibold text-black'>Offers you may like</h1>

                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 pt-10'>
                    {(
                        PromotionsCard.map((item) => (

                            <div
                                className='w-full cursor-pointer rounded-sm flex gap-4  text-black'
                                key={item.id}

                            >
                                <Image className=" w-24 rounded-md" src={item.img} alt="cardImg" />
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
            <App />
            <BottomBanner />
        </div>
    );
};

export default SkyTrip;
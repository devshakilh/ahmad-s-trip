import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiTwotonePhone } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { MdEmail, MdOutlineError } from 'react-icons/md';
import { useRouter } from 'next/router';
import { FooterFakeData, FooterImgsection } from '../../fake_data/FooterFakeData';

import fbimg from '../../assets/Footer/facebook.svg'
import msgimg from '../../assets/Footer/messenger.svg'
import twitterimg from '../../assets/Footer/twitter.svg'
import instaimg from '../../assets/Footer/instagram.svg'
import youtubeimg from '../../assets/Footer/youtube.svg'
import linkedimg from '../../assets/Footer/linkedin.svg'


import paymentimg from '../../assets/Footer/footer-payment-method.png'

const Footer = () => {

    const router = useRouter()

    return (
      
        <div className='main-container bg-[hsl(240,19%,95%)]'>
           
            <div className="grid grid-cols-1 md:grid-cols-4 pt-20 pb-10 mx-5 md:mx-0 gap-2">
                {
                    FooterFakeData?.map(item => {
                        return (
                            <div key={item.id} className="">
                                <h5 className="text-[20px] font-semibold leading-6 mb-2 md:mb-6">{item.head}</h5>
                                <ul className="">
                                    {
                                        item?.links?.map(subLinks => {
                                            return (
                                                <li onClick={() => router.push(subLinks?.linkName)} key={subLinks.id} className="text-[#4c4c4c] text-[14px] md:pb-2 cursor-pointer hover:text-[#1882ff] hover:translate-x-[2px] transition-all ease-in-out">
                                                    {subLinks?.title}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex flex-col-reverse md:flex-row mx-5 md:mx-0">
                <div className="md:w-2/6 mt-20 md:mt-0">
                    <h5 className="text-[20px] font-semibold font-serif leading-6 mb-6">Address</h5>
                    <div className="">
                        <h6 className="text-[14px] font-extrabold leading-[17.5px] mb-1">Front Office</h6>
                        <p className="text-[14px] leading-[21px]">{`AHMAD'S Trip`} Ltd.</p>
                        <p className="text-[14px] leading-[21px]">Rangs Pearl Tower, 4th Floor,</p>
                        <p className="text-[14px] leading-[21px]">House no. 76, Road 12, Block E,</p>
                        <p className="text-[14px] leading-[21px]">Banani, Dhaka 1213, Bangladesh</p>
                    </div>
                    <div className="mt-5">
                        <h6 className="text-[14px] font-extrabold leading-[17.5px] mb-1">Corporate Office</h6>
                        <p className="text-[14px] leading-[21px]">{`AHMAD'S Trip`} Ltd.</p>
                        <p className="text-[14px] leading-[21px]">JCX Business Tower, 3rd & 6th Floor</p>
                        <p className="text-[14px] leading-[21px]">Plot - 116/A, Block - I, Bashundhara R/A,</p>
                        <p className="text-[14px] leading-[21px]">Dhaka 1229, Bangladesh</p>
                    </div>
                    <div className="mt-8">
                        <div className="flex items-center text-[#1882ff] gap-2 text-[1rem] cursor-pointer">
                            <BsWhatsapp />
                            <Link href="https://api.whatsapp.com/send/?phone=8801728178063&text&type=phone_number&app_absent=0" >Message us on WhatsApp</Link>
                        </div>
                        <div className="flex items-center text-[#1882ff] gap-2 text-[1rem] cursor-pointer">
                            <MdEmail />
                            <Link href="mailto:mdshakil6565a@gmail.com" >mdshakil6565a@gmail.com</Link>
                        </div>
                        <div className="flex items-center text-[#1882ff] gap-2 text-[1rem] cursor-pointer">
                            <AiTwotonePhone />
                            <Link href="tel:+8801819474430" >+8801819474430</Link>
                        </div>
                        <div className="flex items-center text-[#1882ff] gap-2 text-[1rem] cursor-pointer">
                            <MdOutlineError />
                            <p className="">Office Hour : 9 AM - 10 PM</p>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-3">
                        <Link className='hover:-translate-y-1 transition-all ease-in-out' href=""><Image src={fbimg} alt="img" height={22} /></Link>
                        <Link className='hover:-translate-y-1 transition-all ease-in-out' href=""><Image src={msgimg} alt="img" height={22} /></Link>
                        <Link className='hover:-translate-y-1 transition-all ease-in-out' href=""><Image src={twitterimg} alt="img" height={22} /></Link>
                        <Link className='hover:-translate-y-1 transition-all ease-in-out' href=""><Image src={instaimg} alt="img" height={22} /></Link>
                        <Link className='hover:-translate-y-1 transition-all ease-in-out' href=""><Image src={youtubeimg} alt="img" height={22} /></Link>
                        <Link className='hover:-translate-y-1 transition-all ease-in-out' href=""><Image src={linkedimg} alt="img" height={22} /></Link>
                    </div>
                </div>
                <div className="md:w-4/6">
                    <div className="flex flex-wrap gap-10">
                        {
                            FooterImgsection?.map(item => {
                                return (
                                    <div key={item.id} className="">
                                        <h5 className="text-[20px] font-semibold font-serif leading-6 mb-6">{item.head}</h5>
                                        <div className="flex gap-3">
                                            {
                                                item?.imgList?.map(subitem => {
                                                    return (
                                                        <div key={subitem.id} className="">
                                                            <Image src={subitem?.img} width={94} height={50} alt="img" />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className="mt-5">
                        <h5 className="text-[20px] font-semibold font-serif leading-6 mb-6">We accept</h5>
                        <Image src={paymentimg} alt="img" height={65} width={755} />
                    </div>
                </div>
            </div>
            <div className="text-[14px] leading-[21px] text-center py-20 mx-5 md:mx-0">
                <p className="">Copyright @ 2023. {`AHMAD'S Trip`}. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
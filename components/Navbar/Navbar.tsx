import React, { useEffect, useRef, useState } from 'react';
import { NavFakeData } from '../../fake_data/NavbarFakeData';
import Image from 'next/image';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { ImCross } from 'react-icons/im';
import { GiHamburgerMenu } from 'react-icons/gi';
import Navlogo from '../../assets/Navbar/full-logo.png'
import Spinimg from '../../assets/Navbar/spinner.svg'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

const Navbar: FC = () => {
    const [activeBtn, setActiveBtn] = useState("")
    const [hambugerActive, setHamburgerActive] = useState(false)
    const [UserActive, setUserActive] = useState(false)

    const router = useRouter()

    const clickResourceRef = useRef<any>();
    const clickUserRef = useRef<any>();


    const handleClickOutside = (e: any) => {

        if (!clickUserRef?.current?.contains(e.target)) {
            setUserActive(false);
        } else {
            setUserActive(true);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true)
    }, [])

    return (
     
        <div className='main-container flex justify-between sticky z-10 top-0 h-[68px] items-center bg-white'
            style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 4px 4px" }}
        >
            <div className="">
                <Link href="/" className='text-3xl ml-3 font-bold text-black'>{`AHMAD'S Trip`}</Link>
                {/* <Image onClick={() => router.push("/")} className='hidden md:block' src={Navlogo} width={178} height={57} alt="logo" />
                <Image onClick={() => router.push("/")} className='md:hidden ml-2' src={Navlogo} width={110} height={35} alt="logo" /> */}
            </div>
            <div className="hidden md:block pr-2">
                <ul className="flex gap-2 lg:gap-6">
                    {
                        NavFakeData?.map(navitem => {
                            return (
                                <li key={navitem?.id}
                                    className={`text-[12px] lg:text-[16px] text-[#000] hover:text-[#1882ff] cursor-pointer relative ${activeBtn === navitem?.id && "text-[#1882ff]"}`}
                                    onClick={() => { activeBtn === navitem?.id ? setActiveBtn("") : setActiveBtn(navitem.id); navitem?.linkname ? router.push(navitem?.linkname) : "" }}>
                                    {navitem?.title}
                                    {
                                        navitem?.sublink && <MdKeyboardArrowDown className='inline-block' />
                                    }
                                    {
                                        activeBtn === navitem?.id &&
                                        <div className={`absolute top-[30px] w-48 z-20 left-[-5px] bg-white text-[1rem] text-[#1882ff] rounded-[4px] ${!navitem?.sublink && "hidden"}`}
                                            style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px" }}
                                        >
                                            {
                                                navitem?.sublink?.map(subitem => {
                                                    return (
                                                        <div onClick={() => subitem?.linkname ? router.push(subitem?.linkname) : ""} key={subitem.id} className="hover:bg-slate-100  px-3 py-2 leading-[24px]">
                                                            {subitem.title}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="hidden md:flex items-center gap-5 cursor-pointer">
                <div className="flex gap-2 hover:bg-[#e8f3ff] px-2 py-[6px] rounded-md">
                    <Image src={Spinimg} alt="spin-img" />
                    <Link href="/spin" className='text-[#1882ff] capitalize text-[0.875rem] font-semibold' >Spin To Win</Link>
                </div>
                <div ref={clickUserRef} className="relative">
                    <div className="flex items-center gap-2 bg-[#1882ff]  rounded-l-3xl rounded-r-3xl">
                        <div className="flex justify-center items-center m-[3px] w-10 h-10 bg-[#0d65c9] rounded-full">
                            <FaUser className='text-white text-[18px]' />
                        </div>
                        <HiBars3BottomRight className='text-white text-[32px] font-bolder mr-3' />
                    </div>
                    {UserActive && <div className="absolute w-40 bg-white z-20 rounded-[6px]"
                        style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px" }}>
                        <Link href="/login" className="hover:bg-slate-100 block px-3 py-2 leading-[24px]">Log in</Link>
                        <Link href="/signup" className="hover:bg-slate-100 block px-3 py-2 leading-[24px]">Create An Account</Link>
                    </div>}
                </div>
            </div>

            {/* ====== mobile Navbar ======= */}
            {/* <div className="sticky top-0"> */}
                <div className="relative md:hidden px-4 md:px-0">
                    <div onClick={() => { setHamburgerActive(!hambugerActive); setActiveBtn("") }} className="md:hidden">
                        {
                            hambugerActive ?
                                <ImCross className='text-[24px]' />
                                :
                                <GiHamburgerMenu className='text-[32px]' />
                        }
                    </div>
                    <div className={`absolute w-[100vw] z-10 ${hambugerActive ? "bg-black block" : "hidden"}  h-[120vh] top-[46.5px] right-[0px] opacity-50 transition-all ease-in`}>
                    </div>
                    <div className={`absolute w-[60vw] z-20 h-[100vh] top-[47px] bg-white ${hambugerActive ? " right-[0px] transition-all ease-in-out" : "right-[800%] transition-all ease-in-out"}`}>
                        <ul className="flex flex-col gap-5 px-8 pt-6">
                            {
                                NavFakeData?.map(navitem => {
                                    return (
                                        <li key={navitem?.id} className={`text-[1rem] text-[#000] hover:text-[#1882ff] cursor-pointer relative ${activeBtn === navitem?.id && "text-[#1882ff]"}`} onClick={() => { activeBtn === navitem?.id ? setActiveBtn("") : setActiveBtn(navitem.id); }}>
                                           <Link href={navitem.linkname || ''}> {navitem?.title}</Link>
                                            {
                                                navitem?.sublink && <MdKeyboardArrowDown className='inline-block' />
                                            }
                                            {
                                                activeBtn === navitem?.id &&
                                                <div className={`absolute top-[30px] w-48 z-20 left-[-5px] bg-white text-[1rem] text-[#1882ff] rounded-[4px] ${!navitem?.sublink && "hidden"}`}
                                                    style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px" }}
                                                >
                                                    {
                                                        navitem?.sublink?.map(subitem => {
                                                            return (
                                                                <div key={subitem.id} className="hover:bg-slate-100  px-3 py-2 leading-[24px]">
                                                                    {subitem.title}
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            }
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <hr className='my-10' />

                        <div className="px-8">
                            <Link href="/login" className="pb-[20px] block">Sign In</Link>
                            <Link href="/signup" className=" block">Create An Account</Link>
                        </div>
                        <div className="flex gap-2 border border-[#1882ff] px-3 py-[6px] w-3/5 ml-8 mt-[28px]">
                            <Image src={Spinimg} alt="spin-img" />
                            <Link href="/spin" className='text-[#1882ff] capitalize text-[0.875rem] font-semibold' >Spin To Win</Link>
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    );
};

export default Navbar;

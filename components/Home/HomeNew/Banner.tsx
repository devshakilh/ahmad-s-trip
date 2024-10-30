import React, { useState, useEffect, useRef } from 'react';
import styles from './Banner.module.css'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Image from 'next/image';


import flightImg from '../../../assets/Home-banner/flight-mono.svg'
import hotelImg from '../../../assets/Home-banner/hotel-mono.svg'
import holidayImg from '../../../assets/Home-banner/holiday-mono.svg'
import visaImg from '../../../assets/Home-banner/visa-mono.svg'
import FlightSearch from './Flight';
import HotelSearchComponent from './Hotel';

const BannerHome = () => {
    // navbar 
    const [activeBtn, setActiveBtn] = useState("flight")
    const [subActivebtn, setSubActiveBtn] = useState("oneWay")

    // userefs 
    const [focusStyleHotel, setFocusStyleHotel] = useState(false)
    const [focusFlyTo, setFocusFlyTo] = useState(false)

    const [FocusfirstDate, setFocusFirstDate] = useState(false)
    const [focsSecond, setFocusSecond] = useState(false)

    

    // date picker 
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    // other 
    const [roomCount, setRoomCount] = useState(3)
    const [travellerCount, setTravellerCount] = useState(3)


    const clickHotelRef = useRef<any>();
    const clickFlyToRef = useRef<any>();
    const clickfirstRef = useRef<any>();
    const clicksecondRef = useRef<any>();



    const handleClickOutside = (e: any) => {
        if (!clickHotelRef?.current?.contains(e.target)) {
            setFocusStyleHotel(false);
        }else {
            setFocusStyleHotel(true);
        }

        if (!clickFlyToRef?.current?.contains(e.target)) {
            setFocusFlyTo(false);
        }else {
            setFocusFlyTo(true);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true)
    }, [])
    return (
       
        <div>
            
            <div className={`${styles.bgStyle} h-[800px] md:h-[700px]  mb-10`}>
                <div className="pt-10 md:pt-40">
             
                    <h1 className="text-[24px] md:text-[28px] font-extrabold text-center leading-[35px]  text-[#f8f9fa] mx-3 pb-4 md:mx-0">Welcome to {`AHMAD'S Trip`}! Find Flights, Hotels & Tour Packages</h1>
                    <div className="w-[90%] md:w-[75%] mx-auto bg-[#F3F9FB] opacity-95 mt-5 rounded-[4px]">
                        <div className="border-b flex">
                            <div onClick={() => setActiveBtn("flight")} className={`w-[33.33%] md:w-[25%] py-3 font-semibold md:font-bold  ${activeBtn === "flight" ? "bg-[#FFD321] rounded-l-[4px] text-black" : "text-[#4c4c4c]"}`}>
                                <div className="flex justify-center md:gap-8 w-full">
                                    <Image src={flightImg} alt="ff" />
                                    <p className="">Flight</p>
                                </div>
                            </div>
                            <div onClick={() => setActiveBtn("hotel")} className={`w-[33.33%] md:w-[25%] py-3 font-semibold md:font-bold ${activeBtn === "hotel" ? "bg-[#FFD321] text-black" : "text-[#4c4c4c]"}`}>
                                <div className="flex justify-center md:gap-8 w-full">
                                    <Image src={hotelImg} alt="ff" />
                                    <p className="">Hotel</p>
                                </div>
                            </div>
                            <div onClick={() => setActiveBtn("holiday")} className={`w-[33.33%] md:w-[25%] py-3 font-semibold md:font-bold ${activeBtn === "holiday" ? "bg-[#FFD321] text-black" : "text-[#4c4c4c]"}`}>
                                <div className="flex justify-center md:gap-8 w-full">
                                    <Image src={holidayImg} alt="ff" />
                                    <p className="">Holiday</p>
                                </div>
                            </div>
                            <div onClick={() => setActiveBtn("visa")} className={`hidden md:block md:w-[25%] py-3 font-semibold md:font-bold ${activeBtn === "visa" ? "bg-[#FFD321] rounded-r-[4px] text-black" : "text-[#4c4c4c]"}`}>
                                <div className="flex justify-center gap-8 w-full">
                                    <Image src={visaImg} alt="ff" />
                                    <p className="">Visa</p>
                                </div>
                            </div>
                        </div>
                        {/* ======== body ======= */}
                        <div className={`${styles.bodyStyle}`}>
                            {
                                activeBtn === 'flight' &&

                                
                             <div className='py5'>
                                <FlightSearch/>
                                   <div className="py-5 px-5 hidden">
                                     
                                     <div className="flex md:w-2/5 mx-auto shadow-xl rounded-l-full rounded-r-full">
                                         <div onClick={() => setSubActiveBtn("oneWay")} className={`text-center text-[#4c4c4c] py-2 w-[33.33%] rounded-l-full ${subActivebtn === "oneWay" && "bg-[#1882FF] text-white"} `}>One Way</div>
                                         <div onClick={() => setSubActiveBtn("roundTrip")} className={`text-center text-[#4c4c4c] py-2 w-[33.33%] ${subActivebtn === "roundTrip" && "bg-[#1882FF] text-white"} `}>Round Trip</div>
                                         <div onClick={() => setSubActiveBtn("multiCity")} className={`text-center text-[#4c4c4c] py-2 w-[33.33%] rounded-r-full ${subActivebtn === "multiCity" && "bg-[#1882FF] text-white"} `}>Multi-City</div>
                                     </div>
 
                                     {
                                         subActivebtn === "oneWay" &&
                                         <div>
                                             <div className="grid grid-cols-1 md:grid-cols-4 gap-3 py-5 px-5">
                                                 <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-2">
                                                     <div className={`px-6 py-3 bg-white border ${focusStyleHotel && " border-sky-400"}`}>
                                                         <span className='text-[0.75rem] text-[#4c4c4c]'>Flying From</span>
                                                         <br />
                                                         <input ref={clickHotelRef} onClick={() => setFocusStyleHotel(true)} type="text" placeholder='Search Hotels' value="Dhaka" className='border- outline-none' />
                                                         <br />
                                                         <span className="text-[0.75rem] text-[#4c4c4c]"><strong>DAC, Bangladesh, Hazrat Shahjala....</strong></span>
                                                     </div>
                                                     <div className={`px-6 py-3 bg-white border ${focusFlyTo && " border-sky-400"}`}>
                                                         <span className='text-[0.75rem] text-[#4c4c4c]'>Flying To</span>
                                                         <br />
                                                         <input ref={clickFlyToRef} onClick={() => setFocusFlyTo(true)} type="text" placeholder='Search Hotels' value="Dhaka" className='border-none outline-none' />
                                                         <br />
                                                         <span className="text-[0.75rem] text-[#4c4c4c]"><strong>CXB, Bangladesh, Coxs Bazar Airt...</strong></span>
                                                     </div>
                                                 </div>
 
                                                 <div className="flex bg-white">
                                                     <div className=" px-4 py-3 border">
                                                         <span className='text-[0.75rem] text-[#4c4c4c]'>Depart on</span>
                                                         <br />
                                                         <DatePicker
                                                             className='w-full text-[18px] font-bold border-none outline-none'
                                                             selected={startDate}
                                                             onChange={(date: any) => setStartDate(date)}
                                                             selectsStart
                                                             startDate={startDate}
                                                             endDate={endDate}
                                                             dateFormat="MMMM d"
                                                         />
 
                                                         <span className="text-[0.75rem] text-[#4c4c4c]"><strong>2023,</strong> saturday</span>
                                                     </div>
                                                 </div>
                                                 <div className="px-6 py-3 bg-white">
                                                     <span className='text-[0.75rem] text-[#4c4c4c] cursor-pointer'>Passengers & Cabin Class</span>
                                                     <br />
                                                     <div className="text-[18px] font-bold">1 Person</div>
                                                     <span className="text-[0.75rem] text-[#4c4c4c]"><strong>Economy Class</strong></span>
                                                 </div>
                                             </div>
                                             <div className="mx-auto hover:shadow-md text-center px-5 py-3 w-60 text-[18px] font-bold text-white bg-[#EB611D] cursor-pointer hover:bg-[#fd681d] rounded-sm">Search Flights</div>
                                         </div>
                                     }
                                     {
                                         subActivebtn === "roundTrip" &&
                                         <div className="">
                                             <div className="grid grid-cols-1 md:grid-cols-4 gap-3 py-5 px-5">
                                                 <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-2">
                                                     <div className={`px-6 py-3 bg-white border ${focusStyleHotel && " border-sky-400"}`}>
                                                         <span className='text-[0.75rem] text-[#4c4c4c]'>Flying From</span>
                                                         <br />
                                                         <input ref={clickHotelRef} onClick={() => setFocusStyleHotel(true)} type="text" placeholder='Search Hotels' value="Dhaka" className='border- outline-none' />
                                                         <br />
                                                         <span className="text-[0.75rem] text-[#4c4c4c]"><strong>DAC, Bangladesh, Hazrat Shahjala....</strong></span>
                                                     </div>
                                                     <div className={`px-6 py-3 bg-white border ${focusFlyTo && " border-sky-400"}`}>
                                                         <span className='text-[0.75rem] text-[#4c4c4c]'>Flying To</span>
                                                         <br />
                                                         <input ref={clickFlyToRef} onClick={() => setFocusFlyTo(true)} type="text" placeholder='Search Hotels' value="Dhaka" className='border- outline-none' />
                                                         <br />
                                                         <span className="text-[0.75rem] text-[#4c4c4c]"><strong>CXB, Bangladesh, Coxs Bazar Airt...</strong></span>
                                                     </div>
                                                 </div>
 
                                                 <div className="flex bg-white">
                                                     <div className=" px-4 py-3 border w-[50%]">
                                                         <span className='text-[0.75rem] text-[#4c4c4c]'>Depart on</span>
                                                         <br />
                                                         <DatePicker
                                                             className='w-full text-[18px] font-bold border-none outline-none'
                                                             selected={startDate}
                                                             onChange={(date: any) => setStartDate(date)}
                                                             selectsStart
                                                             startDate={startDate}
                                                             endDate={endDate}
                                                             dateFormat="MMMM d"
                                                         />
 
                                                         <span className="text-[0.75rem] text-[#4c4c4c]"><strong>2023,</strong> saturday</span>
                                                     </div>
                                                     <div className="px-4 py-3 border w-[50%]">
                                                         <span className='text-[0.75rem] text-[#4c4c4c]'>Return on</span>
                                                         <br />
                                                         <DatePicker
                                                             className='w-full text-[18px] font-bold border-none outline-none'
                                                             selected={endDate}
                                                             onChange={(date: any) => setEndDate(date)}
                                                             selectsEnd
                                                             startDate={startDate}
                                                             endDate={endDate}
                                                             minDate={startDate}
                                                             dateFormat="MMMM d"
                                                         />
                                                         <span className="text-[0.75rem] text-[#4c4c4c]"><strong>2023,</strong> Friday</span>
                                                     </div>
                                                 </div>
                                                 <div className="px-6 py-3 bg-white">
                                                     <span className='text-[0.75rem] text-[#4c4c4c] cursor-pointer'>Passengers & Cabin Class</span>
                                                     <br />
                                                     <div className="text-[18px] font-bold">1 Person</div>
                                                     <span className="text-[0.75rem] text-[#4c4c4c]"><strong>Economy Class</strong></span>
                                                 </div>
                                             </div>
                                             <div className="mx-auto hover:shadow-md text-center px-5 py-3 w-60 text-[18px] font-bold text-white bg-[#EB611D] cursor-pointer hover:bg-[#fd681d] rounded-sm">Search Flights</div>
                                         </div>
                                     }
                                     {
                                         subActivebtn === "multiCity" &&
                                         <div className="">
                                             <div className="grid grid-cols-1 md:grid-cols-4 gap-3 pt-5 pb-3 px-5">
                                                 <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-2">
                                                     <div className={`px-6 py-3 bg-white border ${focusStyleHotel && " border-sky-400"}`}>
                                                         <span className='text-[0.75rem] text-[#4c4c4c]'>Flying From</span>
                                                         <br />
                                                         <input ref={clickHotelRef} onClick={() => setFocusStyleHotel(true)} type="text" placeholder='Search Hotels' value="Dhaka" className='border- outline-none' />
                                                         <br />
                                                         <span className="text-[0.75rem] text-[#4c4c4c]"><strong>DAC, Bangladesh, Hazrat Shahjala....</strong></span>
                                                     </div>
                                                     <div className={`px-6 py-3 bg-white border ${focusFlyTo && " border-sky-400"}`}>
                                                         <span className='text-[0.75rem] text-[#4c4c4c]'>Flying To</span>
                                                         <br />
                                                         <input ref={clickFlyToRef} onClick={() => setFocusFlyTo(true)} type="text" placeholder='Search Hotels' value="Dhaka" className='border- outline-none' />
                                                         <br />
                                                         <span className="text-[0.75rem] text-[#4c4c4c]"><strong>CXB, Bangladesh, Coxs Bazar Airt...</strong></span>
                                                     </div>
                                                 </div>
 
                                                 <div className="flex bg-white">
                                                     <div className=" px-4 py-3 border w-[50%]">
                                                         <span className='text-[0.75rem] text-[#4c4c4c]'>Depart on</span>
                                                         <br />
                                                         <DatePicker
                                                             className='w-full text-[18px] font-bold outline-none'
                                                             selected={startDate}
                                                             onChange={(date: any) => setStartDate(date)}
                                                             selectsStart
                                                             startDate={startDate}
                                                             endDate={endDate}
                                                             dateFormat="MMMM d"
                                                         />
 
                                                         <span className="text-[0.75rem] text-[#4c4c4c]"><strong>2023,</strong> saturday</span>
                                                     </div>
                                                     <div className="px-4 py-3 border w-[50%]">
                                                         <span className='text-[0.75rem] text-[#4c4c4c]'>Return on</span>
                                                         <br />
                                                         <DatePicker
                                                             className='w-full text-[18px] font-bold outline-none'
                                                             selected={endDate}
                                                             onChange={(date: any) => setEndDate(date)}
                                                             selectsEnd
                                                             startDate={startDate}
                                                             endDate={endDate}
                                                             minDate={startDate}
                                                             dateFormat="MMMM d"
                                                         />
                                                         <span className="text-[0.75rem] text-[#4c4c4c]"><strong>2023,</strong> Friday</span>
                                                     </div>
                                                 </div>
                                                 <div className="px-6 py-3 bg-white">
                                                     <span className='text-[0.75rem] text-[#4c4c4c] cursor-pointer'>Passengers & Cabin Class</span>
                                                     <br />
                                                     <div className="text-[18px] font-bold">1 Person</div>
                                                     <span className="text-[0.75rem] text-[#4c4c4c]"><strong>Economy Class</strong></span>
                                                 </div>
                                             </div>
                                             <div className="grid grid-cols-1 md:grid-cols-4 gap-3 px-5">
                                                 <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-2">
                                                     <div className={`px-6 py-3 bg-white border ${focusStyleHotel && " border-sky-400"}`}>
                                                         <span className='text-[0.75rem] text-[#4c4c4c]'>Flying From</span>
                                                         <br />
                                                         <input ref={clickHotelRef} onClick={() => setFocusStyleHotel(true)} type="text" placeholder='Search Hotels' value="Dhaka" className='border- outline-none bg-transparent' />
                                                         <br />
                                                         <span className="text-[0.75rem] text-[#4c4c4c]"><strong>DAC, Bangladesh, Hazrat Shahjala....</strong></span>
                                                     </div>
                                                     <div className={`px-6 py-3 bg-white border ${focusStyleHotel && " border-sky-400"}`}>
                                                         <span className='text-[0.75rem] text-[#4c4c4c]'>Flying To</span>
                                                         <br />
                                                         <input ref={clickHotelRef} onClick={() => setFocusStyleHotel(true)} type="text" placeholder='Search Hotels' value="Dhaka" className='border- outline-none' />
                                                         <br />
                                                         <span className="text-[0.75rem] text-[#4c4c4c]"><strong>CXB, Bangladesh, Coxs Bazar Airt...</strong></span>
                                                     </div>
                                                 </div>
 
                                                 <div className="flex bg-white">
                                                     <div className=" px-4 py-3 border w-[50%]">
                                                         <span className='text-[0.75rem] text-[#4c4c4c]'>Depart on</span>
                                                         <br />
                                                         <DatePicker
                                                             className='w-full text-[18px] font-bold outline-none'
                                                             selected={startDate}
                                                             onChange={(date: any) => setStartDate(date)}
                                                             selectsStart
                                                             startDate={startDate}
                                                             endDate={endDate}
                                                             dateFormat="MMMM d"
                                                         />
 
                                                         <span className="text-[0.75rem] text-[#4c4c4c]"><strong>2023,</strong> saturday</span>
                                                     </div>
                                                     <div className="px-4 py-3 border w-[50%]">
                                                         <span className='text-[0.75rem] text-[#4c4c4c]'>Return on</span>
                                                         <br />
                                                         <DatePicker
                                                             className='w-full text-[18px] font-bold outline-none'
                                                             selected={endDate}
                                                             onChange={(date: any) => setEndDate(date)}
                                                             selectsEnd
                                                             startDate={startDate}
                                                             endDate={endDate}
                                                             minDate={startDate}
                                                             dateFormat="MMMM d"
                                                         />
                                                         <span className="text-[0.75rem] text-[#4c4c4c]"><strong>2023,</strong> Friday</span>
                                                     </div>
                                                 </div>
 
                                             </div>
                                             <div className="mx-auto mt-5 hover:shadow-md text-center px-5 py-3 w-60 text-[18px] font-bold text-white bg-[#EB611D] cursor-pointer hover:bg-[#fd681d] rounded-sm">Search Flights</div>
                                         </div>
                                     }
 
                                 </div>
                             </div>
                            }




                            {
                                activeBtn === "hotel" &&
                              
                              <div>
                                    <HotelSearchComponent/>
                                  <div className='pb-10 hidden'>
                                  
                                    <div className="grid grid-cols-1  md:grid-cols-3 gap-3 py-10 px-5">
                                        <div className={`px-6 py-3 bg-white border ${focusStyleHotel && " border-sky-400"}`}>
                                            <span className='text-[0.75rem] text-[#4c4c4c]'>Enter City or Property</span>
                                            <br />
                                            <input ref={clickHotelRef} onClick={() => setFocusStyleHotel(true)} type="text" placeholder='Search Hotels' className='border- outline-none' />
                                            <br />
                                            <span className="text-[0.75rem] text-[#4c4c4c]"><strong>{"Cox's Bazar,"}</strong> Bangladesh</span>
                                        </div>
                                        <div className="flex bg-white">
                                            <div className=" px-4 py-3 border w-[50%]">
                                                <span className='text-[0.75rem] text-[#4c4c4c]'>Check-in Date</span>
                                                <br />
                                                <DatePicker
                                                    className='w-full text-[18px] font-bold outline-none'
                                                    selected={startDate}
                                                    onChange={(date: any) => setStartDate(date)}
                                                    selectsStart
                                                    startDate={startDate}
                                                    endDate={endDate}
                                                    dateFormat="MMMM d, yyyy"
                                                />

                                                <span className="text-[0.75rem] text-[#4c4c4c]"><strong>2023,</strong> saturday</span>
                                            </div>
                                            <div className="px-4 py-3 border w-[50%]">
                                                <span className='text-[0.75rem] text-[#4c4c4c]'>Check-out Date</span>
                                                <br />
                                                <DatePicker
                                                    className='w-full text-[18px] font-bold outline-none'
                                                    selected={endDate}
                                                    onChange={(date: any) => setEndDate(date)}
                                                    selectsEnd
                                                    startDate={startDate}
                                                    endDate={endDate}
                                                    minDate={startDate}
                                                    dateFormat="MMMM d, yyyy"
                                                />
                                                <span className="text-[0.75rem] text-[#4c4c4c]"><strong>2023,</strong> Friday</span>
                                            </div>
                                        </div>
                                        <div className="px-6 py-3 bg-white">
                                            <span className='text-[0.75rem] text-[#4c4c4c] cursor-pointer'>Guest(s) & Room(s)</span>
                                            <br />
                                            <div className="text-[18px] font-bold">3 Guest</div>
                                            <span className="text-[0.75rem] text-[#4c4c4c]"><strong>1 Room</strong></span>
                                        </div>
                                    </div>
                                    <div className="mx-auto hover:shadow-md text-center px-5 py-3 w-60 text-[18px] font-bold text-white bg-[#EB611D] cursor-pointer hover:bg-[#fd681d] rounded-sm">Search Hotels</div>
                                </div>
                              </div>
                            }

                            {
                                activeBtn === 'holiday' &&
                                <div className="px-5 py-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                                        <div className={`bg-white px-6 py-2 border ${focusStyleHotel && " border-sky-400"}`}>
                                            <span className='text-[0.75rem] text-[#4c4c4c]'>Destination</span>
                                            <br />
                                            <input ref={clickHotelRef} onClick={() => setFocusStyleHotel(true)} type="text" placeholder='City' className='border- outline-none ' />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-3">
                                        <div className={`bg-white px-6 py-2 border ${focusStyleHotel && " border-sky-400"}`}>
                                            <span className='text-[0.75rem] text-[#4c4c4c]'>Travel Date</span>
                                            <br />
                                            <DatePicker
                                                className='font-bold text-[16px] outline-none'
                                                selected={startDate}
                                                onChange={(date: any) => setStartDate(date)}
                                                dateFormat="MMMM d, yyyy"
                                            />
                                        </div>
                                        <div className={`bg-white px-6 py-2 border ${focusStyleHotel && " border-sky-400"}`}>
                                            <div className='flex items-center justify-between'>
                                                <div className="">
                                                    <span className='text-[0.75rem] text-[#4c4c4c]'>Room(s)</span>
                                                    <br />
                                                    <div className="font-bold text-[16px]">
                                                        <span>{roomCount}</span> Rooms
                                                    </div>
                                                </div>
                                                <div className="flex h-6 ">
                                                    <AiOutlineMinus onClick={() => roomCount > 1 && setRoomCount(roomCount - 1)} className="shadow-sm w-12 text-[24px] border-r text-center bg-[#eeebeb] rounded-l-full btn btn-xs border-none text-black hover:bg-sky-100" />
                                                    <AiOutlinePlus onClick={() => setRoomCount(roomCount + 1)} className="shadow-sm w-12 text-[24px] border-l text-center bg-[#eeebeb] rounded-r-full btn btn-xs border-none text-black hover:bg-sky-100" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className=" pt-10"> */}
                                    <div className="mx-auto mt-10 text-center px-5 py-3 w-60 text-[18px] font-bold text-white bg-[#EB611D] cursor-pointer hover:bg-[#fd681d] rounded-sm">Search packages</div>
                                    {/* </div> */}
                                </div>
                            }
                            {
                                activeBtn === 'visa' &&
                                <div className="pb-10 hidden md:block">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-10 px-5">
                                        <div className={`px-6 py-3 bg-white border ${focusStyleHotel && " border-sky-400"}`}>
                                            <span className='text-[0.75rem] text-[##4c4c4c]'>Country</span>
                                            <br />
                                            <input ref={clickHotelRef} onClick={() => setFocusStyleHotel(true)} type="text" placeholder='Enter Country' className='border- outline-none' />
                                        </div>
                                        <div className="flex bg-white">
                                            <div className=" px-4 py-3 border w-[50%]">
                                                <span className='text-[0.75rem] text-[#4c4c4c]'>Check-in Date</span>
                                                <br />
                                                <DatePicker
                                                    className='w-full text-[18px] font-bold outline-none'
                                                    selected={startDate}
                                                    onChange={(date: any) => setStartDate(date)}
                                                    selectsStart
                                                    startDate={startDate}
                                                    endDate={endDate}
                                                    dateFormat="MMMM d, yyyy"
                                                />
                                            </div>
                                            <div className="px-4 py-3 border w-[50%]">
                                                <span className='text-[0.75rem] text-[#4c4c4c]'>Check-out Date</span>
                                                <br />
                                                <DatePicker
                                                    className='w-full text-[18px] font-bold outline-none'
                                                    selected={endDate}
                                                    onChange={(date: any) => setEndDate(date)}
                                                    selectsEnd
                                                    startDate={startDate}
                                                    endDate={endDate}
                                                    minDate={startDate}
                                                    dateFormat="MMMM d, yyyy"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex bg-white">
                                            <div className=" px-4 py-3 border w-[50%]">
                                                <span className='text-[0.75rem] text-[#4c4c4c]'>Nationality</span>
                                                <br />
                                                <input type="text" className='outline-none font-bold' value="Bangladeshi" />
                                            </div>
                                            <div className={`bg-white px-6 py-2 border ${focusStyleHotel && " border-sky-400"}`}>
                                                <div className='flex items-center justify-between'>
                                                    <div className="">
                                                        <span className='text-[0.75rem] text-[#4c4c4c]'>Traveller</span>
                                                        <br />
                                                        <div className="font-bold text-[16px]">
                                                            <span>{travellerCount}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex h-6 mt-5">
                                                        <AiOutlineMinus onClick={() => travellerCount > 1 && setTravellerCount(travellerCount - 1)} className="shadow-sm w-10 text-[20px] border-r text-center bg-[#eeebeb] rounded-l-full btn btn-xs border-none text-black hover:bg-sky-100" />
                                                        <AiOutlinePlus onClick={() => setTravellerCount(travellerCount + 1)} className="shadow-sm w-10 text-[20px] border-l text-center bg-[#eeebeb] rounded-r-full btn btn-xs border-none text-black hover:bg-sky-100" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-auto hover:shadow-md text-center px-5 py-3 w-60 text-[18px] font-bold text-white bg-[#EB611D] cursor-pointer hover:bg-[#fd681d] rounded-sm">Search Hotels</div>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerHome;
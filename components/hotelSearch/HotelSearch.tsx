import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { hotelSearchFake } from './HotelSearchFakeData';
import { MdLocationOn } from 'react-icons/md';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import discountImg from '../../assets/hotel-Search/discount-mono.svg'
import LeftSideHotelSearch from './LeftSideHotelSearch';
import { BsSearch } from 'react-icons/bs';
import { Hotel, hotelsData } from '../../fake_data/hote_data';
import { useRouter } from 'next/router';

const HotelSearch = () => {
    // userefs 
    const [focusStyleHotel, setFocusStyleHotel] = useState(false)
    const [focusFlyTo, setFocusFlyTo] = useState(false)
    
    const [searchBtn, setSearchBtn] = useState(false)
    const [bestMatchBtn, setBestMatchBtn] = useState("Best Match")
    const [bestMatchBtnBool, setBestMatchBtnBool] = useState(false)
    // date picker 
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const clickHotelRef = useRef<any>();
    const clickFlyToRef = useRef<any>();


  
        const router = useRouter();
        const { city, guests, rooms } = router.query;
    
        const filteredHotels = hotelsData.filter((hotel: Hotel) => {
            const matchesCity = city ? hotel.city.toLowerCase().includes((city as string).toLowerCase()) : true;
            const matchesGuests = guests ? hotel.guests >= Number(guests) : true;
            const matchesRooms = rooms ? hotel.rooms >= Number(rooms) : true;
            return matchesCity && matchesGuests && matchesRooms;
        });



    const handleClickOutside = (e: any) => {
        if (!clickHotelRef?.current?.contains(e.target)) {
            setFocusStyleHotel(false);
        } else {
            setFocusStyleHotel(true);
        }

        if (!clickFlyToRef?.current?.contains(e.target)) {
            setFocusFlyTo(false);
        } else {
            setFocusFlyTo(true);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true)
    }, [])

    return (
        <div>
            <div className="relative">
                <div className="hidden lg:flex justify-between main-container py-6 bg-[#F7F7F8] border-b">
                    <div className="text-[16px] leading-6 ">
                        6th April 2023 - 8th April 2023 2 Person - 1 Rooms
                        <br />
                      
                    </div>
                    <div className="">
                        <div onClick={()=> setSearchBtn(!searchBtn)} className="px-3 py-[6px] uppercase bg-[#1882FF] text-white rounded-[4px] text-[12px] md:text-[16px] cursor-pointer">Modify Search</div>
                    </div>
                </div>
                <div className="flex lg:hidden items-center ">
                    <div className="bg-black text-white h-8 w-[90%] text-[14px] leading-6 text-center flex justify-center items-center">6 Apr 23 - 8 Apr 23, 2 Adt, 0 Chd - 1 Room</div>
                    <div className="w-[10%] bg-[#1882FF] text-white text-[14px] leading-6 h-8 flex justify-center items-center">
                        <BsSearch />
                    </div>
                </div>


                <div className={`absolute z-20 bg-[#F7F7F8] shadow-md main-container transition-all ease-in-out ${searchBtn ? "h-[300px] block" : "h-0 hidden" }`}>
                    <div className='pb-10'>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-10 px-5">
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
            </div>
            <div className="main-container flex flex-col lg:flex-row pb-10 pt-2">
                <div className="lg:w-[25%] px-3">
                    <LeftSideHotelSearch />
                </div>
                <div className="lg:w-[75%]">
                    <div className="flex justify-between px-5 py-2 bg-[#FAFAFA]">
                        <div className="">
                            <p className="text-[16px] leading-[22px]">9 Available Hotels</p>
                            <span className='text-[12px] leading-[16.8px]'>*Price includes VAT & Tax</span>
                        </div>
                        <div onClick={()=> { setBestMatchBtnBool(!bestMatchBtnBool)}} className="flex gap-2 items-center text-[16px] font-semibold leading-[23px] text-[#1882FF] cursor-pointer relative">
                            <div className="">{bestMatchBtn} </div>
                            <div className=""><IoIosArrowDown /></div>
                            <div className={`absolute top-10 w-40 z-20 left-[-40px] lg:left-0 bg-white cursor-pointer shadow-md ${bestMatchBtnBool ? "block" : "hidden"}`}>
                                <div onClick={()=> setBestMatchBtn("Best Match")} className="hover:bg-[#cce3fd] px-4 py-2 text-center">Best Match</div>
                                <div onClick={()=> setBestMatchBtn("Lowest Price")} className="hover:bg-[#cce3fd] px-4 py-2 text-center">Lowest Price</div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="">
                        {
                            hotelSearchFake?.map(item => {
                                return (
                                    <div key={item.id}
                                        className="flex flex-col md:flex-row gap-5 my-5 rounded-md mx-3 md:mx-0"
                                        style={{ boxShadow: "0 2px 4px rgba(0,0,0,.2)" }}
                                    >
                                        <div className="md:w-[35%] lg:w-[22%]">
                                            <Image className='w-full h-full object-cover rounded-l-[4px]' src={item.img} alt="img" width={208} height={208} />
                                        </div>
                                        <div className="md:w-[65%] lg::w-[75%] py-5">
                                            <h4 className="text-[24px] font-semibold leading-[30px] cursor-pointer hover:text-[#00A0C4] mx-3 md:mx-0 text-center lg:text-left">{item.hotelName}</h4>
                                            <div className="flex flex-col md:flex-row gap-10 mt-6 pr-5 mx-3 md:mx-0">
                                                <div className="md:w-[60%] flex flex-col items-center md:block">
                                                    <div className="flex gap-1 text-[18px] mb-3">
                                                        {item.rating}
                                                    </div>

                                                    <div className="flex items-center gap-2 text-[14px] font-semibold leading-[17px] mb-2">
                                                        <div className=""><MdLocationOn className='text-[16px] text-[#00A0C4]' /></div>
                                                        <div className="cursor-pointer hover:text-[#00A0C4]">{item.location}</div>
                                                    </div>
                                                    <div className="flex gap-4 text-[16px] font-semibold ">
                                                        <div className="flex gap-2">
                                                            <div className="">
                                                                <Image src={item.tripCoin.img} alt="img" width={24} height={24} />
                                                            </div>
                                                            <div className="">{item.tripCoin.count}</div>
                                                        </div>
                                                        <div className="flex gap-2">
                                                            <div className="">
                                                                <Image src={item.tripShare.img} alt="img" width={24} height={24} />
                                                            </div>
                                                            <div className="">{item.tripShare.count}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-center md:items-end md:w-[40%]">
                                                    <p className="text-[12px] font-semibold text-[#7e7e7e] leading-[18px] mb-2">Starts from</p>
                                                    <p className="text-[12px] mb-2"><span className='font-semibold'>BDT {item.regularPrice}</span><small className='text-[#7e7e7e]'>/Night</small></p>
                                                    <div className="flex items-center mb-2">
                                                        <Image src={discountImg} alt="img" width={16} height={16} />
                                                        <p className="text-[#FF7733] text-[12px] font-extrabold">{item.discount}% OFF</p>
                                                        <p className="ml-2 text-[14px] font-bold">BDT {Math.round(item.regularPrice * (item.discount / 100))}</p>
                                                        <span className='text-[12px] text-[#7e7e7e]'>/Night</span>
                                                    </div>
                                                    <p className="text-[14px] leading-[21px] mb-2">* Price includes VAT & Tax</p>
                                                    <div className="px-3 py-1 uppercase bg-[#1882FF] text-white rounded-[4px] cursor-pointer">Book now</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div> */}

{filteredHotels.length > 0 ? (
                <div className="">
                    {filteredHotels.map((hotel) => (
                        <div
                            key={hotel.id}
                            className="flex flex-col md:flex-row gap-5 my-5 rounded-md mx-3 md:mx-0"
                            style={{ boxShadow: "0 2px 4px rgba(0,0,0,.2)" }}
                        >
                            <div className="md:w-[35%] lg:w-[22%]">
                                <Image
                                    className='w-full h-full object-cover rounded-l-[4px]'
                                    src={hotel.imageUrl}
                                    alt={hotel.property}
                                    width={400} // Set an appropriate width
                                    height={300} // Set an appropriate height
                                />
                            </div>
                            <div className="md:w-[65%] lg:w-[75%] py-5">
                                <h4 className="text-[24px] font-semibold leading-[30px] cursor-pointer hover:text-[#00A0C4] mx-3 md:mx-0 text-center lg:text-left">{hotel.property}</h4>
                                <div className="flex flex-col md:flex-row gap-10 mt-6 pr-5 mx-3 md:mx-0">
                                    <div className="md:w-[60%] flex flex-col items-center md:block">
                                        <div className="flex gap-1 text-[18px] mb-3">
                                            {/* Assuming hotel rating is a number */}
                                            {'⭐'.repeat(Math.round(hotel.pricePerNight / 40))} {/* Just an example for rating */}
                                        </div>
                                        <div className="flex items-center gap-2 text-[14px] font-semibold leading-[17px] mb-2">
                                            <div>
                                                <MdLocationOn className='text-[16px] text-[#00A0C4]' />
                                            </div>
                                            <div className="cursor-pointer hover:text-[#00A0C4]">{hotel.city}</div>
                                        </div>
                                        <div className="flex gap-4 text-[16px] font-semibold">
                                            <div className="flex gap-2">
                                                <div className="">
                                                    <Image src="/path/to/tripCoinImage.png" alt="Trip Coin" width={24} height={24} />
                                                </div>
                                                <div>{hotel.guests} Guests</div> {/* Example count */}
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="">
                                                    <Image src="/path/to/tripShareImage.png" alt="Trip Share" width={24} height={24} />
                                                </div>
                                                <div>{hotel.rooms} Rooms</div> {/* Example count */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center md:items-end md:w-[40%]">
                                        <p className="text-[12px] font-semibold text-[#7e7e7e] leading-[18px] mb-2">Starts from</p>
                                        <p className="text-[12px] mb-2"><span className='font-semibold'>BDT {hotel.pricePerNight}</span><small className='text-[#7e7e7e]'>/Night</small></p>
                                        <div className="flex items-center mb-2">
                                            <Image src="/path/to/discountImage.png" alt="Discount" width={16} height={16} />
                                            <p className="text-[#FF7733] text-[12px] font-extrabold">{10}% OFF</p> {/* Example discount */}
                                            <p className="ml-2 text-[14px] font-bold">BDT {Math.round(hotel.pricePerNight * (10 / 100))}</p> {/* Calculate discounted price */}
                                            <span className='text-[12px] text-[#7e7e7e]'>/Night</span>
                                        </div>
                                        <p className="text-[14px] leading-[21px] mb-2">* Price includes VAT & Tax</p>
                                        <div className="px-3 py-1 uppercase bg-[#1882FF] text-white rounded-[4px] cursor-pointer">Book now</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No hotels found matching your search criteria.</p>
            )}

                </div>
            </div>
        </div>
    );
};

export default HotelSearch;
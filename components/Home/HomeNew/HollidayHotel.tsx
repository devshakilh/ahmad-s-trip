import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Image from 'next/image';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { destinationsData, Hotel, hotelsData } from '../../../fake_data/holiday_data';

const HolidayHotelSearchComponent: React.FC = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [roomCount, setRoomCount] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [focusStyleHotel, setFocusStyleHotel] = useState(false);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [filteredHotels, setFilteredHotels] = useState<Hotel[]>([]); // For search results
    const clickHotelRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value) {
            const filteredSuggestions = destinationsData.filter(destination =>
                destination.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion: string) => {
        setSearchTerm(suggestion);
        setSuggestions([]); // Clear suggestions after selection
    };

    const handleSearch = () => {
        if (!startDate || roomCount <= 0) {
            alert("Please select a travel date and specify the number of rooms.");
            return;
        }

        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + 1); // Assuming a one-night stay for simplicity

        const results = hotelsData.filter(hotel =>
            hotel.location.toLowerCase().includes(searchTerm.toLowerCase()) &&
            hotel.availableRooms >= roomCount &&
            hotel.availableDates.some(dateRange => {
                const startAvailable = new Date(dateRange.start);
                const endAvailable = new Date(dateRange.end);
                return startAvailable <= startDate && endAvailable >= endDate; // Check if dates are available
            })
        );

        setFilteredHotels(results);
        console.log("Searching for packages:", results); // Display search results
    };

    return (
        <div className="px-5 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                <div className={`bg-white px-6 py-2 border ${focusStyleHotel && " border-sky-400"}`}>
                    <span className='text-[0.75rem] text-[#4c4c4c]'>Destination</span>
                    <br />
                    <input
                        ref={clickHotelRef}
                        onClick={() => setFocusStyleHotel(true)}
                        type="text"
                        placeholder='City'
                        value={searchTerm}
                        onChange={handleChange}
                        className='border outline-none'
                    />
                    {suggestions.length > 0 && (
                        <div className="absolute z-10 bg-white border border-gray-300 mt-1">
                            {suggestions.map((suggestion, index) => (
                                <div
                                    key={index}
                                    className="cursor-pointer hover:bg-gray-100 px-2 py-1"
                                    onClick={() => handleSuggestionClick(suggestion)}
                                >
                                    {suggestion}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-3">
                <div className={`bg-white px-6 py-2 border `}>
                    <span className='text-[0.75rem] text-[#4c4c4c]'>Travel Date</span>
                    <br />
                    <DatePicker
                        className='font-bold text-[16px] outline-none'
                        selected={startDate}
                        onChange={(date: Date) => setStartDate(date)}
                        dateFormat="MMMM d, yyyy"
                    />
                </div>
                <div className={`bg-white px-6 py-2 border `}>
                    <div className='flex items-center justify-between'>
                        <div className="">
                            <span className='text-[0.75rem] text-[#4c4c4c]'>Room(s)</span>
                            <br />
                            <div className="font-bold text-[16px]">
                                <span>{roomCount}</span> Rooms
                            </div>
                        </div>
                        <div className="flex h-6 ">
                            <AiOutlineMinus
                                onClick={() => roomCount > 1 && setRoomCount(roomCount - 1)}
                                className="shadow-sm w-12 text-[24px] border-r text-center bg-[#eeebeb] rounded-l-full btn btn-xs border-none text-black hover:bg-sky-100"
                            />
                            <AiOutlinePlus
                                onClick={() => setRoomCount(roomCount + 1)}
                                className="shadow-sm w-12 text-[24px] border-l text-center bg-[#eeebeb] rounded-r-full btn btn-xs border-none text-black hover:bg-sky-100"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-10 text-center px-5 py-3 w-60 text-[18px] font-bold text-white bg-[#EB611D] cursor-pointer hover:bg-[#fd681d] rounded-sm" onClick={handleSearch}>
                Search packages
            </div>

            {filteredHotels.length > 0 ? (
                <div className="mt-5">
                    {filteredHotels.map(item => (
                        <div key={item.id} className="bg-white p-5 mb-5 rounded-lg shadow-md">
                            <Image 
                                src={item.img} 
                                alt={item.hotelName} 
                                width={800}
                                height={384}
                                className="w-full h-48 object-cover rounded" 
                            />
                            <h2 className="text-xl font-bold mt-2">{item.hotelName}</h2>
                            <div className="text-[16px] text-[#A8A8A8]">{item.location}</div>
                            <div className="text-[16px]">{item.rating}</div>
                            <div className="text-[16px] text-red-500">
                                ${item.regularPrice - item.discount} <span className="text-[14px] text-[#A8A8A8] line-through">${item.regularPrice}</span>
                            </div>
                            <div className="flex mt-5 gap-5 mx-3 md:mx-0">
                                <img src={item.tripCoin.img} alt="Trip Coin" />
                                <span>{item.tripCoin.count} Trip Coins</span>
                                <img src={item.tripShare.img} alt="Trip Share" />
                                <span>{item.tripShare.count} Trip Shares</span>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center text-lg">No hotels found for your search criteria.</div>
            )}
        </div>
    );
};

export default HolidayHotelSearchComponent;

// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { hotelsData } from '../../../fake_data/hote_data';

// const HotelSearchComponent: React.FC = () => {
//     const [startDate, setStartDate] = useState<Date | null>(null);
//     const [endDate, setEndDate] = useState<Date | null>(null);
//     const [guestCount, setGuestCount] = useState(3);
//     const [roomCount, setRoomCount] = useState(1);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [focusStyleHotel, setFocusStyleHotel] = useState(false);

//     const handleSearch = () => {
//         const results = hotelsData.filter(hotel =>
//             hotel.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             hotel.property.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//         console.log("Search Results:", results); // Display in console or on UI as needed
//     };

//     return (
//         <div className='pb-10'>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-10 px-5">
//                 <div className={`px-6 py-3 bg-white border ${focusStyleHotel && "border-sky-400"}`}>
//                     <span className='text-[0.75rem] text-[#4c4c4c]'>Enter City or Property</span>
//                     <br />
//                     <input
//                         type="text"
//                         placeholder='Search Hotels'
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                         className='border outline-none'
//                         onFocus={() => setFocusStyleHotel(true)}
//                     />
//                     <br />
//                     <span className="text-[0.75rem] text-[#4c4c4c]"><strong>{"Cox's Bazar,"}</strong> Bangladesh</span>
//                 </div>

//                 <div className="flex bg-white">
//                     <div className="px-4 py-3 border w-[50%]">
//                         <span className='text-[0.75rem] text-[#4c4c4c]'>Check-in Date</span>
//                         <br />
//                         <DatePicker
//                             className='w-full text-[18px] font-bold outline-none'
//                             selected={startDate}
//                             onChange={(date: Date) => setStartDate(date)}
//                             selectsStart
//                             startDate={startDate}
//                             endDate={endDate}
//                             dateFormat="MMMM d, yyyy"
//                         />
//                     </div>
//                     <div className="px-4 py-3 border w-[50%]">
//                         <span className='text-[0.75rem] text-[#4c4c4c]'>Check-out Date</span>
//                         <br />
//                         <DatePicker
//                             className='w-full text-[18px] font-bold outline-none'
//                             selected={endDate}
//                             onChange={(date: Date) => setEndDate(date)}
//                             selectsEnd
//                             startDate={startDate}
//                             endDate={endDate}
//                             minDate={startDate}
//                             dateFormat="MMMM d, yyyy"
//                         />
//                     </div>
//                 </div>

//                 <div className="px-6 py-3 bg-white">
//                     <span className='text-[0.75rem] text-[#4c4c4c] cursor-pointer'>Guest(s) & Room(s)</span>
//                     <br />
//                     <div className="flex items-center justify-between">
//                         <div className="text-[18px] font-bold">
//                             <button onClick={() => setGuestCount(prev => Math.max(1, prev - 1))}>-</button>
//                             {` ${guestCount} Guest${guestCount > 1 ? 's' : ''} `}
//                             <button onClick={() => setGuestCount(prev => prev + 1)}>+</button>
//                         </div>
//                         <div className="text-[18px] font-bold">
//                             <button onClick={() => setRoomCount(prev => Math.max(1, prev - 1))}>-</button>
//                             {` ${roomCount} Room${roomCount > 1 ? 's' : ''} `}
//                             <button onClick={() => setRoomCount(prev => prev + 1)}>+</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div
//                 className="mx-auto hover:shadow-md text-center px-5 py-3 w-60 text-[18px] font-bold text-white bg-[#EB611D] cursor-pointer hover:bg-[#fd681d] rounded-sm"
//                 onClick={handleSearch}
//             >
//                 Search Hotels
//             </div>
//         </div>
//     );
// };

// export default HotelSearchComponent;


// components/HotelSearchComponent.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const locations = ["Cox's Bazar", "Dhaka", "Sylhet", "Chittagong"];

const HotelSearchComponent: React.FC = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [guestCount, setGuestCount] = useState(3);
    const [roomCount, setRoomCount] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [locationSuggestions, setLocationSuggestions] = useState<string[]>([]);
    const router = useRouter();

    const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);

        const filteredSuggestions = locations.filter(location =>
            location.toLowerCase().includes(value.toLowerCase())
        );
        setLocationSuggestions(filteredSuggestions);
    };

    const handleSearch = () => {
        router.push({
            pathname: '/hotel-search',
            query: {
                city: searchTerm,
                startDate: startDate?.toISOString(),
                endDate: endDate?.toISOString(),
                guests: guestCount,
                rooms: roomCount,
            },
        });
    };

    return (
        <div className="pb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-10 px-5">

                
                <div className="relative px-6 py-3 bg-white border">
                    
                    

                    <span className='text-[0.75rem] text-[#4c4c4c]'>Enter City or Property</span>
                     <br />
                     <input
                         type="text"
                         placeholder='Search Hotels'
                         value={searchTerm}
                         onChange={handleLocationChange}
                         className='border outline-none'
                       
                    />
                     <br />
                     <span className="text-[0.75rem] text-[#4c4c4c]"><strong>{"Cox's Bazar,"}</strong> Bangladesh</span>

                    {locationSuggestions.length > 0 && (
                        <div className="absolute bg-white border rounded shadow-md max-h-48 overflow-y-auto w-full">
                            {locationSuggestions.map((location, index) => (
                                <div
                                    key={index}
                                    onClick={() => {
                                        setSearchTerm(location);
                                        setLocationSuggestions([]);
                                    }}
                                    className="cursor-pointer p-2 hover:bg-gray-200"
                                >
                                    {location}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="flex bg-white">
                    <div className="px-4 py-3 border w-[50%]">
                        <span className="text-[0.75rem] text-[#4c4c4c]">Check-in Date</span>
                        <DatePicker
                            className="w-full text-[18px] font-bold outline-none"
                            selected={startDate}
                            onChange={(date: Date) => setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            dateFormat="MMMM d, yyyy"
                        />
                    </div>
                    <div className="px-4 py-3 border w-[50%]">
                        <span className="text-[0.75rem] text-[#4c4c4c]">Check-out Date</span>
                        <DatePicker
                            className="w-full text-[18px] font-bold outline-none"
                            selected={endDate}
                            onChange={(date: Date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            dateFormat="MMMM d, yyyy"
                        />
                    </div>
                </div>

                <div className="px-6 py-3 bg-white">
                    <span className="text-[0.75rem] text-[#4c4c4c]">Guest(s) & Room(s)</span>
                    <div className="flex items-center justify-between">
                        <div className="text-[18px] font-bold">
                            <button onClick={() => setGuestCount(prev => Math.max(1, prev - 1))}>-</button>
                            {` ${guestCount} Guest${guestCount > 1 ? 's' : ''} `}
                            <button onClick={() => setGuestCount(prev => prev + 1)}>+</button>
                        </div>
                        <div className="text-[18px] font-bold">
                            <button onClick={() => setRoomCount(prev => Math.max(1, prev - 1))}>-</button>
                            {` ${roomCount} Room${roomCount > 1 ? 's' : ''} `}
                            <button onClick={() => setRoomCount(prev => prev + 1)}>+</button>
                        </div>
                    </div>
                </div>
            </div>
            <button
                className="mx-auto text-center  flex items-center justify-center py-3 w-60 text-[18px] font-bold text-white bg-[#EB611D] rounded-sm"
                onClick={handleSearch}
            >
                Search Hotels
            </button>
        </div>
    );
};

export default HotelSearchComponent;

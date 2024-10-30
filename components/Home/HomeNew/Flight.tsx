

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { mockFlights } from '../../../fake_data/flight_data';
import Router from 'next/router';

export interface Flight {
    id: string;
  type: string;
  titleName1: string;
  titleDate1: string;
  place1: string;
  time1: string;
  titleName2: string;
  titleDate2: string;
  place2: string;
  time2: string;
  performance: string;
  refundable: string;
  newTaka: string;
  oldTaka: string;
  extra1: string;
  passengers: number;
  showMoreInfo: {
    id: string;
    serviceId: string;
    serviceName: string;
    duration: string;
    titleName1: string;
    titleDate1: string;
    place1: string;
    time1: string;
    titleName2: string;
    titleDate2: string;
    place2: string;
    time2: string;
    performance: string;
    refundable: string;
    newTaka: string;
    oldTaka: string;
    extra1: string;
  }[];
}

// const mockFlights: Flight[] = [
//     {
//         id: 'ow1',
//         type: 'One Way',
//         titleName1: 'DAC',
//         titleDate1: '2024-11-05',
//         place1: 'Dhaka, Bangladesh',
//         time1: '08:00 AM',
//         titleName2: 'SIN',
//         titleDate2: '2024-11-05',
//         place2: 'Singapore',
//         time2: '12:30 PM',
//         performance: 'Non-stop',
//         refundable: 'Refundable',
//         newTaka: '20,000',
//         oldTaka: '25,000',
//         extra1: 'Business Class',
//         passengers: 1,
//         showMoreInfo: [
//           {
//             id: 'ow1_1',
//             serviceId: 'SQ001',
//             serviceName: 'Singapore Airlines',
//             duration: '4h 30m',
//             titleName1: 'DAC',
//             titleDate1: '2024-11-05',
//             place1: 'Dhaka, Bangladesh',
//             time1: '08:00 AM',
//             titleName2: 'SIN',
//             titleDate2: '2024-11-05',
//             place2: 'Singapore',
//             time2: '12:30 PM',
//             performance: 'Non-stop',
//             refundable: 'Refundable',
//             newTaka: '20,000',
//             oldTaka: '25,000',
//             extra1: 'Business Class',
//           }
//         ],
//       },
//       // Round Trip Flights
//       {
//         id: 'rt1',
//         type: 'Round Trip',
//         titleName1: 'DAC',
//         titleDate1: '2024-12-01',
//         place1: 'Dhaka, Bangladesh',
//         time1: '10:00 AM',
//         titleName2: 'KUL',
//         titleDate2: '2024-12-06',
//         place2: 'Kuala Lumpur, Malaysia',
//         time2: '03:00 PM',
//         performance: 'Non-stop',
//         refundable: 'Refundable',
//         newTaka: '40,000',
//         oldTaka: '45,000',
//         extra1: 'Economy Class',
//         passengers: 2,
//         showMoreInfo: [
//           {
//             id: 'rt1_1',
//             serviceId: 'MH101',
//             serviceName: 'Malaysia Airlines',
//             duration: '5h 0m',
//             titleName1: 'DAC',
//             titleDate1: '2024-12-01',
//             place1: 'Dhaka, Bangladesh',
//             time1: '10:00 AM',
//             titleName2: 'KUL',
//             titleDate2: '2024-12-05',
//             place2: 'Kuala Lumpur, Malaysia',
//             time2: '03:00 PM',
//             performance: 'Non-stop',
//             refundable: 'Refundable',
//             newTaka: '40,000',
//             oldTaka: '45,000',
//             extra1: 'Economy Class',
//           },
//           {
//             id: 'rt1_2',
//             serviceId: 'MH102',
//             serviceName: 'Malaysia Airlines',
//             duration: '5h 0m',
//             titleName1: 'KUL',
//             titleDate1: '2024-12-05', // Change this date to match the search parameter
//             place1: 'Kuala Lumpur, Malaysia',
//             time1: '04:00 PM',
//             titleName2: 'DAC',
//             titleDate2: '2024-12-15',
//             place2: 'Dhaka, Bangladesh',
//             time2: '09:00 PM',
//             performance: 'Non-stop',
//             refundable: 'Refundable',
//             newTaka: '40,000',
//             oldTaka: '45,000',
//             extra1: 'Economy Class',
//         }
        
//         ],
//       },
//       // Multi-City Flights
//       {
//         id: 'mc1',
//         type: 'Multi-City',
//         titleName1: 'SYD',
//         titleDate1: '2024-11-12',
//         place1: 'Sydney, Australia',
//         time1: '10:00 PM',
//         titleName2: 'SIN',
//         titleDate2: '2024-11-13',
//         place2: 'Singapore',
//         time2: '04:00 AM',
//         performance: '1 Stop',
//         refundable: 'Non-refundable',
//         newTaka: '60,000',
//         oldTaka: '65,000',
//         extra1: 'Economy Class',
//         passengers: 3,
//         showMoreInfo: [
//           {
//             id: 'mc1_1',
//             serviceId: 'QF002',
//             serviceName: 'Qantas',
//             duration: '8h 0m',
//             titleName1: 'SYD',
//             titleDate1: '2024-11-12',
//             place1: 'Sydney, Australia',
//             time1: '10:00 PM',
//             titleName2: 'SIN',
//             titleDate2: '2024-11-13',
//             place2: 'Singapore',
//             time2: '04:00 AM',
//             performance: '1 Stop',
//             refundable: 'Non-refundable',
//             newTaka: '60,000',
//             oldTaka: '65,000',
//             extra1: 'Economy Class',
//           },
//           {
//             id: 'mc1_2',
//             serviceId: 'SQ003',
//             serviceName: 'Singapore Airlines',
//             duration: '7h 30m',
//             titleName1: 'SIN',
//             titleDate1: '2024-11-14',
//             place1: 'Singapore',
//             time1: '08:00 AM',
//             titleName2: 'LHR',
//             titleDate2: '2024-11-14',
//             place2: 'London, UK',
//             time2: '03:30 PM',
//             performance: 'Non-stop',
//             refundable: 'Non-refundable',
//             newTaka: '60,000',
//             oldTaka: '65,000',
//             extra1: 'Economy Class',
//           }
//         ],
//       }
//     ];
    


const FlightSearch: React.FC = () => {
    const [subActiveBtn, setSubActiveBtn] = useState("oneWay");
    const [fromCity, setFromCity] = useState("DAC");
    const [toCity, setToCity] = useState("SIN");
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [passengers, setPassengers] = useState(1);
    const [cabinClass, setCabinClass] = useState("Any");
    const [searchResults, setSearchResults] = useState<Flight[]>([]);
    const [fromSuggestions, setFromSuggestions] = useState<string[]>([]);
    const [toSuggestions, setToSuggestions] = useState<string[]>([]);
    
    const locationSuggestions = ["SYD", "SIN", "DAC", "Cox's Bazar", "KUL", "LHR", "Khulna", "Narayanganj", "Mymensingh", "Comilla", "Bogra", "Pabna"];
   
   
    // const searchFlights = () => {
    //     const formattedStartDate = startDate ? startDate.toISOString().slice(0, 10) : null;
    //     const formattedEndDate = endDate ? endDate.toISOString().slice(0, 10) : null;
    
    //     const results = mockFlights.filter((flight) => {
    //         // Normalize extra1 to check for "Business" or "Economy"
    //         const cabinClassNormalized = flight.extra1.toLowerCase();
    
    //         // Check if the cabin class matches based on user selection
    //         const isCabinClassMatch =
    //             (cabinClass === "Any") || 
    //             (cabinClass === "Business" && cabinClassNormalized.includes("business")) || 
    //             (cabinClass === "Economy" && cabinClassNormalized.includes("economy"));
    
    //         // Check if passenger count matches
    //         const isPassengerCountMatch = flight.passengers >= passengers;
    
    //         // One Way
    //         if (subActiveBtn === "oneWay") {
    //             return (
    //                 flight.titleName1.toLowerCase() === fromCity.toLowerCase() &&
    //                 flight.titleName2.toLowerCase() === toCity.toLowerCase() &&
    //                 flight.titleDate1 === formattedStartDate &&
    //                 isCabinClassMatch &&
    //                 isPassengerCountMatch
    //             );
    //         }
    
    //         // Round Trip
    //         if (subActiveBtn === "roundTrip") {
    //             // Check for outgoing flight match
    //             const outgoingFlightMatches = (
    //                 flight.titleName1.toLowerCase() === fromCity.toLowerCase() &&
    //                 flight.titleName2.toLowerCase() === toCity.toLowerCase() &&
    //                 flight.titleDate1 === formattedStartDate &&
    //                 isCabinClassMatch &&
    //                 isPassengerCountMatch
    //             );
    
    //             // Check for return flights match
    //             const returnFlightMatches = flight.showMoreInfo.some(returnFlight =>
    //                 returnFlight.titleDate2 === formattedEndDate &&
    //                 returnFlight.titleName1.toLowerCase() === toCity.toLowerCase() &&
    //                 returnFlight.titleName2.toLowerCase() === fromCity.toLowerCase() &&
    //                 isCabinClassMatch &&
    //                 isPassengerCountMatch
    //             );
    
    //             return outgoingFlightMatches && returnFlightMatches;
    //         }
    
    //         // Multi-City
    //         if (subActiveBtn === "multiCity") {
    //             return (
    //                 (flight.titleName1.toLowerCase() === fromCity.toLowerCase() || 
    //                  flight.titleName2.toLowerCase() === toCity.toLowerCase()) &&
    //                 isCabinClassMatch &&
    //                 isPassengerCountMatch
    //             );
    //         }
    
    //         return false;
    //     });
    //     Router.push({
    //         pathname: '/flight-search',
    //         query: { results: JSON.stringify(results) },  // Convert results to JSON string
    //     });
    //     // Log results for debugging
    //     console.log("Filtered Flights: ", results);
    
    //     setSearchResults(results);
    // };
    
    
    const searchFlights = () => {
        const formattedStartDate = startDate ? startDate.toISOString().slice(0, 10) : null;
        const formattedEndDate = endDate ? endDate.toISOString().slice(0, 10) : null;
    
        const results = mockFlights.filter((flight) => {
            const cabinClassNormalized = flight.extra1.toLowerCase();
            const isCabinClassMatch =
                cabinClass === "Any" ||
                (cabinClass === "Business" && cabinClassNormalized.includes("business")) ||
                (cabinClass === "Economy" && cabinClassNormalized.includes("economy"));
    
            const isPassengerCountMatch = flight.passengers >= passengers;
    
            // One Way Search
            if (subActiveBtn === "oneWay") {
                return (
                    flight.titleName1.toLowerCase() === fromCity.toLowerCase() &&
                    flight.titleName2.toLowerCase() === toCity.toLowerCase() &&
                    flight.titleDate1 === formattedStartDate &&
                    isCabinClassMatch &&
                    isPassengerCountMatch
                );
            }
    
            // Round Trip Search
            if (subActiveBtn === "roundTrip") {
                // Check for an outbound flight
                const outgoingFlightMatches =
                    flight.titleName1.toLowerCase() === fromCity.toLowerCase() &&
                    flight.titleName2.toLowerCase() === toCity.toLowerCase() &&
                    flight.titleDate1 === formattedStartDate &&
                    isCabinClassMatch &&
                    isPassengerCountMatch;
    
                // Check for a matching return flight in showMoreInfo
                const returnFlightMatches = flight.showMoreInfo.some((returnFlight) =>
                    returnFlight.titleDate2 === formattedEndDate &&
                    returnFlight.titleName1.toLowerCase() === toCity.toLowerCase() &&
                    returnFlight.titleName2.toLowerCase() === fromCity.toLowerCase() &&
                    isCabinClassMatch &&
                    isPassengerCountMatch
                );
    
                return outgoingFlightMatches && returnFlightMatches;
            }
    
            // Multi-City Search
            if (subActiveBtn === "multiCity") {
                return (
                    (flight.titleName1.toLowerCase() === fromCity.toLowerCase() ||
                        flight.titleName2.toLowerCase() === toCity.toLowerCase()) &&
                    flight.titleDate1 === formattedStartDate &&
                    isCabinClassMatch &&
                    isPassengerCountMatch
                );
            }
    
            return false;
        });
    
        // Check if results are empty and show "ASTECEN NA DATA" alert if no results are found
        if (results.length === 0) {
            alert("Not found data! you can search other's data or way");
        } else {
            setSearchResults(results);
            Router.push({
                pathname: '/flight-search',
                query: { results: JSON.stringify(results) },
            });
        }
    };
    
    

    const incrementPassengers = () => setPassengers(prev => prev + 1);
    const decrementPassengers = () => setPassengers(prev => (prev > 1 ? prev - 1 : prev));

    const handleFromCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setFromCity(inputValue);
        setFromSuggestions(locationSuggestions.filter(location => location.toLowerCase().includes(inputValue.toLowerCase())));
    };

    const handleToCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setToCity(inputValue);
        setToSuggestions(locationSuggestions.filter(location => location.toLowerCase().includes(inputValue.toLowerCase())));
    };

    const handleSuggestionClick = (city: string, type: 'from' | 'to') => {
        if (type === 'from') {
            setFromCity(city);
            setFromSuggestions([]);
        } else {
            setToCity(city);
            setToSuggestions([]);
        }
    };




    return (
        <div className="py-10 px-5 bg-gray-100 rounded-lg md:w-[75%] mx-auto shadow-lg">
            <h1 className="text-2xl font-bold text-center mb-5">Flight Search</h1>
            <div className="flex md:w-3/5 mx-auto mb-5">
                <div onClick={() => setSubActiveBtn("oneWay")} className={`text-center text-gray-700 py-2 w-[33.33%] rounded-l-full cursor-pointer transition duration-300 ${subActiveBtn === "oneWay" ? "bg-blue-500 text-white" : "hover:bg-blue-200"}`}>One Way</div>
                <div onClick={() => setSubActiveBtn("roundTrip")} className={`text-center text-gray-700 py-2 w-[33.33%] cursor-pointer transition duration-300 ${subActiveBtn === "roundTrip" ? "bg-blue-500 text-white" : "hover:bg-blue-200"}`}>Round Trip</div>
                <div onClick={() => setSubActiveBtn("multiCity")} className={`text-center text-gray-700 py-2 w-[33.33%] rounded-r-full cursor-pointer transition duration-300 ${subActiveBtn === "multiCity" ? "bg-blue-500 text-white" : "hover:bg-blue-200"}`}>Multi-City</div>
            </div>

            {/* One Way */}
            <div className={`py-5 ${subActiveBtn === "oneWay" ? "" : "hidden"}`}>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w- justify-between">
                    <input type="text" value={fromCity} onChange={handleFromCityChange} placeholder="Flying From"
                     className="p-2 border border-gray-300 rounded-md w-full h-12" />
                    <input type="text" value={toCity} onChange={handleToCityChange} placeholder="Flying To"
                     className="p-2 border border-gray-300 rounded-md w-full h-12" />
                    
                    <DatePicker
                     selected={startDate}
                      onChange={setStartDate}
                       dateFormat="yyyy-MM-dd"
                     className="p-2 border border-gray-300 rounded-md w-full h-12"
                     
                     />
                                     <div className="flex items-center h-12 border border-gray-300 rounded-md overflow-hidden ">
    <button 
        onClick={decrementPassengers} 
        className="px-3 bg-gray-200 h-full flex items-center justify-center"
    >
        −
    </button>
    <input 
        type="text" 
        value={passengers} 
        readOnly 
        className="w-[12vh] text-center h-full outline-none border-l border-r border-gray-300" 
    />
    <button 
        onClick={incrementPassengers} 
        className="px-3 bg-gray-200 h-full flex items-center justify-center"
    >
        +
    </button>
</div>
                    <div className="mt1 h-12">
            <select 
                value={cabinClass} 
                onChange={(e) => setCabinClass(e.target.value)} 
                className="p-2 border border-gray-300 rounded-md w-full h-full"
            >
                <option value="Any">Any</option>
                <option value="Economy">Economy</option>
                <option value="Business">Business</option>
            </select>
        </div>
                </div>

                {fromSuggestions.length > 0 && (
                    <ul className="border border-gray-300 rounded-md mt-1">
                        {fromSuggestions.map((suggestion, index) => (
                            <li key={index} onClick={() => handleSuggestionClick(suggestion, 'from')} className="p-2 hover:bg-blue-200 cursor-pointer">{suggestion}</li>
                        ))}
                    </ul>
                )}

                {toSuggestions.length > 0 && (
                    <ul className="border border-gray-300 rounded-md mt-1">
                        {toSuggestions.map((suggestion, index) => (
                            <li key={index} onClick={() => handleSuggestionClick(suggestion, 'to')} className="p-2 hover:bg-blue-200 cursor-pointer">{suggestion}</li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Round Trip */}
            <div className={`py-5 ${subActiveBtn === "roundTrip" ? "" : "hidden"}`}>
    <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-3">
        <input 
            type="text" 
            value={fromCity} 
            onChange={handleFromCityChange} 
            placeholder="Flying From" 
            className="p-2 border border-gray-300 rounded-md w-full h-12" 
        />
        <input 
            type="text" 
            value={toCity} 
            onChange={handleToCityChange} 
            placeholder="Flying To" 
            className="p-2 border border-gray-300 rounded-md w-full h-12" 
        />
        <DatePicker 
            selected={startDate} 
            onChange={setStartDate} 
            dateFormat="yyyy-MM-dd" 
            className="p-2 border border-gray-300 rounded-md w-full h-12" 
        />
        <DatePicker 
            selected={endDate} 
            onChange={setEndDate} 
            dateFormat="yyyy-MM-dd" 
            className="p-2 border border-gray-300 rounded-md w-full h-12" 
        />
        <div className="flex   h-12 w10">
            <button onClick={decrementPassengers} className="px-2 bg-gray-200 rounded-l-md">−</button>
            <input 
                type="text" 
                value={passengers} 
                readOnly 
                className="p-2 border border-gray-300 rounded-md w-20 text-center h-full" 
            />
            <button onClick={incrementPassengers} className="px-2 bg-gray-200 rounded-r-md">+</button>
        </div>
        <div className="mt-1 h-12">
            <select 
                value={cabinClass} 
                onChange={(e) => setCabinClass(e.target.value)} 
                className="p-2 border border-gray-300 rounded-md w-full h-full"
            >
                <option value="Any">Any</option>
                <option value="Economy">Economy</option>
                <option value="Business">Business</option>
            </select>
        </div>
    </div>
</div>


            {/* Multi-City */}
            <div className={`py-5 ${subActiveBtn === "multiCity" ? "" : "hidden"}`}>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                    <input type="text" value={fromCity} onChange={handleFromCityChange} placeholder="Flying From" 
                    className="p-2 border border-gray-300 rounded-md w-full h-12 " />
                    <input type="text" value={toCity} onChange={handleToCityChange} placeholder="Flying To"
                     className="p-2 border border-gray-300 rounded-md w-full h-12" />
                      <DatePicker
                     selected={startDate}
                      onChange={setStartDate}
                       dateFormat="yyyy-MM-dd"
                     className="p-2 border border-gray-300 rounded-md w-full h-12"
                     
                     />
                   <div className="flex items-center h-12 border border-gray-300 rounded-md overflow-hidden ">
    <button 
        onClick={decrementPassengers} 
        className="px-3 bg-gray-200 h-full flex items-center justify-center"
    >
        −
    </button>
    <input 
        type="text" 
        value={passengers} 
        readOnly 
        className="w-[137px] text-center h-full outline-none border-l border-r border-gray-300" 
    />
    <button 
        onClick={incrementPassengers} 
        className="px-3 bg-gray-200 h-full flex items-center justify-center"
    >
        +
    </button>
</div>

                    <div className="mt- h-12">
            <select 
                value={cabinClass} 
                onChange={(e) => setCabinClass(e.target.value)} 
                className="p-2 border border-gray-300 rounded-md w-full h-full"
            >
                <option value="Any">Any</option>
                <option value="Economy">Economy</option>
                <option value="Business">Business</option>
            </select>
        </div>
                </div>
            </div>

            <button onClick={searchFlights} className="mt-5 w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md">Search Flights</button>

            {/* <RightAvailableFlights results={searchResults} /> */}


        </div>
    );
};

export default FlightSearch;

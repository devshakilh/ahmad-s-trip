import React, { useState } from 'react';

import { FaPlaneDeparture, FaPlaneArrival, FaClock, FaUser, FaSuitcase } from 'react-icons/fa';
import BookingModal from './BookingModal';
import { Flight } from './Flight';

interface SearchResultsProps {
    results: Flight[];
}

// const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
//     const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);

//     // Function to open modal with selected flight
//     const openBookingModal = (flight: Flight) => {
//         setSelectedFlight(flight);
//     };

//     // Function to close modal
//     const closeBookingModal = () => {
//         setSelectedFlight(null);
//     };

    
//     return (
//         <div className="py-5">
//             {results.length > 0 ? (
//                 results.map((flight) => (
//                     <div key={flight.id} className="mb-5 bg-white shadow-lg p-4 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl">
//                         <div className="flex justify-between items-center">
//                             <div className="text-lg font-semibold">
//                                 {flight.type} Flight - {flight.extra1}
//                             </div>
//                             <div className="text-sm text-gray-500">ID: {flight.id}</div>
//                         </div>
//                         <div className="flex items-center justify-between mt-4">
//                             <div className="flex flex-col items-center">
//                                 <FaPlaneDeparture className="text-blue-500 text-2xl" />
//                                 <div className="font-semibold">{flight.titleName1}</div>
//                                 <div className="text-sm">{flight.place1}</div>
//                                 <div className="text-xs text-gray-500">{flight.time1}</div>
//                             </div>
//                             <div className="flex flex-col items-center mx-4">
//                                 <FaClock className="text-gray-500" />
//                                 <div className="text-sm">{flight.performance}</div>
//                                 <div className="text-xs text-gray-400">{flight.showMoreInfo[0].duration}</div>
//                             </div>
//                             <div className="flex flex-col items-center">
//                                 <FaPlaneArrival className="text-blue-500 text-2xl" />
//                                 <div className="font-semibold">{flight.titleName2}</div>
//                                 <div className="text-sm">{flight.place2}</div>
//                                 <div className="text-xs text-gray-500">{flight.time2}</div>
//                             </div>
//                         </div>
//                         <div className="flex items-center justify-between mt-4 border-t pt-4 text-gray-700">
//                             <div className="flex items-center">
//                                 <FaUser className="mr-1 text-gray-500" /> Passengers: {flight.passengers}
//                             </div>
//                             <div className="flex items-center">
//                                 <FaSuitcase className="mr-1 text-gray-500" /> {flight.refundable} - {flight.extra1}
//                             </div>
//                             <div>
//                                 <span className="text-lg font-bold text-green-500">{flight.newTaka}</span>
//                                 <span className="text-sm line-through text-gray-500 ml-2">{flight.oldTaka}</span>
//                             </div>
//                         </div>
//                         <button
//                             onClick={() => openBookingModal(flight)}
//                             className="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
//                         >
//                             Book Now
//                         </button>
//                     </div>
//                 ))
//             ) : (
//                 <div className="text-center text-gray-500 mt-5">No flights found. Try adjusting your search.</div>
//             )}

//             {selectedFlight && (
//                 <BookingModal flight={selectedFlight} onClose={closeBookingModal} />
//             )}
//         </div>
//     );
// };

// export default SearchResults;


// const SearchResults: React.FC<SearchResultsProps> = ({ results = [] }) => {
//     const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);

//     // Function to open modal with selected flight
//     const openBookingModal = (flight: Flight) => {
//         setSelectedFlight(flight);
//     };

//     // Function to close modal
//     const closeBookingModal = () => {
//         setSelectedFlight(null);
//     };

//     return (
//         <div className="py-5">
//             {results.length > 0 ? (
//                 results.map((flight) => (
//                     <div key={flight.id} className="mb-5 bg-white shadow-lg p-4 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl">
//                         <div className="flex justify-between items-center">
//                             <div className="text-lg font-semibold">
//                                 {flight.type} Flight - {flight.extra1}
//                             </div>
//                             <div className="text-sm text-gray-500">ID: {flight.id}</div>
//                         </div>
//                         <div className="flex items-center justify-between mt-4">
//                             <div className="flex flex-col items-center">
//                                 <FaPlaneDeparture className="text-blue-500 text-2xl" />
//                                 <div className="font-semibold">{flight.titleName1}</div>
//                                 <div className="text-sm">{flight.place1}</div>
//                                 <div className="text-xs text-gray-500">{flight.time1}</div>
//                             </div>
//                             <div className="flex flex-col items-center mx-4">
//                                 <FaClock className="text-gray-500" />
//                                 <div className="text-sm">{flight.performance}</div>
//                                 <div className="text-xs text-gray-400">{flight.showMoreInfo[0].duration}</div>
//                             </div>
//                             <div className="flex flex-col items-center">
//                                 <FaPlaneArrival className="text-blue-500 text-2xl" />
//                                 <div className="font-semibold">{flight.titleName2}</div>
//                                 <div className="text-sm">{flight.place2}</div>
//                                 <div className="text-xs text-gray-500">{flight.time2}</div>
//                             </div>
//                         </div>
//                         <div className="flex items-center justify-between mt-4 border-t pt-4 text-gray-700">
//                             <div className="flex items-center">
//                                 <FaUser className="mr-1 text-gray-500" /> Passengers: {flight.passengers}
//                             </div>
//                             <div className="flex items-center">
//                                 <FaSuitcase className="mr-1 text-gray-500" /> {flight.refundable} - {flight.extra1}
//                             </div>
//                             <div>
//                                 <span className="text-lg font-bold text-green-500">{flight.newTaka}</span>
//                                 <span className="text-sm line-through text-gray-500 ml-2">{flight.oldTaka}</span>
//                             </div>
//                         </div>
//                         <button
//                             onClick={() => openBookingModal(flight)}
//                             className="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
//                         >
//                             Book Now
//                         </button>
//                     </div>
//                 ))
//             ) : (
//                 <div className="text-center text-gray-500 mt-5">No flights found. Try adjusting your search.</div>
//             )}


//             {selectedFlight && (
//                 <BookingModal flight={selectedFlight} onClose={closeBookingModal} />
//             )}

            
//         </div>
//     );
// };

// export default SearchResults;


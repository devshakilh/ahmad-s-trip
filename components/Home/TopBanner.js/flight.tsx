// import React, { useState } from "react";
// import { CalendarIcon } from '@heroicons/react/20/solid'
// import "react-datepicker/dist/react-datepicker.css"
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'

// const FlightD = () => {
//     const [startDate, setStartDate] = useState(new Date());
//     const [location, setLocation] = useState('Dhaka')
//     const [arrivalDate, setArrivalDate] = useState(new Date())
//     const [departureDate, setDepartureDate] = useState(
//         new Date(arrivalDate.getTime() + 24 * 60 * 60 * 1000)
//     )
//     return (
//         <div>
//             <div className="p-4 h-48 divider-[1px] border-gray-300 mb-8 mt-3 rounded-sm">

//                 <div className="flex gap-6">
//                     <div className="flex">
//                         <div className="border-[1px]  border-gray-300 ml-3 p-3">
//                             <p className="text-[14px]">Flying form</p>
//                             <h4 className="text-[18px] font-bold ">
//                                 Dhaka
//                             </h4>
//                             <p className="text-[14px] font-semibold">DAC, Bangladesh, Hazrat Shahjala Inte...</p>
//                         </div>
//                         <div className="border-[1px]  border-gray-300 rounded-sm p-3">
//                             <p>Cox.Bazar</p>
//                             <h4 className="text-[18px] font-bold ">
//                                 Flying to

//                             </h4>
//                             <p className="text-[14px] font-semibold">CXB, Bangladesh, Hazrat Shahjala Inte...</p>
//                         </div>
//                     </div>

//                     <div className='flex justify-between '>
//                         <div className='  my-2 p-3 flex justify-between items-center border-[1px]  border-gray-300'>
//                             <div>
//                                 <p className='block text-sm text-gray-500'>From</p>
//                                 <DatePicker
//                                     selected={arrivalDate}
//                                     onChange={date => setArrivalDate(date)}
//                                     className=' bg-white'
//                                 />
//                             </div>

//                             <CalendarIcon className='h5 w-5' />
//                         </div>
//                         <div className='  my-2 p-3 flex justify-between items-center border-[1px]  border-gray-300 py-4'>
//                             <div className="">
//                                 <p className='block text-sm text-gray-500'>To</p>
//                                 <DatePicker
//                                     selected={departureDate}
//                                     onChange={date => setDepartureDate(date)}
//                                     className=' bg-white'
//                                 />
//                             </div>

//                             <CalendarIcon className='h5 w-5' />
//                         </div>
//                     </div>
//                 </div>
//                 <div className=" flex justify-center pt-8 mb-4 pb-4">
//                     <button className="bg-orange-400 font-bold  py-3 px-8 rounded-md text-xl text-white hover:bg-orange-500 ">Search Flights</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FlightD;
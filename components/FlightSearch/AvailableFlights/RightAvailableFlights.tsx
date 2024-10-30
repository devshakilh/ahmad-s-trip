import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  flightCart,
  flights,
  refundBaggage,
} from "../../../fake_data/availableFlight";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CgDollar } from "react-icons/cg";
import cart1 from "../../../assets/packages/RightCart1.png";
import cart2 from "../../../assets/packages/RightCart2.png";
import coin from "../../../assets/packages/tripCoin.png";
import AvailableSlider from "./AvailableSlider";
import { Flight } from "../../Home/HomeNew/Flight";

import { FaPlaneDeparture, FaPlaneArrival, FaClock, FaUser, FaSuitcase } from 'react-icons/fa';
import BookingModal from "../../Home/HomeNew/BookingModal";
import { useRouter } from "next/router";
import Link from "next/link";




interface RightAvailableFlightsProps {
  results: Flight[];
}


const RightAvailableFlights: React.FC = () => {
    const router = useRouter();
    const [flights, setFlights] = useState<Flight[]>([]);

    useEffect(() => {
        if (router.query.results) {
            try {
                const parsedResults = JSON.parse(router.query.results as string);
                setFlights(parsedResults);
            } catch (error) {
                console.error("Error parsing flight results:", error);
            }
        }
    }, [router.query.results]);
  const [showMore, setShowMore] = useState(false);
  const [infoId, setInfoId] = useState("");
  const [buttonId, setButtonId] = useState("s1");
  console.log(buttonId);


  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);

  // Function to open modal with selected flight
  const openBookingModal = (flight: Flight) => {
      setSelectedFlight(flight);
  };

  // Function to close modal
  const closeBookingModal = () => {
      setSelectedFlight(null);
  };


  return (
    <div>
      <h1 className="font-medium text-base leading-5 pb-[10px] mx-4 md:mx-0">
        3 Available Flights
      </h1>
      <div className="py-4">
        <AvailableSlider />
      </div>
      <div
        style={{ boxShadow: "0 1px 3px rgba(0,0,0,.16)" }}
        className="grid grid-cols-3 bg-[#fff] mb-6 rounded mx-4 md:mx-0 w-full"
      >
        {flights?.map((d) => {
          return (
            <button
              style={{
                transition: "all .2s ease-in",
                borderRight: "1px solid #e5e5ea",
              }}
              className="flex items-center py-1 px-4 hover:bg-[#346cdb] hover:text-white"
              key={d?.id}
            >
              {/* <p className="text-3xl mr-2 ">{d?.icon}</p>
              <p className="text-sm font-normal leading-[21px]">{d?.title}</p> */}
            </button>
          );
        })}
      </div>

      <div className="py-5">
      {flights.length > 0 ? (
                flights.map((flight) => (
                    <div key={flight.id} className="mb-5 bg-white shadow-lg p-4 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl">
                        <div className="flex justify-between items-center">
                            <div className="text-lg font-semibold">
                                {flight.type} Flight - {flight.extra1}
                            </div>
                            <div className="text-sm text-gray-500">ID: {flight.id}</div>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex flex-col items-center">
                                <FaPlaneDeparture className="text-blue-500 text-2xl" />
                                <div className="font-semibold">{flight.titleName1}</div>
                                <div className="text-sm">{flight.place1}</div>
                                <div className="text-xs text-gray-500">{flight.time1}</div>
                            </div>
                            <div className="flex flex-col items-center mx-4">
                                <FaClock className="text-gray-500" />
                                <div className="text-sm">{flight.performance}</div>
                                <div className="text-xs text-gray-400">{flight.showMoreInfo[0].duration}</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaPlaneArrival className="text-blue-500 text-2xl" />
                                <div className="font-semibold">{flight.titleName2}</div>
                                <div className="text-sm">{flight.place2}</div>
                                <div className="text-xs text-gray-500">{flight.time2}</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-4 border-t pt-4 text-gray-700">
                            <div className="flex items-center">
                                <FaUser className="mr-1 text-gray-500" /> Passengers: {flight.passengers}
                            </div>
                            <div className="flex items-center">
                                <FaSuitcase className="mr-1 text-gray-500" /> {flight.refundable} - {flight.extra1}
                            </div>
                            <div>
                                <span className="text-lg font-bold text-green-500">{flight.newTaka}</span>
                                <span className="text-sm line-through text-gray-500 ml-2">{flight.oldTaka}</span>
                            </div>
                        </div>
                        <button
                            onClick={() => openBookingModal(flight)}
                            className="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                            Book Now
                        </button>
                    </div>
                ))
            ) : (
                <div className="text-center text-gray-500 mt-5 mb-12">No flights found. Try adjusting your search.  <Link href='/' className="text-l underline font-semibold">Got to new search </Link></div>
               
            )}


            {selectedFlight && (
                <BookingModal flight={selectedFlight} onClose={closeBookingModal} />
            )}

            
        </div>

      {flightCart?.map((d) => {
        return (
          <div key={d?.id}>
            <div
              style={{ transition: "box-shadow .3s ease-in" }}
              className="mb-5 rounded bg-[#fff] shadow-[0_1px_3px_rgba(0,0,0,0.16)] hover:shadow-[0_1px_3px_rgba(0,0,0,0.9)] ml-4 md:ml-0"
            >
              <div>
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="flex items-center w-full p-4">
                    <div className="flex items-center w-1/2">
                      <div className="w-12">
                        <Image className="w-10 h-10" src={cart1} alt="" />
                      </div>
                      <div>
                        <h2 className="text-xl font-normal leading-[30px]">
                          <span className="mr-2">{d?.titleName1}</span>
                          <strong>{d?.titleDate1}</strong>
                        </h2>
                        <p className="text-[#4c4c4c] text-xs font-normal leading-[18px]">
                          {d?.place1}
                        </p>
                        <p className="text-[#4c4c4c] text-xs font-normal leading-[18px]">
                          {d?.time1}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center w-1/2">
                      <div className="w-20">
                        <Image className="w-10 h-10" src={cart2} alt="" />
                        <p className="text-[#4c4c4c] text-sm font-normal leading-[18px]">
                          {d?.extra1}
                        </p>
                        <p className="text-[#4c4c4c] text-xs font-normal leading-[18px]">
                          18h 10m
                        </p>
                      </div>
                      <div>
                        <h2 className="text-xl font-normal leading-[30px]">
                          <span className="mr-2">{d?.titleName2}</span>{" "}
                          <strong>{d?.titleDate2}</strong>
                        </h2>
                        <p className="text-[#4c4c4c] text-xs font-normal leading-[18px]">
                          {d?.place2}
                        </p>
                        <p className="text-[#4c4c4c] text-xs font-normal leading-[18px]">
                          {d?.time2}
                        </p>
                      </div>
                    </div>
                    {/* <div className="flex">
                      <Image className="mr-2 h-6 w-6" src={coin} alt="" />
                      <h4 className="font-medium text-base">14,459</h4>
                    </div> */}
                  </div>
                  <div className="bg-[#e3f2ff] w-full md:w-1/2 px-4 text-right">
                    <p className="text-left md:text-right">{d?.performance}</p>
                    <p className="pt-2 text-xs font-medium leading-[18px] mr-1 text-right">
                      {d?.refundable}
                    </p>
                    <h3 className="text-2xl font-medium leading-9 text-[#235fd8] pr-2 text-left md:text-right pt-4 md:pt-0">
                      BDT <span>{d?.newTaka}</span>
                    </h3>
                    <h4 className="text-base font-semibold leading-6 pr-2 text-[#235fd8] text-left md:text-right">
                      <del>
                        BDT <span>{d?.oldTaka}</span>
                      </del>
                    </h4>
                    <button
                      style={{
                        boxShadow:
                          "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
                        transition:
                          "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                      }}
                      className="bg-[#1882ff] py-[6px] px-4 rounded font-medium text-sm text-white mr-2 mb-12 md:mb-6 mt-4"
                    >
                      BOOK NOW
                    </button>
                    <div
                      className={`${
                        d?.id === infoId && showMore ? "hidden" : "block"
                      }`}
                    >
                      <button
                        onClick={() => {
                          setInfoId(d?.id), setShowMore(!showMore);
                        }}
                        className="pb-3 text-base font-semibold leading-6 text-[#1882ff] text-right"
                      >
                        {d?.id === infoId && showMore
                          ? "Show Less"
                          : "Show More"}{" "}
                        <MdOutlineKeyboardArrowDown className="inline" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="border-y-[1px] border-[#e5e5ea]">
                  {d?.id === infoId &&
                    showMore &&
                    d?.showMoreInfo?.map((s) => {
                      return (
                        <div
                          className="w-full flex flex-col md:flex-row"
                          key={s?.id}
                        >
                          <div className="border-r-[1px] border-[#e5e5ea] w-full md:w-7/12">
                            <div className="px-5 py-4 w-full">
                              <button
                                style={{
                                  boxShadow:
                                    "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
                                  transition:
                                    "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                                }}
                                className="bg-[#1882ff] border-[#1882ff] py-3 min-h-8 w-32 px-4 rounded font-medium text-sm text-white mr-2 mb-6"
                              >
                                DAC - KUL
                              </button>
                              <div className="flex items-center">
                                <Image className="w-5 h-5" src={cart1} alt="" />
                                <p className="text-[#4c4c4c] text-xs font-semibold leading-[18px]">
                                  {s?.serviceId}{" "}
                                  <span className="font-normal">
                                    {s?.serviceName}
                                  </span>
                                </p>
                              </div>
                              <div className="flex items-center w-full justify-between">
                                <div className="w-1/2">
                                  <div>
                                    <h2 className="text-xl font-normal leading-[30px]">
                                      <span className="mr-2">
                                        {s?.titleName1}
                                      </span>
                                      <strong>{s?.titleDate1}</strong>
                                    </h2>
                                    <p className="text-[#4c4c4c] text-xs font-normal leading-[18px]">
                                      {s?.place1}
                                    </p>
                                    <p className="text-[#4c4c4c] text-xs font-normal leading-[18px]">
                                      {s?.time1}
                                    </p>
                                  </div>
                                </div>
                                {/* *********************************** */}
                                <div className="w-1/2">
                                  <div className="flex items-center">
                                    <div className="w-20">
                                      <Image
                                        className="w-10 h-10"
                                        src={cart2}
                                        alt=""
                                      />
                                      <p className="text-[#4c4c4c] text-xs font-normal leading-[18px]">
                                        18h 10m
                                      </p>
                                    </div>
                                    <div>
                                      <h2 className="text-xl font-normal leading-[30px]">
                                        <span className="mr-2">
                                          {s?.titleName2}
                                        </span>{" "}
                                        <strong>{s?.titleDate2}</strong>
                                      </h2>
                                      <p className="text-[#4c4c4c] text-xs font-normal leading-[18px]">
                                        {s?.place2}
                                      </p>
                                      <p className="text-[#4c4c4c] text-xs font-normal leading-[18px]">
                                        {s?.time2}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* *********************************** */}
                            <div className="px-5 py-4">
                              <h2 className="mb-3 font-medium leading-6 text-base">
                                Layover: 5h 55m
                              </h2>
                              <div className="flex items-center">
                                <Image className="w-5 h-5" src={cart1} alt="" />
                                <p className="text-[#4c4c4c] text-xs font-semibold leading-[18px]">
                                  {s?.serviceId}{" "}
                                  <span className="font-normal">
                                    {s?.serviceName}
                                  </span>
                                </p>
                              </div>
                              <div className="flex items-center w-full">
                                <div className="w-1/2">
                                  <div>
                                    <h2 className="text-xl font-normal leading-[30px]">
                                      <span className="mr-2">
                                        {s?.titleName1}
                                      </span>
                                      <strong>{s?.titleDate1}</strong>
                                    </h2>
                                    <p className="text-[#4c4c4c] text-xs font-normal leading-[18px]">
                                      {s?.place1}
                                    </p>
                                    <p className="text-[#4c4c4c] text-xs font-normal leading-[18px]">
                                      {s?.time1}
                                    </p>
                                  </div>
                                </div>
                                {/* *********************************** */}
                                <div className="w-1/2">
                                  <div className="flex items-center">
                                    <div className="w-20">
                                      <Image
                                        className="w-10 h-10"
                                        src={cart2}
                                        alt=""
                                      />
                                      <p className="text-[#4c4c4c] text-xs font-normal leading-[18px]">
                                        18h 10m
                                      </p>
                                    </div>
                                    <div>
                                      <h2 className="text-xl font-normal leading-[30px]">
                                        <span className="mr-2">
                                          {s?.titleName2}
                                        </span>{" "}
                                        <strong>{s?.titleDate2}</strong>
                                      </h2>
                                      <p className="text-[#4c4c4c] text-xs font-normal leading-[18px]">
                                        {s?.place2}
                                      </p>
                                      <p className="text-[#4c4c4c] text-xs font-normal leading-[18px]">
                                        {s?.time2}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-full md:w-5/12 flex justify-center items-start pt-5">
                            <div>
                              <div className="flex items-center justify-center">
                                <button
                                  onClick={() => setButtonId("s1")}
                                  className={`${
                                    buttonId === "s1" &&
                                    "bg-[#1882ff] text-[#fff]"
                                  } border-[1px] border-[#1882ff] min-h-8 w-[150px] p-1 text-sm font-medium leading-[18px]`}
                                >
                                  Refund Policy
                                </button>
                                <button
                                  onClick={() => setButtonId("s2")}
                                  className={`${
                                    buttonId === "s2" &&
                                    "bg-[#1882ff] text-[#fff]"
                                  } border-[1px] border-[#1882ff] min-h-8 w-[150px] p-1 text-sm font-medium leading-[18px]`}
                                >
                                  Baggage
                                </button>
                              </div>
                              {refundBaggage?.map((d) => {
                                return (
                                  <div key={d?.id}>
                                    {buttonId === "s1" ? (
                                      <div className="pt-5 pb-6 px-4">
                                        {d?.description?.map((s) => {
                                          return (
                                            <div key={s?.id}>
                                              <p className="text-xs mb-[10px] font-normal leading-[18px]">
                                                {s?.title}
                                              </p>
                                            </div>
                                          );
                                        })}
                                        <button className="text-sm font-semibold leading-[21px] text-[#1882ff]">
                                          Show More Information
                                        </button>
                                      </div>
                                    ) : (
                                      <>
                                        {d?.baggageInfo?.map((s) => {
                                          return (
                                            <div
                                              className="pt-5 pb-6"
                                              key={s?.id}
                                            >
                                              <div className="mb-2">
                                                <h3 className="font-bold leading-[25px] text-xl">
                                                  {s?.place1}
                                                </h3>
                                                <div className="flex items-center justify-between mb-2">
                                                  <p className="text-xs font-normal leading-[18px]">
                                                    Baggage:
                                                  </p>
                                                  <p className="text-xs font-medium leading-[18px]">
                                                    {s?.kg1} / person
                                                  </p>
                                                </div>
                                              </div>
                                              <div>
                                                <h3 className="font-bold leading-[25px] text-xl">
                                                  {s?.place2}
                                                </h3>
                                                <div className="flex items-center justify-between">
                                                  <p className="text-xs font-normal leading-[18px]">
                                                    Baggage:
                                                  </p>
                                                  <p className="text-xs font-medium leading-[18px]">
                                                    {s?.kg2} / person
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          );
                                        })}
                                      </>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
                <div
                  className={`${
                    d?.id === infoId && showMore ? "block" : "hidden"
                  }`}
                >
                  <div className="flex pl-4 items-center justify-between">
                    <div className="flex">
                      <Image className="mr-2 h-6 w-6" src={coin} alt="" />
                      <h4 className="font-medium text-base">14,459</h4>
                    </div>
                    <button
                      onClick={() => {
                        setInfoId(d?.id), setShowMore(!showMore);
                      }}
                      className="pb-3 text-base font-semibold leading-6 text-[#1882ff] bg-[#e3f2ff] pt-2 pr-4 pl-28"
                    >
                      {d?.id === infoId && showMore ? "Show Less" : "Show More"}{" "}
                      <MdOutlineKeyboardArrowDown className="inline" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RightAvailableFlights;


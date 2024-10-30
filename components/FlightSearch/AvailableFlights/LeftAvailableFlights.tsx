import React, { useEffect, useState } from "react";
import { MdGroups2 } from "react-icons/md";
import {
  availableFlight,
  availableOption,
} from "../../../fake_data/availableFlight";
import MultiRangeSliders from "./MultiRangeSliders";

const LeftAvailableFlights = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    var timer:any;
    timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000)
    return () => clearInterval(timer);
  })

  return (
    <div>
      <div
        style={{ boxShadow: "0 1px 3px rgba(0,0,0,.16)" }}
        className="bg-[#fff] rounded p-4 mb-2 mx-4 md:mx-0"
      >
        <h1 className="pb-[10px] text-xs font-normal leading-[18px] text-center">
          Book Now before it gets sold out.
        </h1>
        <div className="flex justify-center">
          <div>
            <button className="pt-[5px] bg-[#1882ff] w-[50px] h-[31px] text-center text-[#fff] font-semibold inline-block text-base  leading-6">
            {minutes<10? "0"+minutes:minutes}
            </button>
            <p className="text-[10px] font-normal leading-[15px] text-center pt-1">
              min
            </p>
          </div>
          <span className="text-[#1882ff] text-base font-semibold mx-2">:</span>
          <div>
            <button className="pt-[5px] bg-[#1882ff] w-[50px] h-[31px] text-center text-[#fff] font-semibold inline-block text-base  leading-6">
              {seconds<10? "0"+seconds:seconds}
            </button>
            <p className="text-[10px] font-normal leading-[15px] text-center pt-1">
              sec
            </p>
          </div>
        </div>
      </div>
      <div
        style={{ boxShadow: "0 1px 3px rgba(0,0,0,.16)" }}
        className="bg-[#fff] rounded mb-6 flex items-center p-4 mx-4 md:mx-0"
      >
        <MdGroups2 className="text-[#1882ff] mr-2" />
        <p className="text-[10px] font-normal leading-[15px]">
          <span>11</span> people are looking at this flight.
        </p>
      </div>
      <div
        style={{ boxShadow: "0 1px 3px rgba(0,0,0,.16)" }}
        className="bg-[#fff] rounded mx-4 md:mx-0"
      >
        <div
          style={{
            borderBottom: "1px solid rgb(245, 245, 245)",
            paddingBottom: "16px",
          }}
          className="mb-6 flex items-center justify-between p-4"
        >
          <p className="font-normal text-sm leading-5">Sort & Filter</p>
          <button
            style={{
              transition:
                "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            }}
            className="text-[#1882ff] hover:bg-[#eaedf0] min-w-16 px-2 rounded leading-7 text-base font-medium"
          >
            RESET
          </button>
        </div>
        <div className="mx-[10px] border-b-[1px] border-[#e0e0e1] mb-4">
          <h2 className="font-medium text-base leading-5 pb-[10px]">
            Price Range
          </h2>
        </div>
        <div
          style={{
            borderBottom: "1px solid rgb(245, 245, 245)",
            paddingBottom: "16px",
          }}
          className="px-[10px]"
        >
          <div className="flex justify-between items-center pb-2">
            <div>
              <p className="mb-1 text-xs font-normal leading-[18px]">
                Minimum Price
              </p>
              <h3 className="text-base font-bold leading-6">423,574</h3>
            </div>
            <div>
              <p className="mb-1 text-xs font-normal leading-[18px]">
                Maximum Price
              </p>
              <h3 className="text-base font-bold leading-6">2,659,605</h3>
            </div>
          </div>
          <MultiRangeSliders min={0} max={1000} />
        </div>
        <div className="mx-[10px] border-b-[1px] border-[#e0e0e1] pt-4 mb-4">
          <h2 className="font-medium text-base leading-5 pb-[10px]">
            Schedule
          </h2>
        </div>
        <div
          style={{
            borderBottom: "1px solid rgb(245, 245, 245)",
            paddingBottom: "16px",
          }}
        >
          {availableFlight?.map((d) => {
            return (
              <div key={d?.id}>
                <div className="mx-[10px] pt-4 pb-1">
                  <p className="font-normal text-sm leading-5 mb-[10px]">
                    {d?.title}
                  </p>
                  <div>
                    {d?.time?.map((t) => {
                      return (
                        <button
                          className="flex items-center text-base leading-6 text-[#212121] py-2 rounded px-2 mb-[6px] border-[1px] border-[#efeff4] hover:border-[#007bff] w-full bg-[#fff]"
                          key={t?.id}
                        >
                          <p className="mr-2 text-2xl">{t?.icon}</p>
                          <p className="font-medium leading-6">{t?.title}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          {availableOption?.map((d) => {
            return (
              <div
                key={d?.id}
                style={{
                  borderBottom: "1px solid rgb(245, 245, 245)",
                  paddingBottom: "16px",
                }}
                className="py-4"
              >
                <div className="mx-[10px] border-b-[1px] border-[#e0e0e1] mb-4">
                  <h2 className="font-medium text-base leading-5 pb-[10px]">
                    Number of Stops
                  </h2>
                </div>
                {d?.options?.map((s) => {
                  return (
                    <div className="flex items-center" key={s?.id}>
                      <label className="label cursor-pointer">
                        <input
                          type="checkbox"
                          className="checkbox-sm checkbox-info m-[9px] cursor-pointer"
                        />
                        {s?.title.length > 20 ? (
                          <span className="text-base font-normal leading-6 text-[#000000] label-text">
                            {s?.title.slice(0, 19)}...
                          </span>
                        ) : (
                          <span className="text-base font-normal leading-6 text-[#000000] label-text">
                            {s?.title}
                          </span>
                        )}
                      </label>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeftAvailableFlights;

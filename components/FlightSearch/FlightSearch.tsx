import React from "react";

const FlightSearch = () => {
  return (
    <div className="bg-[#f7f7f8]">
      <div className="main-container">
        <div className="flex flex-col md:flex-row items-center justify-between pt-[9px] pb-[14px]">
          <div>
            <h1 className="font-medium uppercase text-[#000] text-xl md:text-2xl flex flex-col md:flex-row items-center">
              DAC(DHAKA) - KUL(KUALA LUMPUR){" "}
              <span className="text-base">(ECONOMY)</span>
            </h1>
            <p className="text-base font-normal leading-6 block md:hidden text-center py-2">
              21st April 2023 | Adult: 6
            </p>
            <p className="text-base font-normal leading-6 hidden md:block">
              29th March 2023 - 21st April 2023 | Adult: 6, | Child: 1, |
              Infant: 1
            </p>
          </div>
          <button
            style={{
              boxShadow:
                "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
              transition:
                "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            }}
            className="py-2 px-[22px] bg-[#1882ff] min-w-16 leading-7 rounded text-[#fff] font-medium  text-[15px] uppercase"
          >
            Modify Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightSearch;

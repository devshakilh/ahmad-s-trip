import React from "react";
import LeftAvailableFlights from "./LeftAvailableFlights";
import RightAvailableFlights from "./RightAvailableFlights";

const AvailableFlights = () => {
  return (
    <div className="section">
      <div className="main-container">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-3/12 md:mr-8">
            <LeftAvailableFlights />
          </div>
          <div className="w-full md:w-9/12">
            <RightAvailableFlights />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableFlights;

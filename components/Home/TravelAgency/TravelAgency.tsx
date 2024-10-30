import Image from "next/image";
import React from "react";
import img from "../../../assets/home/bangladeshs-leading-online-travel-agency-2020.webp";
import Bikash from "../../Bikash/Bikash";

const TravelAgency = () => {
  return (
    <div className="bg-[#fff] py-[72px]">
     
      <div className="main-container">
        <div>
          <p className="text-xl font-normal leading-[25px] text-center">
            Leading Online Travel Agency
          </p>
          <h2 className="text-4xl font-semibold leading-[45px] text-center mt-1">
            Winning Multiple World Travel Awards
          </h2>
        </div>
        <div className="flex items-center justify-center mt-10">
          <Image
            className="rounded-lg max-w-[160px] md:max-w-[275px] mx-2 md:mx-[15px] object-cover"
            src={img}
            alt=""
          />
          <Image
            className="rounded-lg max-w-[160px] md:max-w-[275px] mx-2 md:mx-[15px] object-cover"
            src={img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TravelAgency;
 
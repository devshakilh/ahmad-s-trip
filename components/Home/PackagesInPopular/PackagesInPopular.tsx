import Image from "next/image";
import Link from "next/link";
import React from "react";
import img1 from "../../../assets/packages/1.jpg";
import logo from "../../../assets/packages/logo.svg";
import { packagesData } from "../../../fake_data/packagesInPopular";

const PackagesInPopular = () => {
  return (
    <div className="section bg-gray-100 py-12">
      <div className="main-container">
        <div className="px-4 md:px-0">
          <div className="mb-6">
            <h2 className="font-semibold text-[2rem] text-center md:text-left md:text-5xl text-gray-800 leading-tight transition duration-300 ease-in-out hover:text-blue-600">
              Packages in Popular Destinations
            </h2>
          </div>

          <Link href="/" className="relative w-full h-[45vh] hidden md:block group">
            <Image
              className="w-full h-full object-cover rounded-md transition-all duration-500 ease-in-out transform group-hover:scale-105"
              src={img1}
              alt="Popular destination image"
            />
            <div className="absolute bottom-0 left-0 leading-6 text-white w-fit p-8 bg-gradient-to-t from-black/70 to-transparent rounded-b-md">
              <div className="flex items-center">
                <Image className="h-[22px] mr-2 w-[22px]" src={logo} alt="Logo" />
                <p className="text-base">13 Packages</p>
              </div>
              <h2 className="text-4xl leading-[45px] mb-2 font-semibold">Colombo</h2>
              <p className="text-base">
                Starts From <strong>BDT 6,160</strong>
              </p>
            </div>
          </Link>

          <Link className="block md:hidden" href="/">
            <Image
              className="h-[300px] object-cover rounded-md transition-transform duration-500 ease-in-out transform hover:scale-105"
              src={img1}
              alt="Popular destination image"
            />
            <div className="py-4">
              <div className="flex mb-2 items-center">
                <Image className="h-[18px] w-[20px] mr-2" src={logo} alt="Logo" />
                <p className="text-[0.8125rem] leading-[18px] text-gray-500">13 Packages</p>
              </div>
              <h3 className="mb-2 font-medium text-xl text-gray-800">Colombo</h3>
              <p className="text-base text-blue-500 hover:text-blue-600">
                Starts From <strong>BDT 6,160</strong>
              </p>
            </div>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-7 mt-7">
            {packagesData?.map((d) => (
              <div key={d?.id} className="transform transition duration-500 ease-in-out hover:scale-105">
                <Link href="/" className="block group">
                  <Image
                    className="h-[300px] rounded-md transition-transform duration-500 ease-in-out transform group-hover:scale-105 object-cover"
                    src={d?.image}
                    alt={`${d?.state} destination image`}
                  />
                  <div className="py-4">
                    <div className="flex mb-2 items-center">
                      <Image className="h-[18px] w-[20px] mr-2" src={logo} alt="Logo" />
                      <p className="text-[0.8125rem] leading-[18px] text-gray-500">{d?.packages} Packages</p>
                    </div>
                    <h3 className="mb-2 font-medium text-xl text-gray-800 transition duration-300 ease-in-out hover:text-blue-600">
                      {d?.state}
                    </h3>
                    <p className="text-base text-blue-500 hover:text-blue-600">
                      Starts From <strong>BDT {d?.taka}</strong>
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesInPopular;

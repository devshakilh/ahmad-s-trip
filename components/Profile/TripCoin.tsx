import React from "react";
import img1 from "../../assets/profile/tripCoinDashboard.png";
import img2 from "../../assets/profile/tripCoin.png";
import Image from "next/image";

const TripCoin = () => {
  return (
    <div>
      <div className="bg-[#1882ff] p-[30px] rounded mb-2 text-white ">
        <div className="flex">
          <div>
            <Image src={img1} className="w-[225px] mr-[35px]" alt="" />
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-medium text-base">Available TripCoins</h3>
                <p className="text-xs font-normal">1 TripCoin = BDT 1</p>
              </div>
              <h2 className="font-medium text-4xl">150</h2>
            </div>
            <div className="flex justify-between items-center py-[10px] pl-2 pr-4 bg-[#0000001f] mb-2">
              <div className="flex items-center justify-start">
                <Image src={img2} className="h-6 w-6" alt="" />
                <h4>Pending TripCoins</h4>
              </div>
              <p>0</p>
            </div>
            <div className="flex justify-between items-center py-[10px] pl-2 pr-4 bg-[#0000001f] mb-2">
              <div className="flex items-center justify-start">
                <Image src={img2} className="h-6 w-6" alt="" />
                <h4>Expiring in 60 Days</h4>
              </div>
              <p>0</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center rounded-lg shadow-[0_2px_4px_rgba(0,0,0,.16)] bg-[#fff] py-3 px-5 my-2 w-full">
          <div className="flex items-center justify-start w-1/2">
            <Image src={img2} className="h-6 w-6 mr-4" alt="" />
            <h4 className="mr-4 w-2/6 font-medium text-base">Signup</h4>
            <p className="text-xs font-normal w-[100px] mr-4">Expiring in</p>
            <p className="text-xs font-medium">2 Apr 24</p>
          </div>
          <p className="text-base font-semibold">150</p>
        </div>
      </div>
    </div>
  );
};

export default TripCoin;

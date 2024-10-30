import Image from "next/image";
import Link from "next/link";
import React from "react";
import appStore from "../../../assets/home/appStore.png";
import playStore from "../../../assets/home/playStore.png";
import app from "../../../assets/home/app.png";


const DownloadShare = () => {
  return (
    <div className="bg-[#f5f5f5]">

      <div className="main-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <Image className="object-cover w-fit" src={app} alt="" />
          </div>
          <div className="ml-5 md:ml-0 my-10 md:my-0">
            <h2 className="text-2xl font-bold leading-[30px]">
              Download Sharetrip App and Earn Trip Coin.
            </h2>
            <div className="mt-6 flex items-center">
              <Link href="/">
                <Image className="object-cover w-fit" src={appStore} alt="" />
              </Link>
              <Link className="ml-6" href="/">
                <Image className="object-cover w-fit" src={playStore} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadShare;

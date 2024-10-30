import Image from "next/image";
import Link from "next/link";
import React from "react";
import { searchOtherData } from "../../../fake_data/searchOther";
import { IoIosArrowForward } from "react-icons/io";


const SearchOther = () => {
  return (
    <div className="section">
      <div className="main-container">

        <div className="px-4 md:px-0">
          <h2 className="font-medium text-[1.6875rem] text-center md:text-left md:text-4xl leading-tight mb-6">
            Search for other Top Airlines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {searchOtherData?.map((d) => {
              return (
                <div key={d?.id}>
                  <Link
                    className="flex items-center hover:shadow-[0px_4px_12px_rgba(0,0,0,0.15)] hover:rounded-lg justify-between px-4 pt-[10px] pb-4"
                    href="/"
                  >
                    <div className="flex items-center">
                      <Image
                        className="max-w-[36px] max-h-[36px]"
                        src={d?.image}
                        alt=""
                      />
                      <div>
                        <h3 className="text-[#000] font-normal text-xl leading-5 pl-3">
                          {d?.title}
                        </h3>
                      </div>
                    </div>
                    <IoIosArrowForward className="text-[#1882ff]" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchOther;

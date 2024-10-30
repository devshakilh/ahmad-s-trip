import Image from "next/image";
import React from "react";
import { searchForData } from "../../../fake_data/searchFor";
import logo from "../../../assets/packages/cartLogo.svg";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";


const SearchFor = () => {
  return (
    <div className="section">
      <div className="main-container">

        <div className="px-4 md:px-0">
          <h2 className="font-medium text-[1.6875rem] text-center md:text-left md:text-4xl leading-tight mb-6">
            Search for cheapest flights in popular route
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {searchForData?.map((d) => {
              return (
                <div key={d?.id}>
                  <Link
                    className="flex items-center hover:shadow-[0px_4px_12px_rgba(0,0,0,0.15)] hover:rounded-lg justify-between px-4 py-[10px]"
                    href="/"
                  >
                    <div className="flex items-center">
                      <Image src={logo} alt="" />
                      <div className="pl-5">
                        {d?.title.length > 15 ? (
                          <h3 className="text-[#000] font-normal text-xl leading-5">
                            {d?.title.slice(0, 15)}...
                          </h3>
                        ) : (
                          <h3 className="text-[#000] font-normal text-xl leading-5">
                            {d?.title}
                          </h3>
                        )}
                        <p className="mb-[10px] text-base leading-6 font-normal">
                          From{" "}
                          <strong>
                            <span>BDT {d?.taka}</span>
                          </strong>
                        </p>
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

export default SearchFor;

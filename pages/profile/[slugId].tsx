import React, { useState } from "react";
import { sideNav } from "../../fake_data/profile";
import Link from "next/link";
import { useRouter } from "next/router";
import Bikash from "../../components/Bikash/Bikash";

const Profile = () => {
  const router = useRouter();
  const getCurrentPage = () => {
    const currentPage = sideNav.find((s) => s?.link === router.query.slugId);
    return currentPage;
  }
  // console.log(getCurrentPage(), router);

  return (
    <div className="section">
      <div className="main-container">
        <Bikash />
        <div className="flex flex-col md:flex-row w-full">
          <div className="border-[1px] border-[#efefef] rounded bg-[#fff] w-4/12 md:mx-[15px] h-[400px]">
            {sideNav?.map((d, i) => {
              return (
                <div key={i}>
                  <Link
                    className={`${
                      d?.link === getCurrentPage()?.link ? "bg-[#1882ff] text-[#fff] rounded" : ""
                    } flex items-center justify-start text-base font-medium py-3 px-4 leading-6`}
                    href={`/profile/${d?.link}`}
                  >
                    <h3 className="mr-2">{d?.logo}</h3>
                    <p>{d?.title}</p>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="w-8/12 md:mx-[15px]">
            {getCurrentPage()?.element}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import Image from "next/image";
import React, {useState} from "react";
import banner from "../../assets/visa-details/banner.jpg";
import tripCoin from "../../assets/visa-details/tripCoin.png";
import styles from "./visaDetails.module.css";
import { TbCurrency } from "react-icons/tb";
import { AiFillClockCircle, AiOutlineCheck } from "react-icons/ai";
import { HiInformationCircle } from "react-icons/hi2";
import { askedQuestions, visaDetailsDB } from "../../fake_data/visaDetails";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const VisaDetails = () => {
    const [openQuestion, setOpenQuestion] = useState(false);
    const [questionId, setQuestionId] = useState("s1")

  return (
    <div className="bg-[#fafafa] w-full">
      <Image
        className={`${styles.banner} w-full h-[30vh] md:h-[50vh] object-cover object-center`}
        src={banner}
        alt=""
      />
      <div className="section">
        <div className="main-container">
          <div className="flex flex-col md:flex-row mx-4 md:mx-0 items-start justify-between">
            <div className="w-full md:w-8/12 pr-0 md:pr-[15px]">
              <h3 className="text-xl font-normal leading-[30px] mb-[10px]">
                Tourist Visa Only
              </h3>
              <h1 className="text-4xl font-normal leading-[30px] mb-[10px]">
                Tourist Visa Only
              </h1>
              <div className="flex items-center justify-start pb-12">
                <p className="text-base mr-4 font-normal leading-[30px]">
                  Visa Required
                </p>
                <TbCurrency className="text-base mr-4 font-normal leading-[30px]" />
                <p className="text-base mr-4 font-normal leading-[30px]">
                  Currency <strong>MYR</strong>
                </p>
                <AiFillClockCircle className="text-base mr-4 font-normal leading-[30px]" />
                <p className="text-base mr-4 font-normal leading-[30px]">
                  Local Time <strong>GMT + 8</strong>
                </p>
              </div>
              <div className="bg-white flex items-center justify-start rounded-lg p-1">
                <Image className="mx-[10px] w-12 h-12" src={tripCoin} alt="" />
                <div className="font-normal">
                  <p className="text-xs">Earn TripCoin</p>
                  <p className="text-base">0</p>
                </div>
                <p className="text-xs font-normal mx-10">OR</p>
                <div>
                  <p className="text-xs">Redeem TripCoin</p>
                  <p className="text-base">0</p>
                </div>
              </div>
              <div className="bg-white rounded-lg py-6 px-8 mt-4">
                <h1 className="text-2xl font-medium mb-4">
                  Required Documents for E-Visa (Malaysia)
                </h1>
                <div>
                  {visaDetailsDB?.map((d) => {
                    return (
                      <div className="mt-4" key={d?.id}>
                        <h4 className="text-xl font-medium mb-4">
                          {d?.title}:
                        </h4>
                        <div>
                          {d?.descrption?.map((s) => {
                            return (
                              <div
                                className="flex items-center justify-start font-normal text-base leading-6 py-1"
                                key={s?.id}
                              >
                                <AiOutlineCheck className="mr-2 text-[#43a046]" />
                                <p className="">{s?.title}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="bg-white rounded-lg py-6 px-8 my-8">
                <h3 className="text-2xl font-medium mb-4">Important Notes</h3>
                <p className="flex items-center justify-start font-normal text-base leading-6 py-1">Visa rate may change without any prior notice</p>
                </div>
                <div className="bg-white rounded-lg py-6 px-8 mt-6 mb-[8rem]">
                <h3 className="text-2xl font-medium mb-4">Frequently Asked Questions</h3>
                <div>
                    {
                        askedQuestions?.map((d) => {
                            return (
                                <div key={d?.id} style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px", transition: "margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"}} className="text-base px-4 mb-5 bg-white">
                                    <div onClick={() => {setQuestionId(d?.id), setOpenQuestion(!openQuestion)}} className="flex items-center justify-between cursor-pointer">
                                        <h3 className="my-5 font-semibold">{d?.title}</h3>
                                        {
                                            openQuestion ? <IoIosArrowUp /> : <IoIosArrowDown />
                                        }
                                    </div>
                                    {
                                        d?.id === questionId && openQuestion && <p className="font-normal pt-4 pb-6">{d?.description}</p>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                {/* <div style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px", transition: "margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"}} className="text-base px-4 mb-5 bg-white">
                    <div className="flex items-center justify-between cursor-pointer">
                    <h3 className="my-5 font-semibold">What is a visa and what are the different types of visa?</h3>
                    <IoIosArrowDown />
                    </div>
                    <p className="font-normal pt-4 pb-6">Visa is a document which you need to travel to a country legally. Some of the important visa types are Tourist Visa, Transit Visa, Short Stay or Visitor Visa, Business Visa, Residence Visa, Immigrant Visa, and Medical Visa.</p>
                </div> */}
              </div>
            </div>
            <div className="w-full md:w-4/12 rounded-lg mb-4 shadow-[0_2px_4px_rgba(0,35,11,.2)] bg-[#fff] mx-0 md:mx-[15px]">
              <div className="p-3">
                <h4 className="pb-2 text-xl font-normal">
                  E-Visa (Malaysia) Type:E-Visa
                </h4>
                <div className="flex items-center justify-start">
                  <div className="w-1/2 font-normal">
                    <p className="text-xs">Validity</p>
                    <h5 className="text-base mb-[10px]">90 Days</h5>
                  </div>
                  <div className="w-1/2 font-normal">
                    <p className="text-xs">Max Stay</p>
                    <h5 className="text-base mb-[10px]">30 Days</h5>
                  </div>
                </div>
                <h4 className="text-base mb-[10px] flex items-center">
                  BDT 5,000/<span className="text-xs">person</span>
                </h4>
                <h3 className="mt-4 flex items-center text-xs text-[#fca213]">
                  <HiInformationCircle className="mr-2" />
                  Visa fee & service charge can be change
                </h3>
              </div>
              <button
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px",
                  transition:
                    "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                }}
                className="uppercase py-2 px-[22px] text-[15px] text-white bg-[#1882ff] w-full rounded"
              >
                Select Offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaDetails;

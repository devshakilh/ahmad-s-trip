import React, { useRef, useState, useMemo } from "react";
import { FaPassport, FaUser } from "react-icons/fa";
import { useForm } from "react-hook-form";
import styles from "./myAccount.module.css";
import { HiUsers } from "react-icons/hi2";
import { BsCalendar2Event, BsTelephoneFill } from "react-icons/bs";
// import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import Select from "react-select";
import countryList from "react-select-country-list";
import { AiFillFlag } from "react-icons/ai";
import { RiHome2Fill } from "react-icons/ri";
import { MdMapsHomeWork } from "react-icons/md";
import { IoMdCloudUpload } from "react-icons/io";
// import Calendar from 'react-input-calendar';

const MyAccount = () => {
  // const [value, onChange] = useState(new Date());
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value: any) => {
    setValue(value);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log("Data", data);
  }

  console.log(watch("example"));

  return (
    <div>
      <div className="text-center mb-28">
        <h4 className="text-base font-medium leading-6 mb-[10px]">
          bikashdey1220@gmail.com
        </h4>
        <label
          className="cursor-pointer uppercase text-[#1882ff] border-[#1882ff] border-[1px] hover:text-white hover:bg-[#1882ff] py-[6px] px-3 font-bold text-base rounded"
          htmlFor="inputTag"
        >
          Upload New Photo
          <input id="inputTag" className="hidden" type="file" />
        </label>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <FaUser className="mr-4" />
            <div className="mx-[5px] w-2/12 mb-4">
              <label className={`${styles.label}`} htmlFor="">
                Title
              </label>
              <br />
              <select
                className={`${styles.inputs} w-full`}
                {...register("title", { required: true })}
              >
                <option value="Mr">Mr</option>
                <option value="Ms">Ms</option>
                <option value="Mrs">Mrs</option>
                <option value="Dr">Dr</option>
                <option value="Engr">Engr</option>
                <option value="Miss">Miss</option>
                <option value="Master">Master</option>
              </select>
              {errors.title && <span>Title is required</span>}
            </div>
            <div className="mx-[5px] w-5/12 mb-4">
              <label className={`${styles.label}`} htmlFor="">
                Academy Name
              </label>
              <br />
              <input
                type="text"
                className={`${styles.inputs} w-full`}
                // value="Given Name"
                defaultValue=""
                {...register("academyName", { required: true })}
              />
              {errors.academyName && <span>Academy Name is required</span>}
            </div>
            <div className="mx-[5px] w-5/12 mb-4">
              <label className={`${styles.label}`} htmlFor="">
                Sur Name
              </label>
              <br />
              <input
                type="text"
                className={`${styles.inputs} w-full`}
                // value="Sur Name"
                {...register("surName", { required: true })}
              />
              {errors.surName && <span>Sur Name is required</span>}
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-start items-center">
            <HiUsers className="mr-4" />
            <select
              className={`${styles.inputs} w-full mx-[5px] mb-4`}
              {...register("gender", { required: true })}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {errors.gender && <span>Gender is required</span>}
          </div>
          <div className="flex flex-col md:flex-row justify-start items-center">
            <BsTelephoneFill className="mr-4" />
            <div className="mx-[5px] w-full mb-4">
              <label className={`${styles.label}`} htmlFor="">
                Mobile Number
              </label>
              <br />
              <input
                type="text"
                className={`${styles.inputs} w-full`}
                // value="Mobile Number"
                defaultValue=""
                {...register("number", { required: true })}
              />
              {errors.number && <span>Mobile Number is required</span>}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-start items-center">
            <BsCalendar2Event className="mr-4" />
            <div className="mx-[5px] w-full mb-4">
              <label className={`${styles.label}`} htmlFor="">
                Date of Birth
              </label>
              <br />
              {/* <Calendar onChange={onChange} value={value} /> */}
              <input
                type="date"
                className={`${styles.inputs} w-full`}
                // value="Date of Birth"
                defaultValue=""
                {...register("birth", { required: true })}
              />
              {errors.birth && <span>Date of Birth Year is required</span>}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-start items-center">
            <AiFillFlag className="mr-4" />
            <div className="mx-[5px] w-full mb-4">
              <label className={`${styles.label}`} htmlFor="">
                Nationality
              </label>
              <br />
              <Select
                className={`${styles.inputs} w-full`}
                options={options}
                {...register("nationality")}
                value={value}
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-start items-center">
            <RiHome2Fill className="mr-4" />
            <div className="mx-[5px] w-full mb-4">
              <label className={`${styles.label}`} htmlFor="">
                Address
              </label>
              <br />
              <input
                type="text"
                className={`${styles.inputs} w-full`}
                // value="Address"
                defaultValue=""
                {...register("address", { required: true })}
              />
              {errors.address && <span>Address is required</span>}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-start items-center">
            <MdMapsHomeWork className="mr-4" />
            <div className="mx-[5px] w-full mb-4">
              <label className={`${styles.label}`} htmlFor="">
                Post Code
              </label>
              <br />
              <input
                type="text"
                className={`${styles.inputs} w-full`}
                // value="Post Code"
                defaultValue=""
                {...register("postCode", { required: true })}
              />
              {errors.postCode && <span>Post Code is required</span>}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-start items-center">
            <FaPassport className="mr-4" />
            <div className="mx-[5px] w-full mb-4">
              <label className={`${styles.label}`} htmlFor="">
                Passport Number
              </label>
              <br />
              <input
                type="text"
                className={`${styles.inputs} w-full`}
                // value="Passport Number"
                defaultValue=""
                {...register("passportNumber", { required: true })}
              />
              {errors.passportNumber && (
                <span>Passport Number is required</span>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-start items-center mb-4">
            <FaPassport className="mr-4" />
            <div className="mx-[5px] w-full mb-4">
              <label className={`${styles.label}`} htmlFor="">
                Passport Expiry Date
              </label>
              <br />
              <input
                type="text"
                className={`${styles.inputs} w-full`}
                // value="Passport Expiry Date"
                defaultValue=""
                {...register("passportDate", { required: true })}
              />
              {errors.passportDate && (
                <span>Passport Expiry Date is required</span>
              )}
            </div>
          </div>
          <div className="mb-2 pl-4 ml-5 flex flex-col md:flex-row items-center justify-between w-8/12">
            <div className="w-1/2 text-center pr-4">
              <p className="text-xs font-normal leading-[18px] mb-2">
                Passport Copy (max 2MB)
              </p>
              <label
                className="cursor-pointer uppercase text-[#1882ff] border-[#1882ff] border-[1px] py-3 px-5 w-full font-semibold bg-[#bdf] text-base rounded flex items-center justify-center"
                htmlFor="inputTag"
              >
                {" "}
                <IoMdCloudUpload className="mr-4" />
                UPLOAD
                <input
                  id="inputTag"
                  {...register("passportUpload", { required: true })}
                  className="hidden"
                  type="file"
                />
              </label>
            </div>

            <div className="w-1/2 text-center">
              <p className="text-xs font-normal leading-[18px] mb-2">
                Visa Copy (max 2MB)
              </p>
              <label
                className="cursor-pointer uppercase text-[#1882ff] border-[#1882ff] border-[1px] py-3 px-5 w-full font-semibold bg-[#bdf] text-base rounded flex items-center justify-center"
                htmlFor="inputTag"
              >
                {" "}
                <IoMdCloudUpload className="mr-4" />
                UPLOAD
                <input
                  id="inputTag"
                  {...register("visaUpload", { required: true })}
                  className="hidden"
                  type="file"
                />
              </label>
            </div>
          </div>
          <div className="w-8/12 pl-9 pt-10 pr-3">
            <input
              type="submit"
              className="px-10 py-[10px] border-[1px] border-[#006dee] bg-[#006dee] text-[#fff] shadow-[0_2px_2px_rgba(0,0,0,.24)] uppercase  text-base font-bold leading-6 w-1/2 rounded"
              value="Save"
            />
          </div>
          {/* <div className="flex justify-center items-center">
              <label htmlFor="" className="relative">
                <input
                  type="text"
                  className={`${styles.inputs} px-6 h-20 w-96 text-4xl bg-slate-300 border-2 rounded-lg border-white border-opacity-50 outline-none focus:border-blue-500 focus:text-white transition duration-200`}
                />
                <span
                  className={`${styles.inputText} text-4xl text-white text-opacity-80 absolute left-0 top-4 mx-6 px-2 transition duration-200`}
                >
                  input
                </span>
              </label>
            </div> */}
        </form>
      </div>
    </div>
  );
};

export default MyAccount;

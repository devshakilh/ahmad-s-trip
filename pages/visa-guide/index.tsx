import Image from 'next/image';
import React, { Component } from 'react'
import img1 from '../../assets/vector.svg'
// import { ReactCountryDropdown } from 'react-country-dropdown'
// import 'react-country-dropdown/dist/index.css'
import { ImSearch } from 'react-icons/im';
import styles from './styles.module.css'
const VisaGuide = () => {
    // const handleSelect = (country) => {
    //     console.log(country)
    // }
    return (
        <div>
            <div className={` ${styles.visaHeader} ${styles.bg}`}>
                <h1 className='text-[2.75rem]  lg:pl-[700px] text-[#1882ff]  font-bold pt-16 pb-10'>Visa Guide</h1>
                <p className='text-[1.25rem] lg:pr-[100px] text-[#1882ff] lg:pl-[700px] pb-24'>We provide outstanding travel visa processing facilities. <br /> Save yourself the hassle of running to and from travel <br /> agencies and get your processing done in a breeze with <br /> us.</p>
            </div>

            <div className='lg:flex justify-between lg:mx-24  shadow-lg rounded-lg -mt-6 bg-white mx-4'>
                <div className='lg:flex rounded-md '>
                    <button className='text-white bg-blue-500 hidden lg:block py-6 rounded-md rounded-r-none px-6 text-2xl'><ImSearch /></button>
                    <p className='text-black py-6 hidden lg:block px-6 text-[20px]'>Please select a country</p>
                </div>
                <div className='lg:flex gap-2 items-center text-center '>
                    <select className="select w-ful max-w- bg-gray-100 mt-3  lg:mt-0 text-black border-[1px]  border-gray-300 rounded-md lg:rounded-sm">

                        {/* <ReactCountryDropdown onSelect={handleSelect} countryCode='IN' /> */}
                        <option disabled selected>Thailand</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Central American Federation*</option>
                        <option>Antigua and Barbuda.</option>
                        <option>Brunswick and Lüneburg</option>
                    </select>
                    <br />
                    <button className='px-8  my-4 py-3 font-bold bg-blue-500 rounded-md justify-center text-white'> Go</button>
                </div>
            </div>
            <div className='pt-20 text-black text-[18px] font-[450] lg:px-24 lg:flex gap-6'>
                <div>
                    <div className='flex gap-20'>
                        <h1>Capital City</h1>
                        <h2>Bangkok</h2>
                    </div>
                    <div className='flex py-4 gap-[83px]'>
                        <h1>Local Time</h1>
                        <h2>GMT + 7</h2>
                    </div>
                    <div className='flex  gap-10'>
                        <h1>Telephone Code</h1>
                        <h2> +66</h2>
                    </div>
                    <div className='flex py-4 gap-[86px]'>
                        <h1> Bank Time</h1>
                        <h2>Closed on Saturday and Sunday</h2>

                    </div>
                    <div className='flex gap-14'>
                        <h1> Exchange Rate</h1>
                        <h2>1 USD is equivalent to 32.39 THB</h2>

                    </div>
                    <div className='flex py-4 gap-6'>
                        <h1> Exchange Address</h1>
                        <h2>18 & 20, Madani Avenue, Baridhara, Dhaka-1212 Bangladesh</h2>

                    </div>
                </div>
                <div className='w-2/5'>
                    <Image src={img1} className='text-blue-500 bg-blu ' alt='' />
                </div>
            </div>
            <div className='text-black lg:px-24 text-[18px] font-[450] px-4'>
                <div>
                    <h3 className='pb-8'>Visa Requirements</h3>
                    <p>Sharetrip Facilitates you with a Thailand visa from Bangladesh</p>
                    <p className='py-3 underline'>Thailand Visa Requirement</p>

                    <p className='py-3 underline'>Basic Document:-</p> </div>
                <h4>Seven (07) Months Valid Passport with last two Old Passport if have. (if an OLD passport is Lost then a GD copy with a translated notary must be required).</h4>
                <h3>Recent 2 copy photographs taken in the last 6 months (white background only, photo size 35 mm X 45 mm, Glossy paper)</h3>

                <h2 className='py-3'>Personal / Company Bank statement of last 06 months (Minimum balance BDT 60,000 for each applicant)</h2>
                <h2>Visiting Card</h2>
                <p className='pt-3'>Bank Solvency Certificate           </p>
                <div>
                    <h2 className='pt-10 pb-3 underline'>For Business Person:- </h2>
                    <p>Renewal Trade license copy with notary public (English Translated) <br />
                        Memorandum for Limited Company <br />
                        Office Pad / Company Letter Head Pad</p>
                </div>
                <div>
                    <h1 className='underline py-4'>For Job Holder:-</h1>
                    <p>No Objection Certificate (NOC) & Employee (with an official Cell phone and TnT numbers).</p>
                </div>

                <div>
                    Visa Fee: BDT 5,200 (Non-refundable) <br />
                    Note:  Delivery Time (5 to 7) working days <br />
                    Note: Visa validity 3 months, single entry <br />
                    Note: Visa rate can be changed without prior notice <br />
                    Note: Visa issuance rights reserved by the Embassy
                </div>
            </div>
        </div>
    );
};

export default VisaGuide;
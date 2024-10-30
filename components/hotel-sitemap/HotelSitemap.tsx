import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';


const HotelSitemap = () => {
    const [countryData, setCountryData] = useState<any>([])

    const router = useRouter();

    useEffect(() => {
        // fetch("https://restcountries.com/v3.1/all?fields=name,flags")
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountryData(data))

    }, [])

    console.log(countryData)
    return (
        // ================== Arko Roy Badhon ==============
        <div className='main-container py-14'>
            <span>(Dev: Arko, Date: 1-4-2023, Responsive: Arko)</span>
            <h2 className="pb-10 text-[1.68rem] md:text-[2.25rem] text-[#4c4c4c] font-extrabold md:text-center mx-5 md:mx-0">Choose your country</h2>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 md:mx-0">
                {
                    countryData?.map((countryinfo: any, i: number) => {
                        const text = countryinfo?.altSpellings[0];
                        const textArr = text.split("%")
                        const result = textArr[0]

                        return (
                            <div key={i} className="flex gap-2 text-[#4c4c4c] hover:translate-x-1 transition-all ease-in-out">
                                <Image className='rounded-sm' src={countryinfo?.flags?.png} alt={countryinfo?.flags?.alt} height={30} width={30} />
                                <p onClick={() => router.push(`/hotel-sitemap/${result}`)} className="text-[16px] cursor-pointer">{countryinfo?.name?.official}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default HotelSitemap;
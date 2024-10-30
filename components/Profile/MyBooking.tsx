import React, {useState} from 'react';
import { myBooking } from '../../fake_data/profile';
import Image from 'next/image';

const MyBooking = () => {
    const [bookingId, setBookingId] = useState("s1");

    return (
        <div className=''>
            <div className='flex flex-col md:flex-row items-center'>
                {
                    myBooking?.map((d) => {
                        return (
                            <div key={d?.id}>
                                <button onClick={() => setBookingId(d?.id)} className={`${d?.id === bookingId ? "bg-[#1882ff] text-white" : "bg-white text-black"} flex items-center px-3 rounded pr-8`}>
                                    <div className='w-12 h-12'>
                                    <Image src={d?.logo} className='text-black' alt="" />
                                    </div>
                                <h2>{d?.title}</h2>
                                </button>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                {
                    bookingId && myBooking?.map((s) => {
                        return (
                            <div className='' key={s?.id}>
                                {
                                    s?.id === bookingId && <div className='text-center'>
                                        <Image className='w-[192px] h-[192px] mx-auto mt-20' src={s?.img} alt="" />
                                        <h2 className='mb-4 text-[44px] font-bold'>Sorry!</h2>
                                        <p className='mb-4 text-xl font-medium'>No history found!</p>
                                    </div>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default MyBooking;
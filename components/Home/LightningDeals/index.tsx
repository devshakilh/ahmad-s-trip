import Image from 'next/image';
import React, { useRef } from 'react';
import { LightningDeals } from '../../../fake_data/lightningDeals';
import Slider from './Slider';
import styles from './styles.module.css';

const LightingDeals = () => {
    const sliderRef = useRef<HTMLDivElement>(null);

    // ... existing code ...

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: -300,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: 300,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className='relative lg:px-28 px-4 pt-12'>
            <h1 className='text-4xl pb-6 font-semibold text-black'>Lightning Deals</h1>
            
            {/* Slider Container */}
            <div className="relative">
                <div
                    ref={sliderRef}
                    className='flex overflow-hidden space-x-4 py-8'
                    style={{ scrollSnapType: 'x mandatory' }}
                >
                    {LightningDeals?.map((d) => (
                        <div key={d?.id} className={`flex-shrink-0 w-[300px] ${styles.bgImage}`}>
                            <div className={`relative ${styles.child}`}>
                                <Image
                                    className={`h-[300px] w-full rounded-md transition-transform duration-300 transform hover:scale-105`}
                                    src={d?.image}
                                    alt=""
                                />
                                <div className="p-4">
                               
                                    <h1 className='text-lg font-semibold'>{d.tittle}</h1>
                                    <p><span className='text-black font-semibold'>BDT {d.taka}</span>/person</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Control Buttons */}
                <button   onClick={scrollLeft} className={`!text-black font-bold hover:!text-white ${styles.controlButtonLeft}`}>&lt; </button>
                <button onClick={scrollRight} className={`!text-black font-bold hover:!text-white ${styles.controlButtonRight}`}>&gt;</button>
            </div>

            <Slider />
        </div>
    );
};

export default LightingDeals;

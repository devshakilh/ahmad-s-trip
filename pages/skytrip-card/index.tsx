import Image from 'next/image';
import React from 'react';
import { skytripCard, value } from '../../fake_data/skytrip-card';
import styles from './styles.module.css'
import { AiOutlineCheck } from 'react-icons/ai';
import img1 from '../../assets/skytrip-card/apply.jpg'
import img2 from '../../assets/skytrip-card/approval.jpg'
import img3 from '../../assets/skytrip-card/avail.jpg'


const SkytripCard = () => {
    return (
        <div>
            <div className={`${styles.bg} hidden lg:block`}>
                <div className='lg:px-24 px-5'>
                    <h4 className={`${styles.h4}`}>Get your</h4>
                    <h2 className={`${styles.h2}`}>SKYTRIP Credit Card</h2>
                    <h6 className={`${styles.h6}`}>First Travel Credit Card by EBL, MasterCard and Sharetrip</h6>
                    <p className={`${styles.p}`}>To enjoy unlimited travel deals and facilities</p>
                    <button className={`${styles.btn}`}>APPLY NOW</button>
                </div>

            </div>
            <div className={`${styles.bgM} pt-0 lg:hidden`}>
                <div className='lg:px-24 px-5'>
                    <h4 className={`${styles.h4M} text-2xl text-white font-semibold`}>Get your</h4>
                    <h2 className={`${styles.h2M} text-4xl py-2 text-white font-bold`}>SKYTRIP Credit Card</h2>
                    <h6 className={`${styles.h6M} text-xl text-white font-semibold`}>First Travel Credit Card by EBL, MasterCard and Sharetrip</h6>
                    <p className={`${styles.pM} text-[16px] py-3 text-white font-semibold`}>To enjoy unlimited travel deals and facilities</p>
                    <button className={`${styles.btnM}`}>APPLY NOW</button>
                </div>

            </div>
            <div className='lg:px-24 px-6 lg:pt-20 pt-12'>
                <h3 className={`${styles.cardHeader}`}>Exclusive offers</h3>
                <div className={`grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 pb-12 rounded-md `}>
                    {(
                        skytripCard.map((item) => (

                            <div key={item.id} className={`${styles.card}`}>

                                <div>
                                    <Image src={item.image} alt='' />
                                    <h2 className={`${styles.title} pt-4`}>{item.title}</h2>
                                    <p className={`${styles.desription}`}>{item.des}</p>
                                </div>

                            </div>

                        ))
                    )}
                </div>

            </div>
            <div>

                <div className='lg:px-24 px-6 lg:pt-20 pt-12'>
                    <h2 className={`pt-8 ${styles.value}`}>Value Added Benefits</h2>
                    <div className={`grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 pb-12 rounded-md `}>
                        {(
                            value.map((item) => (

                                <div key={item.id} className={`${styles.card}`}>

                                    <div className='flex'>
                                        <Image className='lg:h-44 lg:w-44 w-32 h-32' src={item.image} alt='' />
                                        <h2 className={`${styles.valueTitle} pt-4`}>{item.title}</h2>

                                    </div>

                                </div>

                            ))
                        )}
                    </div>

                </div>
            </div>

            <div className='lg:px-36 px-6'>
                <h2 className={` pt-20 pb-10 ${styles.cardBased}`}>Card based Benefits</h2>
                <div className={`grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8 ${styles.cardP}`}>
                    <div className='flex gap-4 items-center'>
                        <span className='text-orange-500 text-xl '><AiOutlineCheck /></span>
                        <p>Zero Annual Fee if a minimum of 18 transactions are performed in a year.</p>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <span className='text-orange-500 text-xl '><AiOutlineCheck /></span>
                        <p>Zero Annual Fee if a minimum of 18 transactions are performed in a year.</p>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <span className='text-orange-500 text-xl '><AiOutlineCheck /></span>
                        <p>Zero Annual Fee if a minimum of 18 transactions are performed in a year.</p>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <span className='text-orange-500 text-xl '><AiOutlineCheck /></span>
                        <p>Zero Annual Fee if a minimum of 18 transactions are performed in a year.</p>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <span className='text-orange-500 text-xl '><AiOutlineCheck /></span>
                        <p>Zero Annual Fee if a minimum of 18 transactions are performed in a year.</p>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <span className='text-orange-500 text-xl '><AiOutlineCheck /></span>
                        <p>Zero Annual Fee if a minimum of 18 transactions are performed in a year.</p>
                    </div>
                </div>
            </div>

            <div className='pt-28 lg:px-24 px-6'>
                <h2 className={`${styles.howIt}`}>How it works</h2>
                <div className='hidden lg:block'>
                    <div className='lg:flex items-center pt-8 justify-center'>
                        <Image src={img1} alt='' />
                        <p className='border-b-[2px] border-dotted border-blue-400 w-72 hidden lg:block '></p>
                        <Image src={img2} alt='' />
                        <p className='border-b-[2px] border-dotted border-blue-400 w-72 hidden lg:block'></p>
                        <Image src={img3} alt='' />
                    </div>
                </div>
                <div className='lg:flex gap-12 pt-6  '>
                    <div>
                        <div className='flex justify-center pt-8 pb-3'>
                            <Image src={img1} alt='' className='text-cener lg:hidden' />
                        </div>
                        <h1 className={`${styles.apply}`}>Apply</h1>
                        <p className={`${styles.applyP}`}>Sign in with your Sharetrip account and apply.</p>

                    </div>

                    <div>
                        <div className='flex justify-center pt-8 pb-3'>
                            <Image src={img2} alt='' className='text-cener lg:hidden' />
                        </div>
                        <h1 className={`${styles.apply}`}>Approval</h1>
                        <p className={`${styles.applyP}`}>You’ll be verified by the bank and receive the card if you’re eligible.</p>

                    </div>

                    <div>
                        <div className='flex justify-center pt-8 pb-3'>
                            <Image src={img3} alt='' className='text-cener lg:hidden' />
                        </div>
                        <h1 className={`${styles.apply}`}>Avail</h1>
                        <p className={`${styles.applyP}`}>Enjoy amazing Sharetrip deals along with other benefits of your card.</p>

                    </div>

                </div>
                <div className='flex justify-center pt-16'>
                    <button className={` ${styles.btnH}`}>APPLY NOW</button>
                </div>
            </div>

            <div className='lg:px-24 px-6'>
                <h2 className={` pt-16 hidden lg:block ${styles.frequently}`}>Frequently Asked Questions</h2>
                <h2 className={` pt-16  font-semibold text-black text-2xl`}>Frequently Asked Questions</h2>
                <div className={` lg:pt-16 pt-3 ${styles.frequentlyCollaps}`}>
                    <div tabIndex={0} className="collapse collapse-arrow text-blue-500 ">
                        <div className="collapse-title text-xl ">
                            Focus me to see content
                        </div>
                        <div className="collapse-content">
                            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow text-blue-500">
                        <div className="collapse-title text-xl ">
                            Focus me to see content
                        </div>
                        <div className="collapse-content">
                            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow text-blue-500">
                        <div className="collapse-title text-xl ">
                            Focus me to see content
                        </div>
                        <div className="collapse-content">
                            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkytripCard;
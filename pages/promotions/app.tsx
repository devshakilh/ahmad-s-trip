import Image from 'next/image';
import React from 'react';
import img from '../../assets/Promotions/app.png'
import img1 from '../../assets/Promotions/appStore.png'
import img2 from '../../assets/Promotions/playStore.png'
import img3 from '../../assets/Promotions/appStore.png'

const App = () => {
    return (
        <div className='lg:flex mt-20 bg-gray-100 gap-6 items-center lg:px-12'>
            <Image className=" rounded-md " src={img} alt="cardImg" />

            <div className='px-8'>
                <h1 className='text-black text-2xl font-semibold'>Download Sharetrip App <br /> and Earn Trip Coin.</h1>
                <div className='flex gap-4 py-4'>
                    <Image className=" rounded-md " src={img1} alt="cardImg" />
                    <Image className=" rounded-md " src={img2} alt="cardImg" />
                </div>
            </div>


        </div>
    );
};

export default App;
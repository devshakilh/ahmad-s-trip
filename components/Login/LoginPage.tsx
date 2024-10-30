import React, { useState, useRef, useEffect } from 'react';
import styles from './LoginPage.module.css'
import { BsEyeSlashFill, BsFacebook, BsGoogle } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import Link from 'next/link';
import { useForm, Resolver } from 'react-hook-form';



type FormValues = {
    email: string;
    password: string;
};

const LoginPage = () => {
    const [passVisible, setPassVisible] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const onSubmit = handleSubmit((data) => console.log(data));

    return (
        <div>
            <div className={` ${styles.bgStyle} h-[100%] w-full py-24 `}>
                <div className={`w-[90%] md:w-[40%] bg-white h-fit px-8 pt-10 pb-12 mx-auto rounded-[16px] ${styles.cardShadow}`}>
                    <h3 className="text-[28px] font-extrabold leading-[35px] text-center">Log in</h3>
                 
                    <div className="flex gap-2 my-6">
                        <div className="w-[50%] uppercase rounded-[4px] bg-[#4885d7] hover:bg-[#4267b2] text-white flex justify-center items-center py-[10px] font-bold text-[16px] gap-2 cursor-pointer transition-all ease-in">
                            <BsFacebook className='' />
                            <p className="">Facebook</p>
                        </div>
                        <div className="w-[50%] uppercase rounded-[4px] bg-[#ea4335] hover:bg-[#d7362b]  text-white flex justify-center items-center py-[10px] font-bold text-[16px] gap-2 cursor-pointer transition-all ease-in">
                            <BsGoogle />
                            <p className="">Google</p>
                        </div>
                    </div>

                    <div className="divider">OR</div>

                    <form onSubmit={onSubmit}>
                        <div className="md:flex gap-5 items-center">
                            <div>
                                <MdEmail className='text-[28px] hidden md:block' />
                            </div>
                            <div className="relative border rounded-[4px] hover:border-slate-500 w-full h-14 flex flex-col justify-center px-3">
                                <label className='absolute top-[-10px] bg-white' htmlFor="email">Email*</label>
                                <input type="email" {...register("email")} placeholder='example@gmail.com' className='outline-none bg-none ' />
                            </div>
                        </div>
                        <div className="md:flex gap-5 items-center mt-5">
                            <div>
                                <RiLockPasswordFill className='text-[28px] hidden md:block' />
                            </div>
                            <div className="relative border rounded-[4px] hover:border-slate-500 w-full h-14 flex flex-col justify-center px-3">
                                <label className='absolute top-[-10px] bg-white' htmlFor="email">Password*</label>
                                <div className='flex justify-between items-center'>
                                    <input type={passVisible ? "text" : "password"} {...register("password", {required: true})} placeholder='Your Password' className='outline-none bg-white w-full' />
                                    <BsEyeSlashFill onClick={() => setPassVisible(!passVisible)} className={`${passVisible && "text-blue-500"} cursor-pointer`} />
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#4885d7] hover:bg-[#4267b2]  text-white text-center rounded-[4px] mt-8 py-3 text-[15px] font-semibold cursor-pointer">
                            <button type="submit" className='uppercase'>Log In </button>
                        </div>

                        <div className="flex mt-6 justify-between">
                            <div className="flex">
                                <p className="text-[16px]">{"Don't have an account? "} <Link href="/signup" className='text-[#4885d7] text-[15px] font-bold hover:bg-[#F1F3F4] py-2 px-1'> Sign Up</Link></p>
                            </div>
                            <div className="">
                                <Link href="/forgot-password" className='text-[#4885d7] text-[15px] font-bold hover:bg-[#F1F3F4] py-2 px-1'>Forgot Password?</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
import Link from 'next/link';
import React, { useState } from 'react';
import { BsEyeSlashFill, BsFacebook, BsGoogle } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import styles from './SignUpPage.module.css';
import { AiOutlineMobile } from 'react-icons/ai';
import { TbLayersLinked } from 'react-icons/tb';
import { useForm } from 'react-hook-form';

type FormValues = {
    email: string;
    password: string;
    confirmPassword: string;
    mobile: string;
    referral: string;
};


const SignUpPage = () => {
    const [passVisible, setPassVisible] = useState(false);
    const [conPassVisible, setConPassVisible] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

    const onSubmit = handleSubmit((data) => console.log(data));

    return (
        <div className={`${styles.bgStyle} min-h-screen flex items-center justify-center`}>
            <div className={`w-[90%] md:w-[40%] bg-white p-8 rounded-[16px] shadow-lg transition-transform transform hover:scale-105`}>
                <h3 className="text-[28px] font-extrabold leading-[35px] text-center mb-6">Sign Up</h3>
                
                <div className="flex gap-2 my-6">
                    <div className="w-[50%] uppercase rounded-[4px] bg-[#4885d7] hover:bg-[#4267b2] text-white flex justify-center items-center py-[10px] font-bold text-[16px] gap-2 cursor-pointer transition-all ease-in">
                        <BsFacebook />
                        <p>Facebook</p>
                    </div>
                    <div className="w-[50%] uppercase rounded-[4px] bg-[#ea4335] hover:bg-[#d7362b] text-white flex justify-center items-center py-[10px] font-bold text-[16px] gap-2 cursor-pointer transition-all ease-in">
                        <BsGoogle />
                        <p>Google</p>
                    </div>
                </div>

                <div className="text-center text-gray-500 mb-4">OR</div>

                <form onSubmit={onSubmit}>
                    <InputField 
                        label="Email*" 
                        type="email" 
                        icon={<MdEmail />} 
                        register={register("email", { required: "Email is required" })} 
                        error={errors.email} 
                    />
                    
                    <InputField 
                        label="Password*" 
                        type={passVisible ? "text" : "password"} 
                        icon={<RiLockPasswordFill />} 
                        register={register("password", { required: "Password is required" })} 
                        error={errors.password} 
                        toggleVisibility={() => setPassVisible(!passVisible)} 
                        visible={passVisible} 
                    />
                    
                    <InputField 
                        label="Password Confirmation*" 
                        type={conPassVisible ? "text" : "password"} 
                        icon={<RiLockPasswordFill />} 
                        register={register("confirmPassword", { required: "Confirmation is required" })} 
                        error={errors.confirmPassword} 
                        toggleVisibility={() => setConPassVisible(!conPassVisible)} 
                        visible={conPassVisible} 
                    />
                    
                    <InputField 
                        label="Mobile Number*" 
                        type="text" 
                        icon={<AiOutlineMobile />} 
                        register={register("mobile", { required: "Mobile number is required" })} 
                        error={errors.mobile} 
                    />
                    
                    <InputField 
                        label="Referral Code (Optional)" 
                        type="text" 
                        icon={<TbLayersLinked />} 
                        register={register("referral")} 
                    />

                    <button type="submit" className="bg-[#4885d7] hover:bg-[#4267b2]   mx-auto text-white text-center rounded-[4px] mt-8 py-3  w-full text-[15px] font-semibold transition-transform transform hover:scale-105">
                        Sign Up
                    </button>

                    <div className="flex mt-6 justify-between ">
                        <p className="text-[16px] mx-auto">Existing User? <Link href="/login" className='text-[#4885d7] text-[15px] font-bold hover:bg-[#F1F3F4] py-2 px-1'> Log In</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

const InputField = ({ label, type, icon, register, error, toggleVisibility, visible }: {
    label: string;
    type: string;
    icon: React.ReactNode;
    register: any;
    error?: any;
    toggleVisibility?: () => void;
    visible?: boolean;
}) => (
    <div className="md:flex gap-5 items-center mt-5">
        <div className="text-[28px] hidden md:block">{icon}</div>
        <div className="relative border rounded-[4px] hover:border-slate-500 w-full h-14 flex flex-col justify-center px-3">
            <label className='absolute top-[-10px] bg-white px-1'>{label}</label>
            <div className='flex justify-between items-center'>
                <input type={type} {...register} placeholder={label} className='outline-none bg-white w-full' />
                {toggleVisibility && <BsEyeSlashFill onClick={toggleVisibility} className={`${visible ? "text-blue-500" : ""} cursor-pointer`} />}
            </div>
            {error && <p className="text-red-500 text-sm">{error.message}</p>}
        </div>
    </div>
);

export default SignUpPage;

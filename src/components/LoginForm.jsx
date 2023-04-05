import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();
    const[formData, setFormData] = useState({
        email:"",
        password:"",
    });

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event){
        setFormData( (prevData) => {
            return {
                        ...prevData,
                        [event.target.name] : event.target.value
                    }
        } )
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard")

    }
  return (
    <div className=''>
        <form onSubmit={submitHandler} className='flex flex-col gap-y-4 mt-6'>
            <label className='w-full'>
                <p className='text-[1rem] text-white mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-200'>*</sup></p>
                <input className='bg-[#171414] rounded-[0.5rem] text-white w-full p-[12px]' type="email" required placeholder='Enter Your Email' value={formData.email} name='email' onChange={changeHandler} />
            </label>

            <label className='w-full relative'>
                <p className='text-[1rem] text-white mb-1 leading-[1.375rem]'>Password <sup>*</sup></p>
                <input className='bg-[#171414] rounded-[0.5rem] text-white w-full p-[12px]' type={showPassword ? ("text") : ("password")} placeholder='Enter Password' required value={formData.password} name='password' onChange={changeHandler} />

                <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() =>setShowPassword((prev)=> !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />): (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                 </span>

                <Link to="#">
                    <p className='text-right text-[1rem] text-[#79ae1f] mb-1 leading-[1.375rem]'>Forgot Password</p>
                </Link>
            </label>

            <button className='text-[1rem] w-full bg-[#d2cf1d] text-black font-bold mb-1 leading-[1.375rem] rounded-[0.5rem] py-2'>
                Sign In
            </button>
        </form>
    </div>
  )
}

export default LoginForm
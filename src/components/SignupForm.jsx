import React, { useState } from 'react'
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const[formData, setFormData] =useState({
        firstName : "",
        lastName:"",
        password:"",
        confirmPassword:"",
        email:""
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");

    function changeHandler(event){
        setFormData( (prevData) => {
            return {
                    ...prevData,
                    [event.target.name] : event.target.value
                    }
        } )
    }

    function submitHandler(event) {
      event.preventDefault();

      if (formData.password !== formData.confirmPassword) {
        toast.error("Password & Confirm Password do not match");
        return;
      } else {
        setIsLoggedIn(true);
        toast.success("Successful account created");
        const accountData = {
          ...formData,
        };

        const finalData = {
          ...accountData,
          accountType,
        };

        console.log("Printing final account data");
        console.log(finalData);
        navigate("/dashboard");
      }
    }
  return (
    <div>
        <div className='flex gap-x-1 mt-2 p-1 my-6 rounded-full bg-[#171414] max-w-max'>
            <button onClick={()=> setAccountType("student")} className={`${accountType === "student" ? "bg-[#4e4646] text-white" : "bg-transparent text-white" } py-2 px-5 rounded-full transition-all duration-200`} >Student</button>
            <button onClick={()=> setAccountType("instructor")} className={`${accountType === "instructor" ? "bg-[#4e4646] text-white" : "bg-transparent text-white" } py-2 px-5 rounded-full transition-all duration-200`}>Instructor</button>
        </div>

        <form onSubmit={submitHandler}>
            <div className='flex gap-4 mt-2'>
                <label>
                    <p className='text-[1rem] text-white mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
                    <input className='bg-[#171414] rounded-[0.5rem] text-white w-full p-[12px]' type="text" name='firstName' required placeholder='Enter Your First name' onChange={changeHandler} value={formData.firstName}/>
                </label>
                <label>
                    <p className='text-[1rem] text-white mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
                    <input className='bg-[#171414] rounded-[0.5rem] text-white w-full p-[12px]' type="text" name='lastName' required placeholder='Enter Your Last name' onChange={changeHandler} value={formData.lastName}/>
                 </label>
            </div>

            <label className='mt-2'>
                <p className='text-[1rem] text-white mb-1 leading-[1.375rem]'>Email<sup className='text-pink-200'>*</sup></p>
                <input className='bg-[#171414] rounded-[0.5rem] text-white w-full p-[12px]' type="email" name='email' required placeholder='Enter Your Email' onChange={changeHandler} value={formData.email}/>
            </label>

            <div className='flex gap-4 mt-2'>
                <label className='relative'>
                    <p className='text-[1rem] text-white mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>

                    <input className='bg-[#171414] rounded-[0.5rem] text-white w-full p-[12px]' type={showPassword ? ("text") : ("password")} placeholder='Enter Password' required value={formData.password} name='password' onChange={changeHandler} />

                    <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() =>setShowPassword((prev)=> !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>): (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>

                <label className='relative'>
                    <p className='text-[1rem] text-white mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                    
                    <input className='bg-[#171414] rounded-[0.5rem] text-white w-full p-[12px]' type={showConfirmPassword ? ("text") : ("password")} placeholder='Confirm Password' required value={formData.confirmPassword} name='confirmPassword' onChange={changeHandler} />

                    <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() =>setShowConfirmPassword((prev)=> !prev)}>
                        {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>): (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>
            </div>

            <button className='text-[1rem] w-full bg-[#d2cf1d] text-black font-bold mb-1 leading-[1.375rem] rounded-[0.5rem] py-2 mt-3'>
                Create Account
            </button>

        </form>
    </div>
  )
}

export default SignupForm
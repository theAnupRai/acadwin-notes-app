import React from 'react'
import acadwin from '../assets/AcadWin.png'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import {FcGoogle} from 'react-icons/fc'

const Template = ({title, desc1, desc2, formtype, setIsLoggedIn}) => {
  return (
    <div className='flex width-11/12 max-w-[1160px] py-12 gap-x-12 mx-auto justify-between gap-y-0 bg-black'>
        <div className='width-11/12 max-w-[450px] mx-0'>
            <h1 className='text-white font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
            <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
                <span className='text-white'>{desc1}</span> <br />
                <span className='text-blue-300 italic'>{desc2}</span>
            </p>

            {
                formtype === "signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn} />) : (<LoginForm setIsLoggedIn={setIsLoggedIn} />)
            }

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='h-[1px] w-full bg-slate-800'></div>
                <p className='text-slate-800 font-medium leading-[1.375rem]'>OR</p>
                <div className='h-[1px] w-full bg-slate-800'></div>
            </div>

            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-white border border-blue-600 px-[12px] py-[8px] gap-x-2 mt-6'>
                <FcGoogle/>
                <p>Sign Up with Google</p>
            </button>
        </div>

        <div className='w-11/12 max-w-[450px]'>
                {/* <img src={acadwin} alt="image" width={558} height={504} loading='lazy'/> */}
                <img src={acadwin} alt="image students" width={558} height={504} loading='lazy' className='-top-4 right-4 ml-24'/>
        </div>

    </div>
  )
}

export default Template
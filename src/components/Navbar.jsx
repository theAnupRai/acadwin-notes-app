import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/AcadWin.png'
import { toast } from 'react-hot-toast'

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <Link to="./" >
            <img src={logo} alt="AcadWin Notes App Logo" loading='lazy' width={50}/>
        </Link>

        <nav> 
            <ul className='text-white flex gap-x-6'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="#">About</Link>
                </li>
                <li>
                    <Link to="#">Contact</Link>
                </li>
            </ul>
        </nav>

        <div className='flex items-center gap-x-4'>
            { !isLoggedIn &&
                <Link to="/login">
                    <button className='text-white bg-black py-[8px] px-[12px] rounded-[8px] border border-[#382f2f]'>Login</button>
                </Link>
            }

            { !isLoggedIn &&
                <Link to="/signup">
                    <button className='text-white bg-black py-[8px] px-[12px] rounded-[8px] border border-[#382f2f]'>Sign up</button>
                </Link>
            }

            { isLoggedIn &&
                <Link to="/">
                    <button className='text-white bg-black py-[8px] px-[12px] rounded-[8px] border border-[#382f2f]' onClick={()=>{
                        setIsLoggedIn(false);
                        toast.success("Logged Out")
                    }} >Log Out</button>
                </Link>
            }

            { isLoggedIn &&
                <Link to="/dashboard">
                    <button className='text-white bg-black py-[8px] px-[12px] rounded-[8px] border border-[#382f2f]'>Dashboard</button>
                </Link>
            }
        </div>
    </div>
  )
}

export default Navbar
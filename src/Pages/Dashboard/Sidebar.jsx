import { useEffect, useState } from 'react'
import dashimg from '../../assets/logodoog.png'


// Icons

import { AiOutlineBars } from 'react-icons/ai'
import { CgProfile } from "react-icons/cg";
import { IoBagAddSharp, IoHomeSharp,IoListCircle,IoGitPullRequest   } from "react-icons/io5";
import {  MdOutlineCampaign } from "react-icons/md";
import { Link } from 'react-router-dom'

import MenuItem from './MenuItem';

const Sidebar = () => {

    const [isActive, setActive] = useState(false)

    const handleToggle = () => {
        setActive(!isActive)
    }

    // get role
    // useEffect(() => {
    //     const fetchCartData = async () => {
    //         if (user?.email) {
    //             const data = await getRoll(user?.email);
    //             setCartData(data[0]);
    //         }
    //     };

    //     fetchCartData();
    // }, [user?.email]);
    // console.log(cartData?.role);

    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <h2>Pet Adoption</h2>

                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-blue-100 mx-auto'>
                            {/* <Logo /> */}
                            <img className='w-10' src={dashimg} alt="" />Pet Adoption
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>

                        <nav>
                 
                                    <MenuItem
                                        icon={IoBagAddSharp}
                                        label='Add Pet'
                                        address='/dashboard/addpet'
                                    />
                                    <MenuItem
                                        icon={IoListCircle }
                                        label='My added pets'
                                        address='/dashboard/myaddedpets'
                                    />

                            <MenuItem
                                icon={MdOutlineCampaign }
                                label='Create Donation Campaign'
                                address='/dashboard/createdonationcampaign'
                            />
                        </nav> 

                    </div>
                </div>
                <div>
                    <hr />
                    <MenuItem
                        icon={CgProfile}
                        label='Profile'
                        address='/dashboard'
                    />
                    <Link to='/'>
                        <button
                            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                        >
                            <IoHomeSharp className='w-5 h-5' />

                            <p className='mx-4 font-medium'>Go Home</p>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Sidebar

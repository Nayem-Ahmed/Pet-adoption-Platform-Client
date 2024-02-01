import React from 'react';
import logo from '../assets/logodoog.png'
import Headroom from 'react-headroom';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const link = <>
<NavLink className='nav' to='/'>Home</NavLink>
<NavLink className='nav' to='/services'>Services</NavLink>
<NavLink className='nav' to='/listing'>Pet Listing</NavLink>
<NavLink className='nav' to='/contact'>Contact us</NavLink>
<NavLink className='nav' to='/donation'> Donation</NavLink>

</>

const Navbar = () => {
    return (

            <div className="navbar  lg:text-white md:text-white z-50 bg-[#30336b]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                       {link}
                    </ul>
                </div>
                <a href='/' className="text-xl"><img  className='w-24' src={logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {link}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Login</a>
            </div>
        </div>
   
    );
};

export default Navbar;
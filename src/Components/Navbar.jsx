 
import logo from '../assets/logodoog.png'
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
 
const Navbar = () => {
   const {user,logOut} = useContext(AuthContext)
   
    const link = <>
        <NavLink className='nav' to='/'>Home</NavLink>
        <NavLink className='nav' to='/services'>Services</NavLink>
        <NavLink className='nav' to='/listing'>Pet Listing</NavLink>
        <NavLink className='nav' to='/contact'>Contact us</NavLink>
        <NavLink className='nav' to='/donation'> Donation</NavLink>

    </>
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
                <a href='/' className="text-xl"><img className='w-24' src={logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {user?.email ?
                                <div className='flex items-center gap-2'>
                                    <img className='rounded-full w-8' src={user?.photoURL} alt="" />
                                </div>
                                :
                                <div className='flex items-center gap-2'>
                                    <img className='rounded-full w-8' src='https://i.ibb.co/CQLSNTH/istockphoto-1337144146-612x612.jpg' alt="" />
                                </div>
                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52">

                        {user?.email ? <li className='mb-3 font-semibold'>{user?.displayName}</li> : null}
                        {/* <Link className='mb-3' to='/dashboard'><li className='font-semibold'>Dashboard</li></Link> */}
                        {user?.email ? <button onClick={logOut}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                            type="submit"
                        >
                            Sign Out
                        </button> : <button><li><Link className={'font-semibold text-black'} to='/signin'>Sign In</Link></li></button>}
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Navbar;
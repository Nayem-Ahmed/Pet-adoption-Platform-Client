import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { IoMdMail,IoMdLock } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import { toast } from 'react-toastify';
import saveUser from '../Hooks/auth';

 
const Signin = () => {
    const{user,signIn,signInWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        try {
            // Your form submission logic goes here
            console.log(data);

            //  signIn user
            const { user } = await signIn(data.email, data.password);

            // get token

            toast.success('Signin successfull')
            navigate(location?.state ? location.state : '/');

        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        try { 
            const {user} = await signInWithGoogle()
            // save user data in Database
            const sendUserData = await saveUser(user)
            console.log(sendUserData)
            navigate(location?.state ? location.state : '/');
        } catch (error) {
            toast.error(error.message);
        }
    };
    return (
        <div className="flex justify-center items-center p-5  ">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>

                {/* Email Input */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        <IoMdMail className="inline mr-2" />
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register('email', { required: 'Email is required' })}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
                </div>

                {/* Password Input */}
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                        <IoMdLock className="inline mr-2" />
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        {...register('password', { required: 'Password is required' })}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
                </div>

                {/* Sign In Button */}
                <div className="mb-6">
                    <button
                        type="submit"
                        className="bg-[#30336b] hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Sign In
                    </button>
                </div>
                <div className='  text-center block'><span className='text-xl'>-------------------  or ---------------------- </span></div>

                {/* Continue with Google Button */}
                <div className="mb-6">
                    <button
                        type="button"
                        className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
                        onClick={handleGoogleSignIn}
                    >
                        <FaGoogle className="mr-2" />
                        Continue with Google
                    </button>
                </div>

                {/* Sign Up Link */}
                <div className="text-center">
                    <p>
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-blue-500 hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Signin;
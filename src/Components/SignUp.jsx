import React from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { IoMdAttach, IoMdLock, IoMdMail, IoMdPerson } from 'react-icons/io';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = data => {console.log(data)};
    return (
        <div className="flex justify-center items-center my-16 ">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
                {/* Name Input */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                        <IoMdPerson className="inline mr-2" />
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        {...register("name", { required: true })}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.name && <p className="text-red-500 text-xs italic">This field is required</p>}
                </div>

                {/* Email Input */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        <IoMdMail className="inline mr-2" />
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs italic">Please enter a valid email address</p>
                    )}
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
                        placeholder='*****'
                        {...register("password", { required: true, minLength: 6 })}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.password && (
                        <p className="text-red-500 text-xs italic">Password must be at least 6 characters</p>
                    )}
                </div>

                {/* Photo Input */}
                <div className="mb-4">
                    <label htmlFor="photo" className="block text-gray-700 text-sm font-bold mb-2">
                        <IoMdAttach className="inline mr-2" />
                        Photo
                    </label>
                    <input
                        type="file"
                        id="photo"
                        {...register("photo")}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className=" bg-[#30336b] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    >
                        Sign Up
                    </button>
                </div>
                <div className='  text-center block'><span className='text-xl'>----------------- or ----------------</span></div>
                {/* Continue with Google Button */}
                <div className="mb-6">
                    <button
                        type="button"
                        className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
                         
                    >
                        <FaGoogle className="mr-2" />
                        Continue with Google
                    </button>
                </div>
                <p>Already have an account? <Link className='hover:underline text-blue-500' to='/signin'>Sign In</Link></p>


            </form>
        </div>
    );
};

export default SignUp;
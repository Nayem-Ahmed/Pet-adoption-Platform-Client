import React from 'react';
import { useForm } from "react-hook-form";
import cont from '../assets/contact.jpg'
import map from '../assets/map.jpg'
import map2 from '../assets/map2.webp'
import { toast } from 'react-toastify';

const Contact = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        toast.success('Message sent successfully!');
        reset()
    };


    return (
        <div className='my-9'>
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.52)' }}><img className='w-full bg-black opacity-70' src={cont} alt="" /></div>
            <h1 className='relative  md:bottom-56  font-bold text-5xl text-red-500 block text-center'>Contacts</h1>
            <div className='md:p-16' style={{ backgroundImage: `url(${map2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <form onSubmit={handleSubmit(onSubmit)} style={{ backgroundColor: 'rgba(0, 0, 0, 0.52)' }} className="max-w-xl mx-auto py-5 p-10 ">
                    <label className="block mb-2 text-white">
                        Name:
                        <input
                            type="text"
                            name="name"
                            className="w-full text-black mt-1 p-2 border border-red-400 rounded-full"
                            {...register("name", { required: 'Name is required' })}
                        />
                        {errors.name && <p className="text-red-500 mt-2">{errors.name.message}</p>}
                    </label>

                    <label className="block mb-2 text-white">
                        Email:
                        <input
                            type="text"
                            name="email"
                            className="w-full mt-1 p-2 border text-black border-red-400 rounded-full"
                            {...register("email", { required: 'Email is required', pattern: /^\S+@\S+$/i })}
                        />
                        {errors.email && <p className="text-red-500 mt-2">{errors.email.message}</p>}
                    </label>

                    <label className="block mb-2 text-white">
                        Phone:
                        <input
                            type="tel"
                            name="phone"
                            className="w-full mt-1 text-black p-2 border border-red-400 rounded-full"
                            {...register("phone", {
                                required: 'Phone number is required',
                                pattern: {

                                    message: 'Invalid phone number format',
                                },
                            })}
                        />
                        {errors.phone && <p className="text-red-500 mt-2">{errors.phone.message}</p>}
                    </label>

                    <label className="block mb-2 text-white">
                        Message:
                        <textarea
                            name="message"
                            className="w-full mt-1 p-2 text-black border border-red-400 rounded-full"
                            {...register("message", { required: 'Message is required' })}
                        />
                        {errors.message && <p className="text-red-500 mt-2">{errors.message.message}</p>}
                    </label>

                    <button
                        type="submit"
                        className="bg-[#30336b] text-white px-8 py-2 rounded-md hover:bg-blue-500 transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
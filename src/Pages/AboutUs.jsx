import React from 'react';
import { Link } from 'react-router-dom';
import doog from '../assets/dogg.jpg'

const AboutUs = () => {
    return (
        <div className='flex gap-5 p-8 flex-col md:flex-row'>
            <div className='flex-1'>
                <h1 className='text-2xl font-bold mb-2'>Our Mission</h1>
                <p className='mb-5 text-[#8a8a8a] text-xl'>Aliquam erat volutpat In id fermentum augue, ut pellentesque leo. Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.</p>
                <h2 className='text-2xl font-semibold mb-2'>We have over 20 years of experience</h2>
                <p className='text-[#8a8a8a] text-xl'>Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.</p>
                <div>
                <Link to='contact'><button className="bg-blue-500 text-white mt-6 py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition duration-300 ">
                        CONTACT US
                    </button></Link><br></br>
                <Link to='services'><button className="bg-red-500 text-white mt-6 py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition duration-300">
                      SERVICES
                    </button></Link>
                </div>
            </div>
            <div className=' '>
                <img className='w-96' src={doog} alt="" />
            </div>
        </div>
    );
};

export default AboutUs;
import React from 'react';
import { Link } from 'react-router-dom';

const Callto = () => {
    return (
        <div>
            <section className="bg-gradient-to-b from-gray-600 to-gray-700 p-4 text-white py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-5xl font-extrabold mb-4 leading-tight">
                        Give a Loving Home to a Furry Friend
                    </h2>
                    <p className="text-lg mb-8">
                        Discover the joy of pet adoption. Provide a home filled with love, warmth, and
                        companionship.
                    </p>
                    <Link to='services'> <button className="bg-blue-500 text-white py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition duration-300">
                        Adopt Now
                    </button></Link>
                </div>
            </section>

        </div>
    );
};

export default Callto;
import React from 'react';
import Banner from '../Components/Banner';
import Callto from '../Pages/Callto';
import Contact from '../Pages/Contact';
import Services from '../Pages/Services';
import AboutUs from '../Pages/AboutUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Contact></Contact>
            <Services></Services>
            <AboutUs></AboutUs>
            <Callto></Callto>
        </div>
    );
};

export default Home;
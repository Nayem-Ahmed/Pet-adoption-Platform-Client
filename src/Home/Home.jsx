import React from 'react';
import Banner from '../Components/Banner';
import Callto from '../Pages/Callto';
import Contact from '../Pages/Contact';
import Services from '../Pages/Services';
import AboutUs from '../Pages/AboutUs';
import FAQ from '../Components/FAQ';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Contact></Contact>
            <Services></Services>
            <Callto></Callto>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;
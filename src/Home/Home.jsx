import React from 'react';
import Banner from '../Components/Banner/Banner';
import Callto from '../Pages/Callto';
import Contact from '../Pages/Contact';
import Services from '../Pages/Services';
import AboutUs from '../Pages/AboutUs';
import FAQ from '../Components/FAQ';
import AboutBottom from '../Pages/AboutBottom';
import Listing from '../Pages/Listing';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Listing></Listing>
            <AboutUs></AboutUs>
            <AboutBottom></AboutBottom>
            <Contact></Contact>
            <Services></Services>
            <FAQ></FAQ>
            <Callto></Callto>
        </div>
    );
};

export default Home;
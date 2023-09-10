import React from 'react';
import Banner from '../Banner/Banner';
import Admissions from '../Admissions/Admissions';
import Services from '../Services/Services';
import Stories from '../Stories/Stories';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Admissions></Admissions>
            <Services></Services>
            <Stories></Stories>
            <About></About>
        </div>
    );
};

export default Home;
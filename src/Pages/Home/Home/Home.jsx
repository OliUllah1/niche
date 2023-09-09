import React from 'react';
import Banner from '../Banner/Banner';
import Admissions from '../Admissions/Admissions';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Admissions></Admissions>
            <Services></Services>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from '../Banner/Banner';
import Admissions from '../Admissions/Admissions';
import Services from '../Services/Services';
import Stories from '../Stories/Stories';
import About from '../About/About';
import Information from '../Information/Information';
import Ranking from '../Ranking/Ranking';
import Partner from '../Partner/Partner';
import Ads from '../Ads/Ads';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Admissions></Admissions>
            <Services></Services>
            <Stories></Stories>
            <About></About>
            <Information></Information>
            <Ranking></Ranking>
            <Partner></Partner>
            <Ads></Ads>
        </div>
    );
};

export default Home;
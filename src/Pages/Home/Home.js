import React from 'react';
import Facilities from '../Facilities/Facilities';
import Gallary from '../Gallary/Gallary';
import About from './About/About';
import Pricing from './Pricing/Pricing';
import Services from './Services/Services';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <About></About>
            <Services></Services>
            <Facilities></Facilities>
            <Gallary></Gallary>
            <Pricing></Pricing>
          
        </div>
    );
};

export default Home;
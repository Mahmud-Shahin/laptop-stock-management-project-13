import React from 'react';
import Slider from '../Slider/Slider';

import StockItems from '../StockItems/StockItems';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            
            <div class="text-center">
        <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
        </div>
            <StockItems></StockItems>
        </div>
    );
};

export default Home;
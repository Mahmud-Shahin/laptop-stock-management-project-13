import React from 'react';
import { Link  } from 'react-router-dom';
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
            <div className='text-center mt-5'>
                <Link to='/manageInventories'>
                    <button className='btn btn-dark'> manage Inventories</button>
                </Link>
            </div>

        </div>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import StockItem from '../StockItem/StockItem';


const StockItems = () => {

    const [stockItems, setStockItems] = useState([]);

    useEffect(() =>{
        fetch('stockItem.json')
        .then(res => res.json())
        .then(data => setStockItems(data));
    },[])

    return (

        <div id='stockItems' className='container'>
            
            <h2 className='text-center'>My StockItems</h2>



            <div className='row row-cols-lg-3 g-4'>
                {
               stockItems.map(stockItem => <StockItem 
               key={stockItem.id}
               stockItem = {stockItem}
               >
                </StockItem>) 
            }
            </div>
            

              
            
        </div>
    );
};

export default StockItems;
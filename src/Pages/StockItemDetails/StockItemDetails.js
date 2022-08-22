import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const StockItemDetails = () => {
  const  {stockItemId} = useParams();
  const [stockItem , setStockItem] = useState({});

  useEffect(() =>{
     const url = `http://localhost:5000/stocksItem/${stockItemId}`;

     fetch(url)
     .then(res=> res.json())
     .then(data=> setStockItem(data));

  }, [])

    return (
        <div>
            <h2>All details stock item : {stockItem.name}</h2>
            <div className='text-center'>
                <Link to='/manageInventories'>
                    <button className='btn btn-dark'> manage Inventories</button>
                </Link>
            </div>
            
        </div>
    );
};

export default StockItemDetails;
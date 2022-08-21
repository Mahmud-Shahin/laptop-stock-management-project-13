import React from 'react';
import { Link, useParams } from 'react-router-dom';

const StockItemDetails = () => {
  const  {stockItemId} = useParams();
    return (
        <div>
            <h2>All details stock item : {stockItemId}</h2>
            <div className='text-center'>
                <Link to='/manageInventories'>
                    <button className='btn btn-dark'> manage Inventories</button>
                </Link>
            </div>
            
        </div>
    );
};

export default StockItemDetails;
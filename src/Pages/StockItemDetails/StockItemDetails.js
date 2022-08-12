import React from 'react';
import { useParams } from 'react-router-dom';

const StockItemDetails = () => {
  const  {stockItemId} = useParams();
    return (
        <div>
            <h2>All details stock item : {stockItemId}</h2>
            
        </div>
    );
};

export default StockItemDetails;
import React, { useEffect, useState } from 'react';

const UseStockItems = () => {
    const [stockItems, setStockItems] = useState([]);

    useEffect(() =>{
        
        fetch('http://localhost:5000/stocksItem')
        .then(res => res.json())
        .then(data => setStockItems(data));
    },[])

    return [stockItems, setStockItems]
};

export default UseStockItems;

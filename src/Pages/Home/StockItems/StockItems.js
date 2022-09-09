import React, { useEffect, useState } from "react";
import StockItem from "../StockItem/StockItem";

const StockItems = () => {
  const [stockItems, setStockItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/stocksItem")
      .then((res) => res.json())
      .then((data) => setStockItems(data));
  }, []);

  return (
    <div id="stockItems" className="container">
      <h2 className="text-center">My StockItems</h2>

      <div className="row row-cols-lg-3 g-4">
        {stockItems.slice(0, 6).map((stockItem) => (
          <StockItem key={stockItem._id} stockItem={stockItem}></StockItem>
        ))}
      </div>
    </div>
  );
};

export default StockItems;

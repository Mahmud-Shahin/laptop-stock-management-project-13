import React from 'react';
import { useNavigate } from 'react-router-dom';

const StockItem = ({stockItem}) => {
    const { _id ,name, img , description , price , quantity , supplier_name} = stockItem;
    const navigate = useNavigate();
      const transferToStockItemDetails = id => {
        navigate(`/stockItem/${id}`);


      }
    return (
         
        <div>
            <div className="card-group mt-5 ">
                <div className="card g-5 h-100 col-sm-12 col-md-6 col-lg-4 ">
                <img src={img} alt="" />
                <div className="card-body text-center">
                    <h2>name: {name}</h2>
                    <p> {description}</p>
                    <h3>price: {price}</h3>
                    <h4>Quantity: {quantity}</h4>
                    <h5>supplier name: {supplier_name}</h5>
                    <div>
                         <button onClick={() => transferToStockItemDetails(_id)}  class="btn btn-dark mx-auto" type="button">Stock Update</button>
                    </div>

                </div>
                </div>

            </div>


            
          
         
           
           
           
           


            
           


        </div>
    );
};

export default StockItem;
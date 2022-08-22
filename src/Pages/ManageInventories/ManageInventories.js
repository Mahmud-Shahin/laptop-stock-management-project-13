import React from 'react';
import AddstockItem from '../AddstockItem/AddstockItem';
import UseStockItems from '../UseStockItems/UseStockItems';




const ManageInventories = () => {
     const [stockItems, setStockItems ] = UseStockItems();

     const handleDelievered = id =>{
        const windowpopup = window.confirm(' Are you sure you want to Deliever this item?');
        if(windowpopup){
            fetch(`http://localhost:5000/stocksItem/${id}`, {
                method: 'DELETE'
            })
            .then(res =>  res.json())
            .then(data => {
                console.log(data)
                const remaining = stockItems.filter(stockItem => stockItem._id !== id )
                setStockItems(remaining);

            })

        }
     }
    return (
        <div> 
            <div>
                     <AddstockItem></AddstockItem> <br />
            </div>


            <div className='w-25 mx-auto'>
        
            {
                stockItems.map(stockItem => <div key={stockItem._id}> 
                    <h5>{stockItem.name}   <button onClick={()=> handleDelievered(stockItem._id) } className='btn btn-dark'>Delievered</button></h5>
                </div>)
            }
               
           
        </div> 
        </div>
         
            
     
       
       
    );
};

export default ManageInventories;
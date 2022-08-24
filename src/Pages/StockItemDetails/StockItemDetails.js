import React from 'react';
import { useState, useEffect } from 'react';
import {Link,  useParams } from 'react-router-dom';
import UseStockItems from '../UseStockItems/UseStockItems';
import { useForm } from "react-hook-form";

const StockItemDetails = () => {
  const  {stockItemId} = useParams();
  const [stockItem , setStockItem] = useState({});
  const { register, handleSubmit } = useForm();

  const [stockItems, setStockItems ] = UseStockItems();

  useEffect(() =>{
     const url = `http://localhost:5000/stocksItem/${stockItemId}`;

     fetch(url)
     .then(res=> res.json())
     .then(data=> setStockItem(data));

  }, []);



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
 };


 const onSubmit = data => {
    console.log(data);
    fetch(`http://localhost:5000/stocksItem`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      .then(res => res.json())
      .then(result => {
        console.log(result)
      })
  
    };

    return (
        <div>

          <div className='w-25 mx-auto'>
           <form className='d-flex flex-column mt-5 ' onSubmit={handleSubmit(onSubmit)}>
             <input className='mb-2 border border-dark border-1' placeholder='quantity' type="number" {...register("quantity")} />
             <input className='btn btn-secondary'  type="submit"  value="Add stockItem" />
           </form>  
          </div>      
    
                  
        <div className='w-25 mx-auto mt-5'>
            {
                 stockItems.map(stockItem => <div key={stockItem._id}> 
                   <img src={stockItem.img} alt="" />
                    <h2>Id: {stockItem._id}</h2>
                    <h3>Name: {stockItem.name} </h3>
                    <p> Description:{stockItem.description}</p>
                    <h4>Price: {stockItem.price}</h4>
                    <h5>Quantity :{stockItem.quantity}</h5>
                    <h6>supplier name :{stockItem.supplier_name}</h6>

                    <button onClick={()=> handleDelievered(stockItem._id) } className='btn btn-dark mb-5'>Delivered</button>
                    </div>)
            }
         </div> 

         <div className='text-center mt-5'>
                <Link to='/manageInventories'>
                    <button className='btn btn-dark'> manage Inventories</button>
                </Link>
            </div>
                
      </div>     
                   
    );            
  
   };

export default StockItemDetails;  


             
                  
            
       

       
            
 
 
 

           
 

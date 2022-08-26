import React from 'react';

import UseStockItems from '../UseStockItems/UseStockItems';
import {Link} from 'react-router-dom';
import Table from 'react-bootstrap/Table';




const ManageInventories = () => {
     const [stockItems, setStockItems ] = UseStockItems();

     const handleDelievered = id =>{
        const windowpopup = window.confirm(' Are you sure you want to Delete this item?');
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
            
         <div className='w-75 mx-auto'>
          <Table striped bordered hover>
             
                 <thead>
                  <tr>
                     <th>Name</th>
                     <th>Price</th>
                     <th>Quantity</th>
                     <th>Supplier name</th>
                     <th>Description</th>
                     <th>Button</th>
                    
                 </tr>
            </thead>
            </Table>

              {
                stockItems.map(stockItem => <div key={stockItem._id}> 
             <Table striped bordered hover>
            <tbody>
            <tr>
              <td> {stockItem.name} </td>
              <td> {stockItem.price}</td>
              <td> {stockItem.quantity}</td>
              <td> {stockItem.supplier_name}</td>
              <td>{stockItem.description}</td>
              <td> <button onClick={()=> handleDelievered(stockItem._id) } className='btn btn-dark mb-4'>Delete</button></td>
           </tr>
        </tbody>
    </Table>    
             </div>)
        }
                                 
    </div>  
              
            <div className='text-center mt-5'>
                <Link to='/addstockItem'>
                    <button className='btn btn-dark'>add new item</button>
                </Link>
            </div>
                 
        </div>       
   
        
 );
 };

export default ManageInventories; 
                   
        
     
         
      
                   
                

          
               
            
      
                   
           
        
    
        
     


      
      
    



                    
       
               
        





   
         
            
     
       
       

import React from 'react';

const StockItem = ({stockItem}) => {
    const {name, img , description , price , quantity , supplier_name} = stockItem
    return (
        <div>
            <div className="card-group mt-5">
                <div className="card g-5 h-100 col-sm-12 col-md-6 col-lg-4 ">
                <img src={img} alt="" />
                <div className="card-body text-center">
                    <h2>name: {name}</h2>
                    <p> {description}</p>
                    <h3>price: {price}</h3>
                    <h4>Quantity: {quantity}</h4>
                    <h5>supplier name: {supplier_name}</h5>
                    <div>
                         <button class="btn btn-primary mx-auto" type="button">Update Stock</button>
                    </div>

                </div>
                </div>

            </div>


            
          
         
           
           
           
           


            
            {/* <div className="card-group mt-5">
                <div className="card g-5 h-100 col-sm-12 col-md-6 col-lg-4 ">
                    <img src={img} alt="" />
                    <div className="card-body text-center">
                        <h5 className="card-title">{name}</h5>
                        <h3>Price:$ {price}</h3>
                        <p className="card-text">{description}</p>
                        <div>
                            <button onClick={() => navigateServiceDetails(_id)} class="btn btn-primary mx-auto" type="button">Button</button>
                        </div>
                    </div>
                </div >

            </div > */}



        </div>
    );
};

export default StockItem;
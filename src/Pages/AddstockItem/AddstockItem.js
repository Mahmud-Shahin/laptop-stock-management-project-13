
import React from 'react';
import { useForm } from "react-hook-form";

const AddstockItem = () => {
    const { register, handleSubmit } = useForm();

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
        <div className='w-25 mx-auto'>
            
            
            <form className='d-flex flex-column mt-5 ' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 border border-dark border-1' placeholder='photo url' type="text"  {...register("img")} />
                <input className='mb-2 border border-dark border-1' placeholder='name' {...register("name")} />
                <textarea className='mb-2 border border-dark border-1' placeholder='description' {...register("description")} />
                <input className='mb-2 border border-dark border-1' placeholder='price' type="number" {...register("price")} />
                <input className='mb-2 border border-dark border-1' placeholder='quantity' type="number" {...register("quantity")} />
                <input className='mb-2 border border-dark border-1' placeholder='supplier_name' {...register("supplier_name")} />
               
                <input className='btn btn-secondary'  type="submit"  value="Add new item" />
            </form>
            
        </div>
    );
};

export default AddstockItem;
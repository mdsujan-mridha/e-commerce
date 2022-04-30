import React from 'react';
import { useForm } from "react-hook-form";

const AddServices = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
         console.log(data);
         const url = `https://lit-river-18873.herokuapp.com/service`
          fetch(url,{
              method:'POST',
              headers: {
                  'content-type':'application/json'
              },
              body:JSON.stringify(data)
          })
          .then(res => res.json())
          .then(result =>{
              console.log(result);
          })
        
        }
    return (
        <div>
            <h1> Service </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Enter product name'  {...register("name", { required: true, maxLength: 20 })} />
                <textarea placeholder='Enter product description' {...register("description")} />
                <input placeholder='Enter product Price' type="number" {...register("Price")} />
                <input placeholder='photo URL' type="text" {...register("img")} />
                <input  type="submit" value="Add Service"/>
            </form>
        </div>
    );
};

export default AddServices;
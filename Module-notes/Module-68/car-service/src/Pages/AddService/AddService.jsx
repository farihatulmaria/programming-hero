import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';
const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/services`;
        fetch(url,{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => console.log(result))
    };
    return (
        <div className='w-50 mx-auto'>
            <h2>Add Service Here</h2>
            <div className='my-3'>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Title' {...register("name", { required: true, maxLength: 20 })} />
                    <textarea placeholder='Description' {...register("description")} />
                    <input placeholder='Price' type="number" {...register("price")} />
                    <input placeholder='Photo URL' type="text" {...register("img")} />
                    <input value='Add Service' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddService;
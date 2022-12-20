import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import addProductData from "../../redux/thunk/products/addProductData";
const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const products = useSelector(state=>state.product.allProducts);
  console.log(products);
  const submit = (data) => {
    const {model,brand,status,price,keyFeature1,keyFeature2,keyFeature3,keyFeature4} =data
    const product = {
        model: model,
        brand: brand,
        status: status === "true" ? true : false,
        price: Number(price),
        keyFeature: [keyFeature1,keyFeature2,keyFeature3,keyFeature4,],
        spec: [],
    };
    addProductData(product)
  };

  return (
    <div className='flex justify-center items-center h-full '>
      <form
        className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
        onSubmit={handleSubmit(submit)}
      >
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='model'>
            Model
          </label>
          <input type='text' id='model' className="border py-2 border-grey-300" {...register("model", {required:true})} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='image'>
            Price
          </label>
          <input type='number' className="border py-2 border-grey-300" name='price' id='price' {...register("price", {required:true})} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='image'>
            Image
          </label>
          <input type='text' className="border py-2 border-grey-300" name='image' id='image' {...register("image", {required:true})} />
        </div>

        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-3' htmlFor='brand'>
            Brand
          </label>
          <select name='brand' id='brand' {...register("brand", {required:true})}>
            <option value='amd'>AMD</option>
            <option value='intel'>Intel</option>
          </select>
        </div>

        <div className='flex flex-col w-full max-w-xs'>
          <h1 className='mb-3'>Availability</h1>
          <div className='flex gap-3'>
            <div>
              <input
                type='radio'
                id='available'
                value={true}
                {...register("status", {required:true})}
              />
              <label className='ml-2 text-lg' htmlFor='available'>
                Available
              </label>
            </div>
            <div>
              <input
                type='radio'
                id='stockOut'
                name='status'
                value={false}
                {...register("status", {required:true})}
              />
              <label className='ml-2 text-lg' htmlFor='stockOut'>
                Stock out
              </label>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full max-w-xs'></div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='keyFeature1'>
            Key Feature 1
          </label>
          <input
            type='text'
            name='keyFeature1' 
            className="border py-2 border-grey-300" 
            id='keyFeature1'
            {...register("keyFeature1", {required:true})}
          />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='keyFeature2'>
            Key Feature 2
          </label>
          <input
            type='text'
            name='keyFeature2' 
            className="border py-2 border-grey-300" 
            id='keyFeature2'
            {...register("keyFeature2", {required:true})}
          />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='keyFeature3'>
            Key Feature 3
          </label>
          <input
            type='text'
            name='keyFeature3' 
            className="border py-2 border-grey-300" 
            id='keyFeature3'
            {...register("keyFeature3", {required:true})}
          />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='keyFeature4'>
            Key Feature 4
          </label>
          <input
            type='text'
            name='keyFeature4' 
            className="border py-2 border-grey-300" 
            id='keyFeature4'
            {...register("keyFeature4", {required:true})}
          />
        </div>

        <div className='flex justify-between items-center w-full'>
          <button
            className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500 '
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
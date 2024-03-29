import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { MdDeleteForever, MdOutlineSystemUpdateAlt } from 'react-icons/md';
import { useDispatch } from "react-redux";
import { useGetProductsQuery, useRemoveProductMutation } from "../../features/api/apiSlice";
import { getProducts } from "../../features/products/productSlice";
const ProductList = () => {
  const { data} = useGetProductsQuery();
  const [ deleteProduct , {isLoading,isError,isSuccess} ] = useRemoveProductMutation()
  const products = data?.data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  useEffect(() => {
    if(isLoading){
      toast.loading("Removing ... ",{id:"removeProduct"})
    }
    if(isError){
      toast.error("Something went wrong while removing product",{id:"removeProduct"})
    }
    if(isSuccess){
      toast.success("Removed product",{id:"removeProduct"})
    }
  }, [isLoading,isError,isSuccess])
  return (
    <div className='flex flex-col justify-center items-center h-full w-full '>
      <div className='w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200'>
        <header className='px-5 py-4 border-b border-gray-100'>
          <div className='font-semibold text-gray-800'>Products</div>
        </header>
        <div className='overflow-x-auto pb-3 px-3'>
          <table className='table-auto w-full'>
            <thead className='text-xs font-semibold uppercase text-gray-400 bg-gray-50'>
              <tr>
                <th></th>
                <th className='p-2'>
                  <div className='font-semibold text-left'>Product Name</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-left'>Brand</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-left'>In Stock</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-left'>Price</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-center'>Update</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-center'>Delete</div>
                </th>
              </tr>
            </thead>

            <tbody className='text-sm divide-y divide-gray-100'>
              {products?.map(({_id,model,brand,status,price}) => (
                <tr key={_id}>
                  <td className='p-2'>
                    <input type='checkbox' className='w-5 h-5' value='id-1' />
                  </td>
                  <td className='p-2'>
                    <div className='font-medium text-gray-800'>{model}</div>
                  </td>
                  <td className='p-2'>
                    <div className='text-left capitalize'>{brand}</div>
                  </td>
                  <td className='p-2'>
                    <div className='text-left'>
                      {status ? (
                        <p className='text-green-500 font-bold'>Available</p>
                      ) : (
                        <p className='text-red-500 font-bold'>Stock out</p>
                      )}
                    </div>
                  </td>
                  <td className='p-2'>
                    <div className='text-left font-bold text-indigo-700'>
                      $ {price}
                    </div>
                  </td>
                  <td className='p-2'>
                    <div className='flex justify-center'>
                      <button className='text-green-700'>
                        <MdOutlineSystemUpdateAlt size={30}/>
                      </button>
                    </div>
                  </td>
                  <td className='p-2'>
                    <div className='flex justify-center'>
                      <button onClick={()=>deleteProduct(_id)} className='text-red-700'>
                        <MdDeleteForever size={30}/>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
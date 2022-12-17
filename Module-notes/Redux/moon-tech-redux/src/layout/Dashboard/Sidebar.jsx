import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className='col-span-2 bg-indigo-200 h-[calc(100vh-25px)] p-5 rounded-lg'>
      <ul className='flex gap-3 flex-col h-full m-0'>
        <li className="underline decoration-indigo-800 underline-offset-8 decoration-2">Admin Dashboard</li>
        <li className="bg-indigo-300 py-2 px-3 rounded-md">
          <Link to='/dashboard'>Product List</Link>
        </li>
        <li className="bg-indigo-300 py-2 px-3 rounded-md">
          <Link to='add-product'> Add Product </Link>
        </li>
        <li className="mt-auto bg-indigo-300 py-2 px-3 rounded-full text-center">
          <Link to='/'> Back to Home </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
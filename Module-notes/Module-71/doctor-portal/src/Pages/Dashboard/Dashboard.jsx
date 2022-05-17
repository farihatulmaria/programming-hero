import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="bg-[#F1F5F9] drawer-content px-4">
                    <h1 className='font-bold text-6xl my-8 text-center'>Dashboard</h1>
                    <Outlet></Outlet>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu space-y-3 p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><Link to='/dashboard'>My Appointment</Link></li>
                        <li><Link to='/dashboard/reviews'>My Reviews</Link></li>
                        <li><Link to='/dashboard/users'>All User</Link></li>
                    </ul>
                
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import Links from '../Links/Links';
const Navbar = () => {
    const [open, setOpen] = useState(true)
    const routes = [
        {
            id:1,
            name: "Home",
            link:"/home"
        },
        {
            id:2,
            name: "Shop",
            link:"/Shop"
        },
        {
            id:3,
            name: "Deals",
            link:"/Deals"
        },
        {
            id:4,
            name: "Coupons",
            link:"/Coupons"
        },
        {
            id:5,
            name: "Contact",
            link:"/Contact"
        },
    ]
    return (
        <nav>
            <div className='w-10 h-10 m-3 md:hidden relative z-10' onClick={()=> setOpen(!open)}>
                {
                    open ? <XIcon/> : <MenuAlt1Icon/>
                }
            </div>
            <ul className={`md:flex justify-center absolute md:static bg-slate-600 text-white w-full duration-500 ease-in ${open ? 'top-0 shadow-xl': '-top-[265px]'}`}>
                {
                    routes.map(route => 
                        <Links 
                        key={route.id}
                        route={route}/>
                    )
                }
            </ul>
        </nav>
    );
};

export default Navbar;
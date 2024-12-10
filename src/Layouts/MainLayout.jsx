import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <h2 className='text-4xl text-red-600'>Navbar</h2>
            <Outlet />
            <h2>Footer</h2>
        </div>
    );
};

export default MainLayout;
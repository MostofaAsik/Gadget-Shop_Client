import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { NavLink } from 'react-router'; // Updated to 'react-router-dom'
import useUserData from '../hooks/useUserData';
import sellerRoutes from '../pages/Dashboard/sellerRoutes';

const Sidebar = ({ handleNavLinkClick }) => {
    const { userData, loading } = useUserData(); // Get userData and loading from the hook

    if (loading) {
        return <p>Loading...</p>;
    }
    console.log(userData, 'sidebar')

    const isSeller = userData?.role === 'seller';

    return (
        <>
            {isSeller && sellerRoutes.map((route) => (
                <NavLink
                    key={route.id}
                    to={route.path}
                    className={({ isActive }) =>
                        `flex items-center space-x-4 py-2 px-4 text-gray-300 hover:bg-blue-800 hover:text-white rounded-md ${isActive ? 'bg-blue-800 text-white' : ''}`
                    }
                    onClick={handleNavLinkClick}
                >
                    <route.icon className="text-2xl" />  {/* Render the icon */}
                    <span>{route.title}</span>
                </NavLink>
            ))}

            <NavLink
                to='/'
                className={({ isActive }) =>
                    `flex items-center space-x-4 py-2 px-4 text-gray-300 hover:bg-blue-800 hover:text-white rounded-md ${isActive ? 'bg-blue-800 text-white' : ''}`
                }
                onClick={handleNavLinkClick} // Close sidebar on click
            >
                <AiOutlineHome className="text-xl" />
                <span>Home</span>
            </NavLink>
            <NavLink
                to='/dashboard/overview'
                className={({ isActive }) =>
                    `flex items-center space-x-4 py-2 px-4 text-gray-300 hover:bg-blue-800 hover:text-white rounded-md ${isActive ? 'bg-orange-800 text-white' : ''}`
                }
                onClick={handleNavLinkClick}
            >
                <HiOutlineDocumentReport className="text-xl" />
                <span>Overview</span>
            </NavLink>
        </>
    );
};

export default Sidebar;

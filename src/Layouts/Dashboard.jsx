import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineLogout, AiOutlineBarChart } from 'react-icons/ai';
import { FaChartBar } from 'react-icons/fa';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { NavLink, Outlet, useNavigate } from 'react-router';
import Sidebar from './Sidebar';
import useAuth from '../hooks/useAuth';

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const handleNavLinkClick = () => setIsSidebarOpen(false);
    const { signOutUser } = useAuth()
    const navigate = useNavigate()
    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                navigate('/')
            })
    }

    return (
        <div className="flex  min-h-screen  bg-gray-100">
            {/* Sidebar */}
            <aside className={`bg-blue-900 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform  ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 transition duration-200 ease-in-out`}>
                <h1 className="text-3xl font-bold text-center">Dashboard</h1>

                <nav className="mt-10">
                    <Sidebar handleNavLinkClick={handleNavLinkClick} />
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <header className="flex items-center justify-between bg-white shadow p-4 md:p-6">
                    <button onClick={toggleSidebar} className="text-blue-900 md:hidden">
                        <AiOutlineMenu className="text-2xl" />
                    </button>

                    <h2 className="text-2xl font-semibold text-gray-800">User Dashboard</h2>

                    <div className="flex items-center space-x-4">
                        <button onClick={handleLogOut} className="flex items-center space-x-2 text-red-500 hover:text-red-700">
                            <AiOutlineLogout className="text-xl" />
                            <span>Logout</span>
                        </button>
                    </div>
                </header>

                <main className="flex-1 p-6 bg-gray-100">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Dashboard;

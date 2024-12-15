import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';
import Loader from '../components/Loader';
import useUserData from '../hooks/useUserData';

const SellerRoute = ({ children }) => {
    const { user, loading: authLoading } = useAuth();
    const { userData, loading: userDataLoading } = useUserData();

    const location = useLocation();


    if (authLoading || userDataLoading) {
        return <Loader />;
    }


    if (userData?.role === 'seller') {
        return children;
    }

    // If not a seller, redirect to home page
    return <Navigate to='/' state={{ from: location }} replace />;
};

export default SellerRoute;

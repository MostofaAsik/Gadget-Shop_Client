import React from 'react';
import useAuth from '../hooks/useAuth';
import Loader from '../components/Loader';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    if (loading) {
        return <Loader />
    }
    if (user) {
        return children
    }
    return <Navigate to='/signin' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;
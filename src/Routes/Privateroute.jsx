import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Components/Loader';
import { AuthContext } from '../Providers/AuthProviders';

const Privateroute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        return <Loader></Loader>;
    }
    if (user) {
        return children;
        
    }
    return <Navigate state={location.pathname} to='/signin'></Navigate>
};

export default Privateroute;
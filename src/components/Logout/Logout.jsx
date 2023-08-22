import React, {useContext, useEffect} from "react";
import {userContext} from '../../context/UserContext'
import {Navigate} from 'react-router-dom';

export const Logout = () => {
    const { clearToken } = useContext(userContext);
    useEffect(() => {
        clearToken();
    }, []);
    return <Navigate to= "/"/>;
}
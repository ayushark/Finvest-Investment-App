import React from 'react'
import { Navigate } from "react-router-dom";

const Protected = ({ children, isLoggedIn}) => {
    console.log(children);
     if (!isLoggedIn) {
        console.log("Status Succeed")
        return <Navigate to="/" replace />;
    }
    return children;
};
export default Protected;
import { Navigate } from "react-router-dom";
export const isAuthenticated = () =>{
    if(typeof window == 'undefined'){
        return false;
    }
    if(localStorage.getItem('token')){
        return JSON.parse(localStorage.getItem('token'));
    }
    else{
        return false;
    }
}


export const getUserEmail = () =>{
    if(typeof window == 'undefined'){
        return false;
    }
    if(localStorage.getItem('user')){
        return JSON.parse(localStorage.getItem('user'));
    }
    else{
        return false;
    }
}


export const HandleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return <Navigate to="/" />
}


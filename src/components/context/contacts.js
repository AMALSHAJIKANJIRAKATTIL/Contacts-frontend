import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const context=createContext();

export const ContextProvider=(props)=>{

    const [contacts,setContacts]=useState([]);
    const nav=useNavigate();




const postContacts= async (ContactsData)=>{
    return await axios.post("https://localhost:5000",ContactsData,config)
    .then((res)=>console.log(res))
    .catch((err)=>{
        console.log(err.response.data.error);
    });
};

const fetchContacts=()=>{
    axios.get("https://localhost:5000",config)
    .then((res)=>{
        const data=res.data.users[0].contact;
        setContacts(data);
    })
    .catch((err)=>console.log(err));
};

useEffect(()=>{
    fetchContacts();
},[])


return (
    <context.Provider value={
        {
            contacts,
            postContacts,
            fetchContacts
        }
    }>
        {props.children}
    </context.Provider>
)
};
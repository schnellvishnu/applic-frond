import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import Userdashboard from './Userdashboard';



const Dashboard = () => {
   
    const navigate = useNavigate();
    const [selectedDIV, setSelectedDIV] = useState("");
// alert(window.localStorage.getItem('loggedInUsername'))
    useEffect(() => {


        if(window.localStorage.getItem('loggedInUsername') != null) {
            setSelectedDIV(<Userdashboard/>);
        }
        else {
            navigate("/");
        }
     
    }, []);


    return(
        <>
            {selectedDIV}
        </>
    )
};


export default Dashboard;
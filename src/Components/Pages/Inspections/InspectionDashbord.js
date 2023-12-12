import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import Dashboardtwo from './Dashboardtwo';



const InspectionDashbord = () => {
   
    const navigate = useNavigate();
    const [selectedDIV, setSelectedDIV] = useState("");
// alert(window.localStorage.getItem('loggedInUsername'))
    useEffect(() => {


        if(window.localStorage.getItem('loggedInUsername') != null) {
            setSelectedDIV(<Dashboardtwo/>);
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


export default InspectionDashbord;
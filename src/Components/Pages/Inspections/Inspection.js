import React, { useEffect, useState } from 'react';

import InspectionDashboardAfterLoginCheck from './InspectionDashboardAfterLoginCheck';
import Loading from '../../Loading';
import { useNavigate } from "react-router";

const Inspection = () => {

    const [selectedDIV, setSelectedDIV] = useState(<Loading/>);
    const navigate = useNavigate();   
// alert(window.localStorage.getItem('loggedInUsername'))
    useEffect(() => {     
      if(window.localStorage.getItem('loggedInUsername') != null) {
        setSelectedDIV(<InspectionDashboardAfterLoginCheck/>);
      }
      else {
          navigate("/");
      }
    }, []);
   
    return (
       <>
          {selectedDIV}
       </>
  )
}
export default Inspection

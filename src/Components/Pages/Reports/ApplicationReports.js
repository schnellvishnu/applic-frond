import React, { useEffect, useState } from 'react';

import ApplicationReportsAfterLoginCheck from './ApplicationReportsAfterLoginnCheck';
import Loading from '../../Loading';
import { useNavigate } from "react-router";

const ApplicationReports = () => {

    const [selectedDIV, setSelectedDIV] = useState(<Loading/>);
    const navigate = useNavigate();   
// alert(window.localStorage.getItem('loggedInUsername'))
    useEffect(() => {     
      if(window.localStorage.getItem('loggedInUsername') != null) {
        setSelectedDIV(<ApplicationReportsAfterLoginCheck/>);
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

export default ApplicationReports;
import React, { useEffect, useState } from 'react';


import Loading from '../../Loading';
import { useNavigate } from "react-router";
import ApplicationServerHistoryAfterLoginCheck from './ApplicationServerHistoryAfterLoginCheck';

const ApplicationHistory = () => {

    const [selectedDIV, setSelectedDIV] = useState(<Loading/>);
    const navigate = useNavigate();   
// alert(window.localStorage.getItem('loggedInUsername'))
    useEffect(() => {     
      if(window.localStorage.getItem('loggedInUsername') != null) {
        setSelectedDIV(<ApplicationServerHistoryAfterLoginCheck/>);
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

export default ApplicationHistory;
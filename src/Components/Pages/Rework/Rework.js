import React, { useEffect, useState } from 'react';

import ReworkAfterLoginCheck from './ReworkAfterLoginCheck';
import Loading from '../../Loading';
import { useNavigate } from "react-router";

const Rework = () => {

    const [selectedDIV, setSelectedDIV] = useState(<Loading/>);
    const navigate = useNavigate();   
// alert(window.localStorage.getItem('loggedInUsername'))
    useEffect(() => {     
      if(window.localStorage.getItem('loggedInUsername') != null) {
        setSelectedDIV(<ReworkAfterLoginCheck/>);
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

export default Rework;
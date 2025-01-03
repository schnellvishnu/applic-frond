import React, { useEffect, useState } from 'react';

import ScannerjobsAfterLoginCheck from './ScannerjobsAfterLoginCheck';
import Loading from '../../Loading';
import { useNavigate } from "react-router";

const Scanner = () => {

    const [selectedDIV, setSelectedDIV] = useState(<Loading/>);
    const navigate = useNavigate();   
// alert(window.localStorage.getItem('loggedInUsername'))
    useEffect(() => {     
      if(window.localStorage.getItem('loggedInUsername') != null) {
        setSelectedDIV(<ScannerjobsAfterLoginCheck/>);
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

export default Scanner;
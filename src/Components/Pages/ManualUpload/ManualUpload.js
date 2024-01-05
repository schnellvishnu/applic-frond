
import React, { useEffect, useState } from 'react';

import ManualUploadAfterLoginCheck from './ManualUploadAfterLoginCheck';
import Loading from '../../Loading';
import { useNavigate } from "react-router";

const ManualUpload = () => {

    const [selectedDIV, setSelectedDIV] = useState(<Loading/>);
    const navigate = useNavigate();   
// alert(window.localStorage.getItem('loggedInUsername'))
    useEffect(() => {     
      if(window.localStorage.getItem('loggedInUsername') != null) {
        setSelectedDIV(<ManualUploadAfterLoginCheck/>);
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

export default ManualUpload;
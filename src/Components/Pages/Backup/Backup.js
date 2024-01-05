
import React, { useEffect, useState } from 'react';

import BackupAfterLoginCheck from './BackupAfterLoginCheck';
import Loading from '../../Loading';
import { useNavigate } from "react-router";

const Backup = () => {

    const [selectedDIV, setSelectedDIV] = useState(<Loading/>);
    const navigate = useNavigate();   
// alert(window.localStorage.getItem('loggedInUsername'))
    useEffect(() => {     
      if(window.localStorage.getItem('loggedInUsername') != null) {
        setSelectedDIV(<BackupAfterLoginCheck/>);
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

export default Backup;
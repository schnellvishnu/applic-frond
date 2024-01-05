
import React, { useEffect, useState } from 'react';

import ProfileView from './ProfileView';
import Loading from '../../Loading';
import { useNavigate } from "react-router";

const Profile = () => {

    const [selectedDIV, setSelectedDIV] = useState(<Loading/>);
    const navigate = useNavigate();   
// alert(window.localStorage.getItem('loggedInUsername'))
    useEffect(() => {     
      if(window.localStorage.getItem('loggedInUsername') != null) {
        setSelectedDIV(<ProfileView/>);
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
export default Profile
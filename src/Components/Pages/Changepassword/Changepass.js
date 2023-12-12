import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import Chnagepasswordview from './Chnagepasswordview';
function Changepass() {
            const navigate = useNavigate();
            const [selectedDIV, setSelectedDIV] = useState("");
                // alert(window.localStorage.getItem('loggedInUsername'))
            useEffect(() => {
                
                
                    if(window.localStorage.getItem('loggedInUsername') != null) {
                            setSelectedDIV(<Chnagepasswordview/>);
                    }
                    else {
                            navigate("/");
                    }
                     
                    }, []);
  return (
    <div>
                  {selectedDIV}
    </div>
  )
}

export default Changepass

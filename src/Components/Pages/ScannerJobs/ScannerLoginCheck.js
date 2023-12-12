import React, { useEffect, useState } from 'react';

import Scanner from './Scanner';

// import Loading from '../Common/Loading';
// import Loading from '../../components/Common/Loading';
import { useNavigate } from "react-router";

function ScannerLoginCheck() {
                    const [selectedDIV, setSelectedDIV] = useState("");
                    const navigate = useNavigate();   
                //  alert(window.localStorage.getItem('loggedInUsername'))
                    useEffect(() => {     
                      if(window.localStorage.getItem('loggedInUsername') != null) {
                        setSelectedDIV(<Scanner/>);
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

export default ScannerLoginCheck

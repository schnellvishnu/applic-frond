import React, { useEffect, useState } from 'react';

import PrinterDataGrid from './PrinterDataGrid';

// import Loading from '../Common/Loading';
// import Loading from '../../components/Common/Loading';
import { useNavigate } from "react-router";
function Printer() {
                    const [selectedDIV, setSelectedDIV] = useState("");
                    const navigate = useNavigate();   
                //  alert(window.localStorage.getItem('loggedInUsername'))
                    useEffect(() => {     
                      if(window.localStorage.getItem('loggedInUsername') != null) {
                        setSelectedDIV(<PrinterDataGrid/>);
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

export default Printer

import React, { useEffect, useState } from 'react';

import AuditReportRead from './sections/AuditReportRead';
// import AuditreportLoginCheck from './sections/AuditreportLoginCheck';
// import Loading from '../Common/Loading';
import Loading from '../../Loading';
import { useNavigate } from "react-router";

function AuditReport() {
                    const [selectedDIV, setSelectedDIV] = useState(<Loading/>);
                    const navigate = useNavigate();   
                //  alert(window.localStorage.getItem('loggedInUsername'))
                    useEffect(() => {     
                      if(window.localStorage.getItem('loggedInUsername') != null) {
                        setSelectedDIV(<AuditReportRead/>);
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

export default AuditReport

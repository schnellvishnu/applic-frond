import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Productionreport from './Productionreport';

function Productionreportcheck() {
                    const [selectedDIV, setSelectedDIV] = useState("");
                    const navigate = useNavigate();   
                //  alert(window.localStorage.getItem('loggedInUsername'))
                    useEffect(() => {     
                      if(window.localStorage.getItem('loggedInUsername') != null) {
                        setSelectedDIV(<Productionreport/>);
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

export default Productionreportcheck

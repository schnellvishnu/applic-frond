import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import Navebar from '../../Navigation/Navebar';
function ReportDash() {

const navigate=useNavigate("")

const navigateToInspectionPage = () => {
                                        navigate("/inspectiondashboard");
                                      };    
 const navigateToProductionReportPage = () => {
                                        navigate("/productionreport");
                                      };                                         
                                      
  return (
                    <div>
      
                    <Navebar/>
                  
                   
                   
                   <div className='Reportdashbord1full'>
                    {/* <button className='btn-btn-danger' onClick={logout}>Logout</button> */}
                    <div className='iconssection1'>
              
                    <button className='btn-btn-danger btn-lg'onClick={navigateToProductionReportPage} style={{backgroundColor:"#F9A7B0"}}>Production Report</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className='btn-btn-danger btn-sm' onClick={navigateToInspectionPage} style={{backgroundColor:"gray"}}>Audit Report</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className='btn-btn-danger' onClick={navigateToInspectionPage}style={{backgroundColor:"#AF9B60"}}>Shipping Report</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  
                    </div>
                   
                    </div>
                  </div>
  )
}

export default ReportDash

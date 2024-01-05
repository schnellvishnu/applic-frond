import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import Navebar from '../../Navigation/Navebar';
import { LiaShippingFastSolid } from "react-icons/lia";
import { AiOutlineAudit } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md"
function ReportDash() {

const navigate=useNavigate("")

const navigateToInspectionPage = () => {
                                        navigate("/inspectiondashboard");
                                      };    
 const navigateToProductionReportPage = () => {
                                        navigate("/productionreport");
                                      };                                         
 const navigateToAuditReportPage = () => {
                                        navigate("/auditreport");
                                      };
const navigateToShippingReportPage = () => {
                                        navigate("/shippingreport");
                                      };                                                                                   
  return (
                    <div>
      
                    <Navebar/>
                  
                   
                   
                   <div className='Reportdashbord1full'>
                    {/* <button className='btn-btn-danger' onClick={logout}>Logout</button> */}
                    <div className='iconssectionreport'>
              
                    <button className='btn-btn-danger btn-lg'onClick={navigateToProductionReportPage} style={{backgroundColor:"#3eb489"}}><MdProductionQuantityLimits size={83} />Production Report</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className='btn-btn-danger btn-sm' onClick={ navigateToAuditReportPage} style={{backgroundColor:"gray"}}> <AiOutlineAudit size={83} />  Audit Report</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className='btn-btn-danger' onClick={navigateToShippingReportPage }style={{backgroundColor:"#AF9B60"}}> <LiaShippingFastSolid size={83}/> Shipping Report</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  
                    </div>
                   
                    </div>
                  </div>
  )
}

export default ReportDash

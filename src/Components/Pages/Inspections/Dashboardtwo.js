import React, { useEffect, useState } from 'react';
  import { Navigate, useNavigate } from "react-router";
  import Navebar from '../../Navigation/Navebar';
  function Dashboardtwo()
  {
    const navigate=useNavigate()
    function logout() {
      window.localStorage.removeItem('loggedInUsername');
    
      window.localStorage.removeItem('loggedInUserPassword');
    
      window.localStorage.removeItem('loggedInUserrole');
      navigate("/");
  
  
    }  
    const  navigateToInspectionPage = () => {
      navigate("/inspectiondashboard");
    };

    const navigateToPrinterpage= () => {
      navigate("/printer");
    };
    const navigateToTntDashboard = () => {
      navigate("/dashboard");
    };
    const navigateToChangepass = () => {
      navigate("/changepass");
    };

    const navigateToReportpage= () => {
      navigate("/reportdash");
    }
    const navigateToScannerpage= () => {
      navigate("/scannerjobs");
    }
//     useEffect(() => {
   
//       if(window.localStorage.getItem('loggedInUsername') && window.localStorage.getItem('loggedInUserPassword')) {


//        }
//        else{
//         navigate("/");
//        }
      
// }, []);
  
   
    return (
      <div>
        <Navebar/>
        
      
        <div className='inspectiondashfull'>
        {/* <button className='btn-btn-danger' onClick={logout}>Logout</button> */}
        <div className='inspectioniconssection1'>
        <button className='btn-btn-danger btn-lg'onClick={navigateToReportpage} style={{backgroundColor:"#93917C"}}>Reports</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className='btn-btn-danger btn-sm' onClick={navigateToPrinterpage}style={{backgroundColor:"#9F8C76"}}>Printer Jobs</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className='btn-btn-danger' onClick={navigateToScannerpage} style={{backgroundColor:"#AF9B60"}}>Scanner Jobs</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       
        </div>
        <br></br>
        <br></br>
      
        <div className='inspectioniconssection2'>
        <button className='btn-btn-danger btn-lg'onClick={navigateToChangepass} style={{backgroundColor:"#483C32"}}>Change Password</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className='btn-btn-danger btn-sm' onClick={logout} style={{backgroundColor:"#AB784E"}}>Logout User</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className='btn-btn-danger' onClick={logout}style={{backgroundColor:"#CD853F"}}>Abouts</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       
        </div>
        <br></br>
        <div className='tntdashbordbutton'>
        <button className='btn-btn-primary' onClick={navigateToTntDashboard}>Tnt Dashboard</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;           
        </div>
        </div>
      </div>
    )
  }
  
 
  


export default Dashboardtwo

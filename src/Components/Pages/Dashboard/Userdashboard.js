import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import Navebar from '../../Navigation/Navebar';
function Userdashboard() {
  const navigate=useNavigate()
  var username = window.localStorage.getItem('loggedInUsername')
  var password = window.localStorage.getItem('loggedInUserPassword')
  
  function logout() {
    window.localStorage.removeItem('loggedInUsername');
  
    window.localStorage.removeItem('loggedInUserPassword');
  
    window.localStorage.removeItem('loggedInUserrole');
    navigate("/");


  } 
  

  const navigateToInspectionPage = () => {
    navigate("/inspectiondashboard");
  };

 
  // const navigateToInspectionPage = () => {
  //   navigate("/inspection");
  // };

//   useEffect(() => {
   
//                 if(window.localStorage.getItem('loggedInUsername') && window.localStorage.getItem('loggedInUserPassword')) {
   

//                  }
//                  else{
//                   navigate("/");
//                  }
                
//   }, []);
 
  return (
    <div>
      
      <Navebar/>
    
     
     
     <div className='dashbord1full'>
      {/* <button className='btn-btn-danger' onClick={logout}>Logout</button> */}
      <div className='iconssection1'>

      <button className='btn-btn-danger btn-lg'onClick={navigateToInspectionPage} style={{backgroundColor:"#F9A7B0"}}>Inspection</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className='btn-btn-danger btn-sm' onClick={logout} style={{backgroundColor:"gray"}}>Rework</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className='btn-btn-danger' onClick={logout}style={{backgroundColor:"#AF9B60"}}>Return SerialNumber</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className='btn-btn-danger' onClick={logout} style={{backgroundColor:"#616D7E"}}>History</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <br></br>
      <br></br>
    
      <div className='iconssection2'>
      <button className='btn-btn-danger btn-lg'onClick={logout} style={{backgroundColor:"#997070"}}>Backup</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className='btn-btn-danger btn-sm' onClick={logout} style={{backgroundColor:"#BDEDFF"}}>Manual Upload</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className='btn-btn-danger' onClick={logout} style={{backgroundColor:"#7DFDFE"}}>My Profile</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className='btn-btn-danger' onClick={logout} style={{backgroundColor:"#6B8E23"}}>Information</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      </div>
    </div>
  )
}

export default Userdashboard

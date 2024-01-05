import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import Navebar from '../../Navigation/Navebar';
import { MdDashboardCustomize } from "react-icons/md";
import { GiBoxUnpacking } from "react-icons/gi";
import { MdAssignmentReturn } from "react-icons/md";
import { MdManageHistory } from "react-icons/md";
import { LuDatabaseBackup } from "react-icons/lu";
import { FaUpload } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoMdInformationCircle } from "react-icons/io";
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
    navigate("/inspection");
  };
  const navigateToHistoryPage = () => {
    navigate("/history");
  };
  const navigateToReworkpage= () => {
    navigate("/rework");
  }
  const navigateToBackuppage= () => {
    navigate("/backup");
  }
  const navigateToManualuploadpage= () => {
    navigate("/manualupload");
  }
  const navigateToMyProfilepage= () => {
    navigate("/profile");
  }
  const navigateToInformationpage= () => {
    navigate("/information");
  }
 
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

      <button className='btn-btn-danger btn-lg' onClick={navigateToInspectionPage }  style={{backgroundColor:"#F9A7B0" }}><MdDashboardCustomize size={100} color={'#3c1414 '}/>Inspection</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {/* <button className='btn-btn-danger btn-sm' onClick={navigateToReworkpage} style={{backgroundColor:"gray"}}><GiBoxUnpacking size={100} />Rework</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className='btn-btn-danger' onClick={logout}style={{backgroundColor:"#AF9B60"}}><MdAssignmentReturn size={100}/>Return SerialNumber</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
            <button className='btn-btn-danger' onClick={navigateToMyProfilepage} style={{backgroundColor:"#7DFDFE"}}> <CgProfile size={100} color={"#008080"} />My Profile</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className='btn-btn-danger' onClick={navigateToHistoryPage} style={{backgroundColor:"#A9A9A9"}}><MdManageHistory size={100} color={"#50404d  "} />History</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <br></br>
      <br></br>
    
      <div className='iconssection2'>
      <button className='btn-btn-danger btn-lg'onClick={navigateToBackuppage} style={{backgroundColor:"#997070"}}><LuDatabaseBackup size={100} color={"#ffcc99"} />Backup</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className='btn-btn-danger btn-sm' onClick={navigateToManualuploadpage} style={{backgroundColor:"#BDEDFF"}}><FaUpload size={100} color={"#ffae42"} />Manual Upload</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <button className='btn-btn-danger' onClick={navigateToInformationpage} style={{backgroundColor:"#faf0e6"}}><IoMdInformationCircle size={120} color={"#e62020"}/>Information</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      </div>
    </div>
  )
}

export default Userdashboard

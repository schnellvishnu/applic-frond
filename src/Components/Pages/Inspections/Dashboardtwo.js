 import React, { useEffect, useState } from 'react';
  import { Navigate, useNavigate } from "react-router";
  import Navebar from '../../Navigation/Navebar';
  import { BiSolidReport } from "react-icons/bi";
  import { LiaQrcodeSolid } from "react-icons/lia";
  import { TbCameraCode } from "react-icons/tb";
  import { MdLockPerson } from "react-icons/md";
  import { SlLogout } from "react-icons/sl";
  import { FcAbout } from "react-icons/fc";
  import { RiArrowGoBackFill } from "react-icons/ri";
  import axios from "axios";
  import { Link, useParams } from "react-router-dom";
  function Dashboardtwo()
  {
    var loggedInUsername=window.localStorage.getItem('loggedInUsername')

  var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')
    const navigate=useNavigate()
    function logout() {
      window.localStorage.removeItem('loggedInUsername');
    
      window.localStorage.removeItem('loggedInUserPassword');
    
      window.localStorage.removeItem('loggedInUserrole');

      axios

  .post('http://127.0.0.1:8000/accounts/logoutController',

  {

    "username": loggedInUsername,    

    "userrole": loggedInUserrole,

  })

  .then((response) => {

      navigate("/");

  })
      

  
  
    }  
    const  navigateToInspectionPage = () => {
      navigate("/inspectiondashboard");
    };

    // const navigateToPrinterpage= () => {
    //   navigate("/printer");
    // };
    const navigateToPrinterpage= () => {
      navigate( <a href="http://127.0.0.1:8000/masterapp/printer/all"> </a>);
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
      navigate("/scanner");
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
        
        <button className='btn-btn-danger1 btn-lg'onClick={navigateToReportpage} style={{backgroundColor:"#ff878d "}}><BiSolidReport size={120} color={"#fffacd "} />Reports</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {/* <button className='btn-btn-danger1 btn-sm' onClick={navigateToPrinterpage}style={{backgroundColor:"#48d1cc"}}> <LiaQrcodeSolid size={120} />Printer Jobs</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
        <Link to="http://127.0.0.1:8000/masterapp/printer/all">
        &nbsp; &nbsp;  <button className="btn-btn-danger1 btn-sm" style={{backgroundColor:"#48d1cc"}}><LiaQrcodeSolid size={120} />Printer Jobs</button>
        </Link>
        <button className='btn-btn-danger1' onClick={navigateToScannerpage} style={{backgroundColor:"#8fbc8f"}}> <TbCameraCode  size={120} color={"#003366 "}/>Scanner Jobs</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       
        </div>
        <br></br>
        <br></br>
      
        <div className='inspectioniconssection2'>
        <button className='btn-btn-danger1 btn-lg'onClick={navigateToChangepass} style={{backgroundColor:"#c9ffe5  "}}><MdLockPerson size={100} color={"#4a646c"} />Change Password</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className='btn-btn-danger1 btn-sm' onClick={logout} style={{backgroundColor:"#AB784E"}}><SlLogout size={100} />  Logout User</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className='btn-btn-danger1' onClick={logout}style={{backgroundColor:"#007474"}}> <FcAbout size={100} color={"#66ff00 "} />Abouts</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       
        </div>
        <br></br>
        <div className='tntdashbordbutton'>
        <button className='btn-btn-primary' onClick={navigateToTntDashboard} style={{backgroundColor:"#5f9ea0 "}}> <RiArrowGoBackFill size={60} /> Tnt Dashboard</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;           
        </div>
        </div>
      </div>
    )
  }
  
 
  


export default Dashboardtwo

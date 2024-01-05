import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
// import Navbar from "../Navigation/Navbar";
import Loading from "../../Loading";

import NotAuthorizedSection from "../../../NotAuthorizedSection";
import Chnagepasswordview from "./Chnagepasswordview";
const ChangepasswordAfterLoginCheck = () => {

  const { operation } = useParams();
  const { uniqueID } = useParams();

    

  const [selectedDIV_state, setSelectedDIV_state] = useState(<Loading/>);


function checkAuthorization() {
  axios
  .get("http://127.0.0.1:8000/accounts/userrolePermissionsRead")
  .then((res) => {
    var authorized = false;
    // alert("haiii")
    // alert(res.data.length)
    // alert(res.data[0].admin['CREATE']);
    res.data.forEach(element => {
      if(element['activity_name'] === 'applicationchangepassword') {

        if(window.localStorage.getItem('loggedInUserrole') === "admin") {
          //alert(element.activity_name);

         element.admin['UPDATE']==="Checked" ? setSelectedDIV_state(<Chnagepasswordview/>) : setSelectedDIV_state(<NotAuthorizedSection/>);
          
        }
        else if(window.localStorage.getItem('loggedInUserrole') === "operator") {
         
          element.operator['UPDATE']==="Checked" ? setSelectedDIV_state(<Chnagepasswordview/>) :setSelectedDIV_state(<NotAuthorizedSection/>);
          
        }
        else if(window.localStorage.getItem('loggedInUserrole') === "supervisor") {
         
        
           element.supervisor['UPDATE']==="Checked" ? setSelectedDIV_state(<Chnagepasswordview/>) :setSelectedDIV_state(<NotAuthorizedSection/>);      
          
        }
        else if(window.localStorage.getItem('loggedInUserrole') === "masterdata") {
   
    
              element.masterdata['UPDATE']==="Checked" ? setSelectedDIV_state(<Chnagepasswordview/>) :setSelectedDIV_state(<NotAuthorizedSection/>);      
        
        }
      }
    });

  });
}


  useEffect(() => {
    checkAuthorization();
  }, []);

  return (
    <>

<div id="shippingreportfullcard">
                           
                           <div id="content-wrapper" class="d-flex flex-column">
                               <div id="shippingorderreport">
                                   {/* <Header></Header>   */}
                                   {selectedDIV_state}
                               </div>
                               
                               {/* </Sidebar>Footer></Footer> */}
               
                           </div>
                        
                   </div>

    </>
  );
};

export default ChangepasswordAfterLoginCheck;
import React, { useEffect, useState } from 'react';

// import Sidebar from '../../Common/Sidebar';
// import Header from '../../Common/Header';
// import Footer from '../../Common/Footer';
import axios from "axios";
import Scannerview from './Scannerview';
// import { Alert } from 'react-bootstrap';
import Loading from '../../Loading';
import NotAuthorizedSection from '../../../NotAuthorizedSection';

const ScannerjobsAfterLoginCheck = () => {
   


    const [selectedDIV_state, setSelectedDIV_state] = useState(<Loading/>);

   function checkAuthorization() {
    axios
    .get("http://127.0.0.1:8000/accounts/userrolePermissionsRead")
    .then((res) => {
      var authorized = false;
      // alert("haiii")
      // alert(res.data.length)
      // alert(res.data[0].admin['CREATE']);
      
    //   alert(res.data[0]['activity_name']);

      res.data.forEach(element => {
        if(element['activity_name'] === 'scannerjobs') {
          if(window.localStorage.getItem('loggedInUserrole') === "admin") {
            // alert(element.admin['READ']);
         
            element.admin['READ']==="Checked" ? setSelectedDIV_state(<Scannerview/>) :setSelectedDIV_state(<NotAuthorizedSection/>);
       
            
          
          
          }
          else if(window.localStorage.getItem('loggedInUserrole') === "operator") {
           
              element.operator['READ']==="Checked" ? setSelectedDIV_state(<Scannerview/>) :setSelectedDIV_state(<NotAuthorizedSection/>);
          
            
             
            
          }
          else if(window.localStorage.getItem('loggedInUserrole') === "supervisor") {
          
             element.supervisor['READ']==="Checked" ? setSelectedDIV_state(<Scannerview/>) :setSelectedDIV_state(<NotAuthorizedSection/>);
          
             
                   
          }
          else if(window.localStorage.getItem('loggedInUserrole') === "masterdata") {
           
               element.masterdata['READ']==="Checked"?setSelectedDIV_state(<Scannerview/>):setSelectedDIV_state(<NotAuthorizedSection/>);
            
       
            
          }
        }
      });

    });
  }

    useEffect(() => {     
      checkAuthorization();
    }, []);
   
    return (
                    <div >
                           
                    <div id="content-wrapper" class="d-flex flex-column">
                        <div >
                            {/* <Header></Header>   */}
                            {selectedDIV_state}
                        </div>
                        
                        {/* </Sidebar>Footer></Footer> */}
        
                    </div>
                 
            </div>
  )
}

export default ScannerjobsAfterLoginCheck;
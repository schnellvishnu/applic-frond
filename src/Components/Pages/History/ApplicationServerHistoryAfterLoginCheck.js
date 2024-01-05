import React, { useEffect, useState } from 'react';

import axios from "axios";
import ApplicationserverHistoryRead from './ApplicationserverHistoryRead';
// import { Alert } from 'react-bootstrap';
import Loading from '../../Loading';
import NotAuthorizedSection from '../../../NotAuthorizedSection';

const ApplicationServerHistoryAfterLoginCheck = () => {
   


    const [selectedDIV_state, setSelectedDIV_state] = useState(<Loading/>);

   function checkAuthorization() {
    axios
    .get("http://127.0.0.1:8000/accounts/userrolePermissionsRead")
    .then((res) => {
      var authorized = false;
      // alert("haiii")
      // alert(res.data.length)
      // alert(res.data[0].admin['CREATE']);
      
//       alert(res.data[0]['activity_name']);

      res.data.forEach(element => {
                    if(element['activity_name'] === 'applicationserverhistory') {
                                        if(window.localStorage.getItem('loggedInUserrole') === "admin") {
                                          //alert(element.admin['DELETE']);
                                              if(element.admin['DELETE']==="Checked") {
                                                  element.admin['READ']==="Checked" ? setSelectedDIV_state(<ApplicationserverHistoryRead  deleteButtonStatus = "enabled" />) :setSelectedDIV_state(<NotAuthorizedSection/>);
                                              }
                                         
                                              else if(element.admin['DELETE']==="Unchecked" ) {
                                                  element.admin['READ']==="Checked" ? setSelectedDIV_state(<ApplicationserverHistoryRead  deleteButtonStatus = "disabled" />) :setSelectedDIV_state(<NotAuthorizedSection/>);
                                              }
                                         
                                          }
                                        else if(window.localStorage.getItem('loggedInUserrole') === "operator") {
                                          if(element.operator['DELETE']==="Checked") {
                                              element.operator['READ']==="Checked" ? setSelectedDIV_state(<ApplicationserverHistoryRead  deleteButtonStatus = "enabled" />) :setSelectedDIV_state(<NotAuthorizedSection/>);
                                               }
                                           
                                               else if(element.operator['DELETE']==="Unchecked" ) {
                                                element.operator['READ']==="Checked" ? setSelectedDIV_state(<ApplicationserverHistoryRead  deleteButtonStatus = "disabled" />) :setSelectedDIV_state(<NotAuthorizedSection/>);
                                               }
                                          }
                                        else if(window.localStorage.getItem('loggedInUserrole') === "supervisor") {
                                          if(element.supervisor['DELETE']==="Checked") {
                                              element.supervisor['READ']==="Checked" ?setSelectedDIV_state(<ApplicationserverHistoryRead deleteButtonStatus = "enabled" />) :setSelectedDIV_state(<NotAuthorizedSection/>);
                                               }
                                           
                                               else if(element.supervisor['DELETE']==="Unchecked" ) {
                                                element.supervisor['READ']==="Checked" ? setSelectedDIV_state(<ApplicationserverHistoryRead deleteButtonStatus = "disabled" />) :setSelectedDIV_state(<NotAuthorizedSection/>);
                                               }    
                                          }
                                        else if(window.localStorage.getItem('loggedInUserrole') === "masterdata") {
                                          if(element.masterdata['DELETE']==="Checked") {
                                              element.masterdata['READ']==="Checked" ? setSelectedDIV_state(<ApplicationserverHistoryRead deleteButtonStatus = "enabled" />) :setSelectedDIV_state(<NotAuthorizedSection/>);
                                          }
                                     
                                          else if(element.masterdata['DELETE']==="Unchecked" ) {
                                              element.masterdata['READ']==="Checked" ? setSelectedDIV_state(<ApplicationserverHistoryRead  deleteButtonStatus = "disabled" />) :setSelectedDIV_state(<NotAuthorizedSection/>);
                                          }
                                     
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

export default ApplicationServerHistoryAfterLoginCheck;
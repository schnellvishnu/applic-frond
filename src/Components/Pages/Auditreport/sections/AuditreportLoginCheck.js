import React, { useEffect, useState } from 'react';

// import Sidebar from '../../Common/Sidebar';
// import Header from '../../Common/Header';
// import Footer from '../../Common/Footer';
import axios from "axios";
import AuditReportRead from './AuditReportRead';

function AuditreportLoginCheck() {
    const loadingSection = <div class="container-fluid">
            <div class="card shadow mb-4"> 
                <div class="card-body">  
                    <div class="px-3 py-5 text-primary text-center">
                        <div class="spinner-border" role="status">
                              <span class="sr-only">Loading...</span>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
          
      const [selectedDIV_state, setSelectedDIV_state] = useState(loadingSection);
                
      const notAuthorizedSection = <div class="container-fluid">
                <div class="card shadow mb-4"> 
                            <div class="card-body">  
                              
                              <div class="text-primary text-center">
                                <img src='/img/forbidden.jpg'/>
                              </div>
                            </div>
                        </div>
                    </div>
          
              function checkAuthorization() 
              {
                axios
                .get(window.url+"/accounts/userrolePermissionsRead")
                .then((res) => {
                  var authorized = false;
                  //  alert("haiii")
                  //   alert(window.localStorage.getItem('loggedInUserrole'))
                  //   alert( res.data[0].admin['READ']);
                  //alert(res.data[4].activity_name)
                  res.data.forEach(element=>{
                    // alert(element.activity_name)
                    if(element['activity_name'] ==='auditreport'){
                      if(window.localStorage.getItem('loggedInUserrole') === "admin") {
                          if(element.admin['DELETE']==="Checked" && element.admin['UPDATE']==="Checked") {
                            element.admin['READ']==="Checked" ? setSelectedDIV_state(<AuditReportRead deleteButtonStatus = "enabled" editButtonStatus = "enabled"/>) :setSelectedDIV_state(notAuthorizedSection);
                          }
                          else if(element.admin['DELETE']==="Checked" && element.admin['UPDATE']==="Unchecked") {
                            element.admin['READ']==="Checked" ? setSelectedDIV_state(<AuditReportRead deleteButtonStatus = "enabled" editButtonStatus = "disabled"/>) :setSelectedDIV_state(notAuthorizedSection);
                          }
                          else if(element.admin['DELETE']==="Unchecked" && element.admin['UPDATE']==="Checked") {
                            element.admin['READ']==="Checked" ? setSelectedDIV_state(<AuditReportRead deleteButtonStatus = "disabled" editButtonStatus = "enabled"/>) :setSelectedDIV_state(notAuthorizedSection);
                          }
                          else if(element.admin['DELETE']==="Unchecked" && element.admin['UPDATE']==="Unchecked") {
                            element.admin['READ']==="Checked" ? setSelectedDIV_state(<AuditReportRead deleteButtonStatus = "disabled" editButtonStatus = "disabled"/>) :setSelectedDIV_state(notAuthorizedSection);
                          }
                      }
                      else if(window.localStorage.getItem('loggedInUserrole') === "operator") {
                          if(element.operator['DELETE']==="Checked" && element.operator['UPDATE']==="Checked") {
                            element.operator['READ']==="Checked" ? setSelectedDIV_state(<AuditReportRead deleteButtonStatus = "enabled" editButtonStatus = "enabled"/>) :setSelectedDIV_state(notAuthorizedSection);
                          }
                          else if(element.operator['DELETE']==="Checked" && element.operator['UPDATE']==="Unchecked") {
                            element.operator['READ']==="Checked" ? setSelectedDIV_state(<AuditReportRead deleteButtonStatus = "enabled" editButtonStatus = "disabled"/>) :setSelectedDIV_state(notAuthorizedSection);
                          }
                          else if(element.operator['DELETE']==="Unchecked" && element.operator['UPDATE']==="Checked") {
                            element.operator['READ']==="Checked" ? setSelectedDIV_state(<AuditReportRead deleteButtonStatus = "disabled" editButtonStatus = "enabled"/>) :setSelectedDIV_state(notAuthorizedSection);
                          }
                          else if(element.operator['DELETE']==="Unchecked" && element.operator['UPDATE']==="Unchecked") {
                            element.operator['READ']==="Checked" ? setSelectedDIV_state(<AuditReportRead deleteButtonStatus = "disabled" editButtonStatus = "disabled"/>) :setSelectedDIV_state(notAuthorizedSection);
                          }
                      
                      }
                      else if(window.localStorage.getItem('loggedInUserrole') === "supervisor") {
                          if(element.supervisor['DELETE']==="Checked" && element.supervisor['UPDATE']==="Checked") {
                            element.supervisor['READ']==="Checked" ? setSelectedDIV_state(<AuditReportRead deleteButtonStatus = "enabled" editButtonStatus = "enabled"/>) :setSelectedDIV_state(notAuthorizedSection);
                          }
                          else if(element.supervisor['DELETE']==="Checked" && element.supervisor['UPDATE']==="Unchecked") {
                            element.supervisor['READ']==="Checked" ? setSelectedDIV_state(<AuditReportRead deleteButtonStatus = "enabled" editButtonStatus = "disabled"/>) :setSelectedDIV_state(notAuthorizedSection);
                          }
                          else if(element.supervisor['DELETE']==="Unchecked" && element.supervisor['UPDATE']==="Checked") {
                            element.supervisor['READ']==="Checked" ? setSelectedDIV_state(<AuditReportRead deleteButtonStatus = "disabled" editButtonStatus = "enabled"/>) :setSelectedDIV_state(notAuthorizedSection);
                          }
                          else if(element.supervisor['DELETE']==="Unchecked" && element.supervisor['UPDATE']==="Unchecked") {
                            element.supervisor['READ']==="Checked" ? setSelectedDIV_state(<AuditReportRead deleteButtonStatus = "disabled" editButtonStatus = "disabled"/>) :setSelectedDIV_state(notAuthorizedSection);
                          }
                      }
                      else if(window.localStorage.getItem('loggedInUserrole')==="masterdata")
                      {
                          if(element.masterdata['DELETE']==="Checked"&&element.masterdata['UPDATE']==="Checked"){
                            element.masterdata['READ']==="Checked"?setSelectedDIV_state(<AuditReportRead deleteButtonStatus="enabled" editButtonStatus="enabled"/>):setSelectedDIV_state(notAuthorizedSection);
                          }
                          else if(element.masterdata['DELETE']==='Checked'&&element.masterdata['UPDATE']==="Unchecked")
                          {
                            element.masterdata['READ']==="Checked"?setSelectedDIV_state(<AuditReportRead deleteButtonStatus="enabled" editButtonStatus="disabled"/>):setSelectedDIV_state(notAuthorizedSection);
                          }
                          else if(element.masterdata['DELETE']==='Unchecked'&&element.masterdata['UPDATE']==="Checked")
                          {
                            element.masterdata['READ']==='Checked'?setSelectedDIV_state(<AuditReportRead deleteButtonStatus="disabled" editButtonStatus="enabled"/>):setSelectedDIV_state(notAuthorizedSection)
                          }
                          else if(element.masterdata['DELETE']==='Unchecked'&&element.masterdata['UPDATE']==='Unchecked')
                          {
                            element.masterdata['READ']==='Checked'?setSelectedDIV_state(<AuditReportRead deleteButtonStatus="disabled" editButtonStatus="disabled"/>):setSelectedDIV_state(notAuthorizedSection);
                          }
          
                      }
                    }
                })
                
                  });
              }
          
              useEffect(() => {     
                checkAuthorization();
              }, []);
             
              return (
                  <div id="wrapper">
                           
                      <div id="content-wrapper" class="d-flex flex-column">
                          <div id="content">
                              {/* <Header></Header>   */}
                              {selectedDIV_state}
                          </div>
                          
                          {/* </Sidebar>Footer></Footer> */}
          
                      </div>
                   
              </div>
              )
}

export default AuditreportLoginCheck

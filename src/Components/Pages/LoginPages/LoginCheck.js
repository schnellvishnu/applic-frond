import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router";

function LoginCheck() {

 var warningDIV =       
              <div class="alert alert-success" role="alert" id="loginalert">
                    Enter your Email ID and Password
              </div>
    const navigate = useNavigate();
    const [selectedDIV, setSelectedDIV] = useState("");
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userrole, setUserrole] = useState("");
       
    const [warningDIVstate, changeWarningDIVstate] = useState(warningDIV); 
    
    function isValidEmail(email) {
                    return /\S+@\S+\.\S+/.test(email);
                  }

     function handleSubmit (){
                    var testPassed = false;
                    if(username ==="" || !isValidEmail) {
                    warningDIV =       
                      <div class="alert alert-danger" role="alert">
                       Invalid Email ID
                    </div> 
                    changeWarningDIVstate(warningDIV);
                    testPassed=false

                    }
                    else{
                                        testPassed=true
                    }
                    if(testPassed===true){
                      if(password ===""){
                        warningDIV =       
                        <div class="alert alert-danger" role="alert">
                         Invalid password
                      </div>
                      changeWarningDIVstate(warningDIV);
                      testPassed=false 
                      }
                                        
                    }
                    else{
                      testPassed=true;
                    } 

 if(testPassed===true){
  // alert("hi")
  axios
  .post("http://127.0.0.1:8000//accounts/logInController",
  {
    "username":username,
    "password":password
  }
  )
  .then((response)=>{
    if(response.data==="UserDoesNotExist"){
      warningDIV =       
                        <div class="alert alert-danger" role="alert">
                         User Does Not Exists
                      </div>
                       changeWarningDIVstate(warningDIV);
    }
    else if(response.data==="passwordDoesNotMatch"){
      warningDIV =       
      <div class="alert alert-danger" role="alert">
       Incorrect Password
    </div>
     changeWarningDIVstate(warningDIV);
    }
    else {
      // alert(response.data['employeeid']);
      window.localStorage.setItem('loggedInUsername', username);
      window.localStorage.setItem('loggedInUserPassword', password);
      window.localStorage.setItem('loggedInUserrole', response.data['userrole']);
      window.localStorage.setItem('loggedInUsernameName', response.data['username']);
      window.localStorage.setItem('loggedInemployeeid', response.data['employeeid']);
      navigate("/dashboard");            

    }
    
  })

}
     }  
     var headfield=
     <h2><pre>        Track & Trace Login</pre></h2>
       var usernameFieldWidget = <input
             type="text"
             className="form-control"
             onChange={(e) => setUsername(e.target.value)}
           /> 
   
       var passwordFieldWidget = <input
             type="password"
             className="form-control"
             aria-describedby="emailHelp"
             onChange={(e) => setPassword(e.target.value)}
           />
     
     
  return (
    <>
          
    {/* {selectedDIV} */}
  <div className='head'>
    <div className='full'>


        <div class="container-fluid">
          <div class="card shadow mb-4" id="loginfullcard"> 
            <div class="card-header py-3" id="logincardhead">
              <div className='row'>
                  <div className='col-10' id="loginhead">
                        {headfield}
                </div>
            </div>
                                      
        </div>

  <div class="card-body">  

      {warningDIVstate}
  <table class="table table-borderless productionOrderReportSearchTable" id="loginReportSearchTableID">
        <tbody>
              <tr>
                  <td class="productionOrderReportSearchTD">Email</td>
                    <td class="productionOrderReportSearchTD">
                          {usernameFieldWidget}
                    </td>
              </tr>
              <tr>
                    <td class="productionOrderReportSearchTD">Password</td>
                    <td class="productionOrderReportSearchTD">
                          {passwordFieldWidget}
                    </td>
              </tr>
              <tr>
                <td class="productionOrderReportSearchTD">
                      
                    <button className="btn btn-success" onClick={handleSubmit}>Login</button>
                </td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
    </div>
  </div>
</div>


  </>

  )
}

export default LoginCheck

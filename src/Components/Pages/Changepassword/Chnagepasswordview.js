import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router";

function Chnagepasswordview() {
  var warningDIV =       
  <div class="alert alert-success" role="alert" id="loginalert">
      Enter Your Old Password
  </div>
const navigate = useNavigate();
const [selectedDIV, setSelectedDIV] = useState("");

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [userrole, setUserrole] = useState("");
const[newpassword,setNewpassword]=useState("");
const[confirmpassword,setConfirmpassword]=useState("");

const [warningDIVstate, changeWarningDIVstate] = useState(warningDIV); 
var username1 = window.localStorage.getItem('loggedInUsername')
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
// alert(newpassword)
// alert(confirmpassword)


axios
.post("http://127.0.0.1:8000/accounts/chnew/",
  {
      "username":username1,
      "password":password,
      "newpassword":newpassword,
      "conpass":confirmpassword

  }
)
.then((response)=>{
// if(response.data==="UserDoesNotExist"){
// warningDIV =       
//       <div class="alert alert-danger" role="alert">
//        User Does Not Exists
//     </div>
//      changeWarningDIVstate(warningDIV);
// }
if(response.data==="passwordDoesNotMatch"){
    warningDIV =       
    <div class="alert alert-danger" role="alert">
    Incorrect Password
    </div>
    changeWarningDIVstate(warningDIV);
}
else if(response.data==="conpasswordDoesNotMatch"){
      warningDIV =       
      <div class="alert alert-danger" role="alert">
      Your Confirm Password is Incorrect
    </div>
      changeWarningDIVstate(warningDIV);
  }
 else if(response.data===200){
    warningDIV =       
    <div class="alert alert-success" role="alert">
    Password Changed Successfully
  </div>
  changeWarningDIVstate(warningDIV);
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
var newpasswordFieldWidget = <input
                                type="password"
                                className="form-control"
                                aria-describedby="emailHelp"
                                onChange={(e) => setNewpassword(e.target.value)}
                            />

var confirmpasswordFieldWidget = <input
                                    type="password"
                                    className="form-control"
                                    aria-describedby="emailHelp"
                                    onChange={(e) => setConfirmpassword(e.target.value)}
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
{/* <tr>
<td class="productionOrderReportSearchTD">Email</td>
<td class="productionOrderReportSearchTD">
{usernameFieldWidget}
</td>
</tr> */}
<tr>
<td class="emailid">Password</td>
<td class="productionOrderReportSearchTD">
{passwordFieldWidget}
</td>
</tr>
<tr>
<td class="passwordid">New Password</td>
<td class="productionOrderReportSearchTD">
{newpasswordFieldWidget}
</td>
</tr>
<tr>
<td class="passwordid">Confirm Password</td>
<td class="productionOrderReportSearchTD">
{confirmpasswordFieldWidget}
</td>
</tr>

<tr>
<td class="productionOrderReportSearchTD">
    
<button className="btn btn-success" onClick={handleSubmit}>Change</button>
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

export default Chnagepasswordview

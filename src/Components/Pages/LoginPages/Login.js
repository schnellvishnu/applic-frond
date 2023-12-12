import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import LoginCheck from './LoginCheck';



const Login = () => {
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
  
  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     window.localStorage.setItem('username', username);
  //     window.localStorage.setItem('password', password);

  //     axios
  //     .post('http://127.0.0.1:8000//accounts/userAuthVerify', 
  //     {
  //       "username": username,    
  //       "password": password, 
  //     },
  //     {
         
  //     })
  //     .then((response) => {
  //       //navigate("/account/read");
  //       //if(response.data === 201) {
  //         if(response.data === "notExists") {
  //           navigate(<LoginCheck/>)
            
  //         }
  //         else{
  //           // alert(response.data)
  //         window.localStorage.setItem('username', username);
  //         window.localStorage.setItem('password', password);
  //         window.localStorage.setItem('userrole', response.data);

  //         navigate("/dashboard");
  //         }
          
  //     });
  //  };
 
  useEffect(() => {
   // alert(window.localStorage.getItem('loggedInUsername'));
    if(window.localStorage.getItem('loggedInUsername')) {
      axios
      .post('http://127.0.0.1:8000//accounts/userAuthVerify', 
      {
        "username": window.localStorage.getItem('loggedInUsername'),    
        "password": window.localStorage.getItem('loggedInUserPassword'), 
      })
      .then((response) => {
        // alert(response.data);

        if(response.data === "notExists") {
          setSelectedDIV(<LoginCheck/>);
          
        }
        else {
          window.localStorage.setItem('loggedInUsername', window.localStorage.getItem('loggedInUsername'));
          window.localStorage.setItem('loggedInUserPassword', window.localStorage.getItem('loggedInUserPassword'));
          window.localStorage.setItem('loggedInUserrole', window.localStorage.getItem('loggedInUserrole'));
          window.localStorage.setItem('loggedInemployeeid', window.localStorage.getItem('loggedInemployeeid'));
        
          navigate("/dashboard");
        }
        //navigate("/dashboard");
        //setSelectedDIV(<UserLogin/>);

      });
    }
    else {
   
      setSelectedDIV(<LoginCheck/>);
     
    }
  });

  // var headfield=
  // <h2><pre>        Track & Trace Login</pre></h2>
  //   var usernameFieldWidget = <input
  //         type="text"
  //         className="form-control"
  //         onChange={(e) => setUsername(e.target.value)}
  //       /> 

  //   var passwordFieldWidget = <input
  //         type="password"
  //         className="form-control"
  //         aria-describedby="emailHelp"
  //         onChange={(e) => setPassword(e.target.value)}
  //       />

  return(
    <>
          
                    {selectedDIV}
      {/* <div className='head'>
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
                
                 */}
    </>

    )
  
}

export default Login;
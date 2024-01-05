import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
// import Select from "react-select";
import * as  AiIcons from "react-icons/ai";
import Navebar from "../../Navigation/Navebar";
import Loading from "../../Loading";
import Select from "react-select";
import {MdPreview} from 'react-icons/md';
import { Box,useTheme  } from "@mui/material";

import { tokens } from '../../../theme';

const ScannerRework = () => {
                    const navigate = useNavigate();      
                    const[gtin,setGtin] =useState("");
                    const[expiration_date,setExp] =useState("");
                    const[lot,setLot]=useState("");
                    const[numbers,setNumbers]=useState("");
                    const[scannedvalue,setScannedValue]=useState("");
                    const[oldstatus,setOldstatus]=useState("");
                    const[newstatus,setNewstatus]=useState("");
                    const [gtinSelectedLabel,setGtinSelectedLabel] = useState("");
                     const [gtinSelectedValue,setGtinSelectedValue] = useState("");
                     const [updatebutton,setUpdatebutton] = useState(true);
                    const[gtinoptions,setGtinoptions]=useState("")
                    const theme = useTheme();
                    const colors = tokens(theme.palette.mode);
                    const [data, setData] = useState([]);
                    const [tabledark, setTableDark] = useState("");
                                      
                    const [userDataRows, setUserDataRows] = useState([]);
                    const { serialno } = useParams();
                    const { uniqueID } = useParams();
                    var loggedInUsername=window.localStorage.getItem('loggedInUsername')

                    var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')
                    function getScanneddata() {
                                        // alert("cvbc")
                                        axios.post("http://127.0.0.1:8000/masterapp/scannerrework/",


                                        {
                                            "gtin":gtin,
                                            "loggedInUsername":loggedInUsername,

                                            "loggedInUserrole":loggedInUserrole
                                        }
                                        )

                                        .then((res)=>{
                                        //     alert(res.data)
                                            var ser=JSON.parse(res.data) 
                                            setNumbers(ser.serialnumber)
                                            // setNumbers(res.data[0].numbers)
                                            setScannedValue(ser.decodedtext)
                                            setUpdatebutton(false)

                                        })
                                                 
                    }

                    function getGtinnumber() {
                                        //alert("anu");
                                      
                                      
                                        axios.get("http://127.0.0.1:8000/masterapp/scannerdata/"+uniqueID+"/")
                                        .then((res)=>{
                                            var ser=JSON.parse(res.data[0].grade) 
                                        //     setNumbers(ser.serialnumber)
                                        setGtin(res.data[0].gtin);
                                        setOldstatus(res.data[0].status)
                                 
                                        axios.get("http://127.0.0.1:8000/masterapp/printergtinindividual/"+res.data[0].gtin+"/")
                                        .then((res1)=>{
                                        //   alert(res.data[0].expiration_date)
                                           setExp(res1.data[0].expiration_date)
                                           setLot(res1.data[0].lot)
                                          })
                                        })
                            
                                                        
                                        }
                                   

                                        function changestatus(){
                                                            axios
                                                            .put(`http://127.0.0.1:8000/masterapp/scannerdata/update/${uniqueID}`, 
            
                                                            {
                                                        
                                                                "id":uniqueID,
                                                                "status":newstatus,
                                                         
                                                            
                                                            })
                                                            .then((res) => {
                                                                                navigate("/scanner")
                                                            })


                                        }             
                                        
  useEffect(() => {
    
             
                    getGtinnumber()
                  }, []);
                    var gtinwidget= 
               
                    
                    <input
                                        type="text"
                                        className="form-control"
                                        value={gtin}
                                        readOnly={true}
                                        onChange={(e) => setGtin(e.target.value)}

                    />    
                    var expwidget=  <input
                        type="text"
                        className="form-control"
                        value={expiration_date}
                        readOnly={true}
                        onChange={(e) => setExp(e.target.value)}
                    />
                    var lotwidget=  <input
                        type="text"
                        className="form-control"
                        value={lot}
                        readOnly={true}
                        onChange={(e) => setLot(e.target.value)}
                    />
   

//var gtinwidget=<Select className="s" options={gtin} onChange={gtindata}/>
   
                    var serialnowidget = <input 
                            type="text"
                            className="form-control"
                            value={numbers}
                            onChange={(e) => setNumbers(e.target.value)}
                    />        
   
                    var scannedvaluewidget = <input 
                        type="text"
                        className="form-control"
                        value={scannedvalue}
                        onChange={(e) => setScannedValue(e.target.value)}
                    /> 
                    var oldstatuswidget = <input 
                    type="text"
                    className="form-control"
                    value={oldstatus}
                    onChange={(e) => setOldstatus(e.target.value)}
                />  
                if(oldstatus=="accepted")
                {
                    var newstatuswidget =   <select class="form-control" aria-label="Default select example"  onChange={(e) => setNewstatus(e.target.value)}>
                    <option value="">Select</option>
                    <option value="damaged">Damaged</option>
                    <option value="specimen">Specimen</option>
                    <option value="sample">Sample</option>
                    <option value="others">Others</option>
                  </select>
                }
                else{
                    var newstatuswidget =   <select class="form-control" aria-label="Default select example"  onChange={(e) => setNewstatus(e.target.value)}>
                    <option value="">Select</option>
                    <option value="challenged">Challenged</option>
                    <option value="others">Others</option>
                  </select>
                }
             
                   
  return (
                    <div id="printerfullpage">
                    <Navebar/>
                    <br></br>
                    <br></br>

                    <div className="container" id="printerviewpage" >
                                        <h2>Rework </h2>
                    <br></br>

    <div className="row">
        <br></br>
        <br></br>
        {/* {warningmessage}         */}
        <br></br>
        <br></br>  
        <div className="col-2"></div>
        <div className="col-8">
                <table>
                    <br></br>
                    <tbody> 
                        <tr>
                            <td class="productionOrderReportSearchTD">Gtin</td>
                            <td class="productionOrderReportSearchTD">
                                {gtinwidget}
                            </td>
                            &nbsp;&nbsp;&nbsp;

                            <td class="productionOrderReportSearchTD">Batch number</td>
                            <td class="productionOrderReportSearchTD">
                                                               
                                {lotwidget}
                            </td>
                      
                        </tr>
                 
                        <tr>
                            
                            &nbsp;&nbsp;&nbsp;
                         
                        
                        </tr>
                        <br></br>
                        <tr>
                            <td class="productionOrderReportSearchTD">Expiry Date</td>
                            <td class="productionOrderReportSearchTD">
                                {expwidget}
                            </td>
                            &nbsp;&nbsp;&nbsp;
                            <td class="productionOrderReportSearchTD">Serial Number</td>
                            <td class="productionOrderReportSearchTD">
                            {serialnowidget}
                            </td>
                        </tr>
                        <br></br>
                        <br></br>
                        <tr>
                        <td class="productionOrderReportSearchTD">Scanned Value</td>
                            <td class="productionOrderReportSearchTD">
                                {scannedvaluewidget}
                            </td> 
                        </tr>
                                       
                        <br></br>
                        <button
                            // type="submit"
                        className="btn btn-info"
                        onClick={getScanneddata} 
                    //     disabled={pausebtnstate}
                        >
                           Scan
                    </button>
                    <tr></tr> 
                  <br>
                  </br>
                  <br>
                  </br>
              
                    <tr>
                    <td class="productionOrderReportSearchTD">Old status</td>
                            <td class="productionOrderReportSearchTD">
                                {oldstatuswidget}
                            </td>
                            &nbsp;&nbsp;&nbsp;
                            <td class="productionOrderReportSearchTD">New Status</td>
                            <td class="productionOrderReportSearchTD">
                            {newstatuswidget}
                            </td> 

                    </tr>  
                    <tr>
                    <button
                            // type="submit"
                        className="btn btn-primary"
                        onClick={changestatus} 
                       disabled={updatebutton}
                        >
                           Update Status
                    </button></tr>                                
                    </tbody>
                </table> 
            </div>
            <div className="col-2">
            </div>
        </div>
        
    </div> 




</div>
  )
}

export default ScannerRework
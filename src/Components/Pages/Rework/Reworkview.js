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
import { DataGrid, GridToolbar, GridApi, GridCellValue, GridToolbarContainer, GridToolbarColumnsButton, 
    GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport } from '@material-ui/data-grid';
import { color } from "highcharts";
const Reworkview = () => {
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

                    const[gtinoptions,setGtinoptions]=useState("")
                    const theme = useTheme();
                    const colors = tokens(theme.palette.mode);
                    const [data, setData] = useState([]);
                    const [tabledark, setTableDark] = useState("");
                                      
                    const [userDataRows, setUserDataRows] = useState([]);
                    const [updatebutton,setUpdatebutton] = useState(true);
                    let optionsNewgtin=[]

                    
                    function changestatus(){
                        axios.post("http://127.0.0.1:8000/masterapp/reworkpost/",
                        {
                        "gtin":gtin,
                        "slnonumber":numbers,
                        "oldstatus":oldstatus,
                        "newstatus":newstatus
                        }
                       
                        )
                        .then((res)=>{
                     
navigate("/dashboard")

                        })
                    }

                    function changestatus1(){
                        // axios
                        // .put(`http://127.0.0.1:8000/masterapp/scannerdata/update/${uniqueID}`, 

                        // {
                    
                        //     "id":uniqueID,
                        //     "status":newstatus,
                     
                        
                        // })
                        // .then((res) => {
                        //                     navigate("/dashboard")
                        // })

                    }
                    const getGtin = event => {   
                                        // alert("ghg")
                                        // alert(event.value)
                                        setGtin(event.value);
                                        setGtinSelectedLabel(event.label);
                                        setGtinSelectedValue(event.value);
                                        axios.get("http://127.0.0.1:8000/masterapp/printergtinindividual/"+event.value+"/")
                                        .then((res)=>{
                                        //   alert(res.data[0].expiration_date)
                                           setExp(res.data[0].expiration_date)
                                           setLot(res.data[0].lot)
                                          })
                                              // setCustomername(event.label);
                                              //  window.localStorage.setItem(option)    
                    }
                                        
    
                    function getScanneddata() {
                                        // alert("cvbc")
                                        axios.post("http://127.0.0.1:8000/masterapp/scannerrework/",
                                        {
                                            "gtin":gtin
                                        }
                                        
                                        )
                                        .then((res)=>{
                                            // alert(res.data)
                                            var ser=JSON.parse(res.data) 
                                            setNumbers(ser.serialnumber)
                                            // setNumbers(res.data[0].numbers)
                                            setScannedValue(ser.decodedtext)
                                            setUpdatebutton(false)
                                            // axios.get("http://127.0.0.1:8000/masterapp/scannerstatusindividual/"+gtin+"/")
                                            // .then((res)=>{
                                            //   res.data.map((data1)=>{
                                            //     var serial=JSON.parse(data1.grade)
                                            //     // alert(serial)
                                            //     // if(serial["serialnumber"]==ser.serialnumber){
                                            //     //     alert(data1.status)
                                            //     // }
                                            //   })
                                            // })


                                        })
                                                 
                    }
                    function getGtinnumber() {
                                        //alert("anu");
                                      
                                      
                                        var testLabel = "";
                                      
                                      
                                        axios
                                          .get("http://127.0.0.1:8000/masterapp/printer/",
                                       
                                          )
                                          .then((res) => {
                                            // let batchNumberOptionsInitial = "";
                                        //     alert(res.data.gtin)
                                            res.data.map(data => {
                                      
                                        //                    alert(data)
                                              testLabel = <div>{data.gtin}</div>;
                                      
                                              optionsNewgtin.push({ value:data.gtin,label:data.gtin});
                                             
                                            });
                                           
                                            setGtinoptions(optionsNewgtin);
                                           
                                          });
                                      }


                             



                    var gtinwidget= 
                  <Select  className="selectbox" onChange={getGtin} options={gtinoptions}  />
                    
                    // <input
                    //                     type="text"
                    //                     className="form-control"
                    //                     value={gtin}
                    //                     readOnly={true}
                    //                     onChange={(e) => setGtin(e.target.value)}

                    // />    
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
             
                   

                    useEffect(() => {
                                        getGtinnumber()
                                        // getScanneddata()
                                        // alert(employeeid)
                                      }, []);        
  return (
                    <div id="printerfullpage">
                                        <Navebar/>
                                        <br></br>
                                        <br></br>
                 
                                        <div className="container" id="printerviewpage" >
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
                    </button>   
                                        </tr>
                                                 
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

export default Reworkview
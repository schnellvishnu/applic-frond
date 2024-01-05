import axios from "axios";
import React, { useState, useEffect,useRef } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../../../components/Sidnav/Sidebar";
import Select from "react-select";
 import * as  AiIcons from "react-icons/ai";
import { Alert } from "bootstrap";
import moment from "moment";
import { Box, Button, TextField,useTheme  } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import {MdOutlineSave } from 'react-icons/md';
import { Grid, } from '@material-ui/core';
import { useForm,Form } from "../../../components/useForm";
import Controls from "../../../components/Controls";
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import { tokens } from "../../../theme";
// import { DataGrid, GridToolbar, GridApi, GridCellValue, GridToolbarContainer, GridToolbarColumnsButton, 
//   GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport } from '@material-ui/data-grid';
// import { DataGrid, GridToolbar } from '@mui/x-data-grid';
// import {
//   DataGridPremium,
//   GridToolbarExport,
//   GridToolbarContainer,
//   useGridApiRef,
//   useKeepGroupedColumnsHidden,
// } from '@mui/x-data-grid-premium'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DateRangePicker } from 'react-date-range';


import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file



import { useReactToPrint } from "react-to-print";
function ShippingAuditreport() {
const [data, setData] = useState([]);
const [userDataRows, setUserDataRows] = useState([]);
const [selectedDIV_state, setSelectedDIV_state] = useState("");

const[startdate,setStartdate]=useState(new Date()) ;
const[enddate,setEnddate]=useState(new Date());
const theme = useTheme();
const colors = tokens(theme.palette.mode);
let userDataColumns = [
                    { field: 'id', headerName: 'ID', width:100,headerClassName: "MuiDataGrid-columnHeaders", },
                    { field: 'shipping_order_name', headerName: 'Shipping Order Name', width:180,headerClassName: "MuiDataGrid-columnHeaders", },
                    { field: 'process_no_original',headerName: 'Process Number', width: 180,headerClassName: "MuiDataGrid-columnHeaders", },
                    { field: 'source_location', headerName: 'Source Location', width: 160,headerClassName: "MuiDataGrid-columnHeaders", },
                    { field: 'destination_location', headerName: 'Destination Location', width: 170,headerClassName: "MuiDataGrid-columnHeaders", },
                    { field: 'subject_name', headerName: 'Subject Name', width: 120,headerClassName: "MuiDataGrid-columnHeaders", },
                  
                    { field: 'shipping_date', headerName: 'Shipping Date', width: 130,headerClassName: "MuiDataGrid-columnHeaders", },
                    
                  
                   ]

                   function createRows(rowDatas) {
                    //alert(rowDatas.length);
                   
                  
                  let tempArrayFunction = []; 
                  rowDatas.map(rowData => {
                      //alert(rowData.id);
                      tempArrayFunction.push( 
                        {'id':rowData.id,'shipping_order_name':rowData.shipping_order_name, 'process_no_original':rowData.process_no_original,
                        'source_location':rowData.source_location,'destination_location':rowData.destination_location,
                        'subject_name':rowData.subject_name,'shipping_date':rowData.shipping_date,
                        
                     
                      },
                      );
                  
                    })
                    setSelectedDIV_state(<div>
   
                      <div style={{ height: 500, width: '110%'}}  >
                          <DataGrid rows={tempArrayFunction}  columns={userDataColumns} pageSize={10}   
                          slots={{ toolbar: GridToolbar }}
                          slotProps={{
                            toolbar: {
                              printOptions:{
                                hideFooter: true,
                                hideToolbar: true,
                              }
                            }
                          }} 
                           />
                      </div>
               
          </div>);
                   }
                   

const getShipporeport = (e) => {
                    e.preventDefault();
                    console.log("clicked");
                    //alert(address);
                  
                  
                  
                    
                    //     alert(startdate)
                        axios
                          .post('http://localhost:8000/masterapp/ShippoauditReportdate/', 
                         
                          {
                                        "datefrom":startdate,  
                                        "dateto":enddate,
                          },
                          
                          )
                         
                                        // alert("8445")
                                        // alert(res.data)
                                        .then((res)=>{
                         
                                        //  alert("anu");
                                                      
                                        setData(res.data);
                                        createRows(res.data);
                                          })              
                    
                      }
              
               var userheadwidget=
                  <Box
                      component="form"
                      sx={{
                        width: 500,
                        maxWidth: '100%',
                        
                        
                      }}
                      noValidate
                      autoComplete="off"
                ><Controls.Input 
                  disabled
                  // fullWidth
                  
                        id="outlined-Company Prefix"
                label={<h4 ><pre>   <h4 style={{color:"white"}}><font face="times new roman" size="6"> Users Audit Report </font></h4></pre></h4>}
                       
                 
               />
               </Box>
              
              var productionheadwidget=
              <Box
                  component="form"
                  sx={{
                    width: 500,
                    maxWidth: '90%',
                    
                    
                  }}
                  noValidate
                  autoComplete="off"
              ><Controls.Input 
              disabled
              // fullWidth
              
                    id="outlined-Company Prefix"
                    label={<h4 ><pre><h4 style={{color:"white"}}><font face="times new roman" size="6">                  Shipping Audit Report </font></h4></pre></h4>}
                   
              
              />
              </Box>
              
              var shippingheadwidget=
                  <Box
                      component="form"
                      sx={{
                        width: 500,
                        maxWidth: '100%',
                        
                        
                      }}
                      noValidate
                      autoComplete="off"
                ><Controls.Input 
                  disabled
                  // fullWidth
                  
                        id="outlined-Company Prefix"
                        label={<h4 ><pre><h4 style={{color:"white"}}>Shipping Audit Report </h4></pre></h4>}
                       
                 
               />
               </Box>
                  var dateFieldWidget = 
                                          // <input
                                          //     type="text"
                                          //     className="form-control  form-control-sm"
                                          //     value = {company_name}
                                          //     onChange={(e) => setComname(e.target.value)}
                                          // />
                                          <TextField
                                            required
                                            type="date"
                                            id="outlined-Location Name"
                                            label="Date from"
                                            value ={startdate}
                                            InputLabelProps={{
                                              shrink: true,
                                            }}
                                            onChange={(e) => setStartdate(e.target.value)}
                                    
                                        />
              
                  var date2widget=   <TextField
                                        required
                                        type="date"
                                        id="outlined-Location Name"
                                        label="Date To"
                                        InputLabelProps={{
                                          shrink: true,
                                        }}
                                        value = {enddate}
                                        onChange={(e) => setEnddate(e.target.value)}
                                    
                                      />
              
                                     
  return (
                    <>
                    <Box sx={{ display: 'flex' }} > 
                
                <Sidebar/>
                
                
                <Box component="main" sx={{ flexGrow: 3, p: 9 }}>
                <div class="container" id="company">
                                  
                   <div style={{ height: 700, width: '110%'}}>
                     <h5>Audit Report</h5>
                    
                
                      
                     <Box m="20px">
                 <Box display="flex" justifyContent="space-between" alignItems="center">
                   {/* <Header  subtitle="welcome to you Contacts" /> */}
                 </Box>
                
                 <Box
                   m="8px 0 0 0"
                   width="100%"
                   height="80vh"
                   sx={{
                     "& .MuiDataGrid-root": {
                       border: "none",
                     },
                     "& .MuiDataGrid-cell": {
                       borderBottom: "none",
                     },
                     "& .name-column--cell": {
                       color: colors.greenAccent[300],
                     },
                    
                     "& .MuiDataGrid-columnHeaders": {
                       backgroundColor: colors.greenAccent[700],
                       borderBottom: "none",
                     },
                     "& .MuiDataGrid-virtualScroller": {
                       backgroundColor: colors.primary[400],
                     },
                     "& .MuiDataGrid-footerContainer": {
                       borderTop: "none",
                       backgroundColor: colors.greenAccent[700],
                     },
                     "& .MuiCheckbox-root": {
                       color: `${colors.greenAccent[200]} !important`,
                     },
                     "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                       color: `${colors.grey[100]} !important`,
                     },
                   }}
                 >
                   
                  
                   <div id="auditreporthead">
                          {dateFieldWidget}
                         
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          {date2widget}
                          <br></br>
                          <br></br>
                          <button onClick={getShipporeport} className="btn btn-success">                                              
                          Shipping Audit Report</button>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          {/* <button onClick={autoTable} className="btn btn-success">                                              
                          Production Report pdf</button> */}
                         
                          
                        </div>  
                    
                        <br></br>
                        <div class="container-fluid" >
                          <div class="card shadow mb-4" id="productionreportfullcard"> 
                            <div class="card-header py-3" id="customercardhead">
                              <div className='row'>
                                <div className='col-10' id="customerhead">
                                  {productionheadwidget}
                                </div>
                
                              </div>
                                                                        
                            </div>
                                  
                            <div class="card-body">  
                            
                             
                              <Box id="productionboxbox"
                                component="form"
                                sx={{
                                '& .MuiTextField-root': { m: 2, width: '55ch' },
                                }}
                                noValidate
                                autoComplete="off"
                              >
                                {selectedDIV_state}
                                <br></br>
                              </Box> 
                              <hr></hr>    
                            </div>
                          </div>
                        </div>   
                
                
                        
                
                       
                 </Box>
                </Box>
                   </div>
                   </div>
                </Box>
                </Box>
                 </>
  )
}

export default ShippingAuditreport

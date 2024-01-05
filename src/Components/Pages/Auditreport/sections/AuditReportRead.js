import axios from "axios";
import React, { useState, useEffect,useRef } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
// import Sidebar from "../../../components/Sidnav/Sidebar";
import Select from "react-select";
 import * as  AiIcons from "react-icons/ai";
import { Alert } from "bootstrap";
import moment from "moment";
import { Box, Button, TextField,useTheme  } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import {MdOutlineSave } from 'react-icons/md';
import { Grid, } from '@material-ui/core';
// import { useForm,Form } from "../../../components/useForm";
// import Controls from "../../../components/Controls";
import Controls from "../../../Controls";
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
// import { DataGrid, GridToolbar, GridApi, GridCellValue, GridToolbarContainer, GridToolbarColumnsButton, 
//   GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport } from '@material-ui/data-grid';
import { DataGrid, GridToolbar,GridToolbarExport, } from '@mui/x-data-grid';
// import {
//   DataGridPremium,
//   GridToolbarExport,
//   GridToolbarContainer,
//   useGridApiRef,
//   useKeepGroupedColumnsHidden,
// } from '@mui/x-data-grid-premium'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DateRangePicker } from 'react-date-range';
import { tokens } from "../../../../theme";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { useReactToPrint } from "react-to-print";
import Navebar from "../../../Navigation/Navebar";
function AuditReportRead() {

 const[startdate,setStartdate]=useState(new Date()) ;
 const[enddate,setEnddate]=useState(new Date());

 const[process_order_number ,setPonumber]=useState("");
 const[ batch_number,setBatchnumber]=useState("");
 const[product_name,setProductname]=useState("");
 const[accepted,setAccepted]=useState("");
 const[specimen,setSpecimen]=useState("");
 const[damaged,setDamaged]=useState("");
 const[sample,setSample]=useState("");
 const[challenged,setChallenged]=useState("");
 const[teach,setTeach]=useState("");
 const[inprocess,setInprocess]=useState("");
 const[rejectedbycamera,setRejectedbycamera]=useState("");
 const[unused,setUnused]=useState("");

 const navigate = useNavigate();
 const theme = useTheme();
 const colors = tokens(theme.palette.mode);
 const [data, setData] = useState([]);
 const [data2, setData2] = useState([]);
 const [data3, setData3] = useState([]);
 const [userDataRows, setUserDataRows] = useState([]);
 const [selectedDIV_state, setSelectedDIV_state] = useState("");

 const[datefunction,setDatefun]=useState("");
 const[exportpdf,setExportpdf]=useState("");
 const[headwidget,setHeadwidget]=useState("");
 const conponentPDF= useRef();
 const doc = new jsPDF()

 let optionsNew=[];
    let optionsNewcustomer=[];
 autoTable(doc, { html: '#my-table' })
 let userDataColumns = [
  { field: 'process_order_number', headerName: 'Po', width:100,headerClassName: "MuiDataGrid-columnHeaders", },
  { field: 'batch_number',headerName: <strong><pre>Batch Number</pre></strong>, width: 100,headerClassName: "MuiDataGrid-columnHeaders", },
  { field: 'product_name', headerName: 'Product Name', width: 110,headerClassName: "MuiDataGrid-columnHeaders", },
  { field: 'accepted', headerName: 'Accepted', width: 100,headerClassName: "MuiDataGrid-columnHeaders", },
  { field: 'specimen', headerName: 'Specimen', width: 120,headerClassName: "MuiDataGrid-columnHeaders", },

  { field: 'damaged', headerName: 'Damaged', width: 130,headerClassName: "MuiDataGrid-columnHeaders", },
  { field: 'sample', headerName: 'Sample', width: 120,headerClassName: "MuiDataGrid-columnHeaders", },
  { field: 'challenged', headerName: 'Challenged', width: 130,headerClassName: "MuiDataGrid-columnHeaders", },
  { field: 'teach', headerName: 'Teach', width: 150,headerClassName: "MuiDataGrid-columnHeaders", },
  { field: 'inprocess', headerName: 'Inprocess', width: 100,headerClassName: "MuiDataGrid-columnHeaders", },
  { field: 'rejectedbycamera', headerName: 'Rejected By Camera', width: 150,headerClassName: "MuiDataGrid-columnHeaders", },
  { field: 'unused', headerName: 'Unused', width: 120,headerClassName: "MuiDataGrid-columnHeaders", },
  { field: 'production_date', headerName: 'Production Date', width: 150,headerClassName: "MuiDataGrid-columnHeaders", },

 ]

 let userDataColumns1 = [
  { field: 'id', headerName: 'ID', width:100,headerClassName: "MuiDataGrid-columnHeaders", },
  { field: 'modelname', headerName: 'Modelname', width:180,headerClassName: "MuiDataGrid-columnHeaders", },
  { field: 'operationdone',headerName: 'operationdone', width: 180,headerClassName: "MuiDataGrid-columnHeaders", },
  { field: 'donebyuser', headerName: 'Donebyuser', width: 160,headerClassName: "MuiDataGrid-columnHeaders", },
  { field: 'donebyuserrole', headerName: 'Donebyuserrole', width: 170,headerClassName: "MuiDataGrid-columnHeaders", },
  { field: 'donedatetime', headerName: 'Donedatetime', width: 120,headerClassName: "MuiDataGrid-columnHeaders", },

 
  

 ]

 let userDataColumns2 = [
  { field: 'id', headerName: 'ID', width:100,headerClassName: "MuiDataGrid-columnHeaders", },
  { field: 'shipping_order_name', headerName: 'Shipping Order Name', width:180,headerClassName: "MuiDataGrid-columnHeaders", },
  { field: 'process_no_original',headerName: 'Process Number', width: 180,headerClassName: "MuiDataGrid-columnHeaders", },
  { field: 'source_location', headerName: 'Source Location', width: 160,headerClassName: "MuiDataGrid-columnHeaders", },
  { field: 'destination_location', headerName: 'Destination Location', width: 170,headerClassName: "MuiDataGrid-columnHeaders", },
  { field: 'subject_name', headerName: 'Subject Name', width: 120,headerClassName: "MuiDataGrid-columnHeaders", },

  { field: 'shipping_date', headerName: 'Shipping Date', width: 130,headerClassName: "MuiDataGrid-columnHeaders", },
  

 ]


//  function CustomToolbar() {
//   return (
//     <GridToolbarContainer>
//       <GridToolbarExport
//         // excelOptions={{
//         //   worker: () =>
//         //     new Worker(new URL('./excelExportWorker.ts', import.meta.url)),
//         // }}
//       />
//     </GridToolbarContainer>
//   );
// }

const generatePDF= useReactToPrint({
  content: ()=>conponentPDF.current,
  documentTitle:"Userdata",
  onAfterPrint:()=>alert("Data saved in PDF")
});

 

 function createRows(rowDatas) {
  //alert(rowDatas.length);
 

let tempArrayFunction = []; 
rowDatas.map(rowData => {
    //alert(rowData.id);
    tempArrayFunction.push( 
      {'id':rowData.id,'process_order_number':rowData.process_order_number, 'batch_number':rowData.batch_number,
      'product_name':rowData.product_name,'accepted':rowData.accepted,
      'specimen':rowData.specimen,'damaged':rowData.damaged,
      'sample':rowData.sample,'challenged':rowData.challenged,
      'teach':rowData.teach,
      'inprocess':rowData.inprocess,
      'rejectedbycamera':rowData.rejectedbycamera,
      'unused':rowData.unused,
      'production_date':rowData.production_date
   
    },
    );

  })

  function CustomToolbar() {
      return (
      <GridToolbarExport
        printOptions={{
          hideFooter: true,
          hideToolbar: true,
        }}
      />
      )
  }
 //getRowHeight={() => 'auto'} 
  setSelectedDIV_state(<div>
   
            <div style={{ height: 500, width: '110%'}} ref={conponentPDF} >
                <DataGrid rows={tempArrayFunction} ref={conponentPDF} columns={userDataColumns} pageSize={10}    
          //       slots={{
          // toolbar: CustomToolbar }}
          sx={{ '& .MuiDataGrid-columnSeparator': { display: 'none' } }}
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
 
 function createRows2(rowDatas) {
  // alert(rowDatas.length);
 

  let tempArrayFunction = []; 
  rowDatas.map(rowData => {
  //   alert(rowData.id);
    tempArrayFunction.push( 
      {'id':rowData.id,'modelname':rowData.modelname, 'operationdone':rowData.operationdone,
      'donebyuser':rowData.donebyuser,'donebyuserrole':rowData.donebyuserrole,
      'donedatetime':rowData.donedatetime,
      
   
    },
    );

  })
  setSelectedDIV_state(<div>

    <div style={{ height: 500, width: '110%'}}  >
        <DataGrid rows={tempArrayFunction}  columns={userDataColumns1} pageSize={10}   
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
 

 function createRows3(rowDatas) {
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
        <DataGrid rows={tempArrayFunction}  columns={userDataColumns2} pageSize={10} 
        
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
 
 
// const getProductionreport = (e) => {
//   e.preventDefault();
//   console.log("clicked");
//   //alert(address);


//   var st=startdate
  
//       // alert(startdate)
//       axios
//         .post('http://localhost:8000/reports/ProductionOrderReportdate/'+st+"/", 
       
//         {
//                       // "datefrom":startdate,  
//                       // "dateto":enddate,
//         },
        
//         )
       
//                       // alert("8445")
//                       // alert(res.data)
//       .then((res)=>{
       
//                       //  alert("anu");
                                    
//         setData(res.data);
//         createRows(res.data);
//       })              
  
//     }

    const getProductionreport = (e) => {
      e.preventDefault();
      console.log("clicked");
      //alert(address);
    
    
    
      
      //     alert(startdate)
          axios
            .post('http://localhost:8000/reports/ProductionOrderReportdate/', 
           
            {
                          "datefrom":startdate,  
                          "dateto":enddate,
            },
            
            )
           
                          // alert("8445")
                          // alert(res.data)
                          .then((res)=>{
           
                          //  alert("anu");
                          setHeadwidget("Production Audit Report")             
                          setData(res.data);
                          createRows(res.data);
                            })              
      
        }
        function getData() {
          // alert("anu");
      axios
      .post("http://localhost:8000/accounts/userAuditReportdate/",
      {
        "datefrom":startdate,  
        "dateto":enddate,
}, 
            )
            .then((res) => {
              //alert(res.data.length);
              setHeadwidget("Users Audit Report")   
              setData2(res.data);
              createRows2(res.data);
            });
        }
        function getShipporeport() {
          //alert("anu")                                
          axios            
          .post("http://localhost:8000/masterapp/ShippoauditReportdate/",
          {
              "datefrom":startdate,
              "dateto":enddate
  
  
          })            
          .then((res1) => {
                // alert("gj")
              setHeadwidget("Shipping Audit Report")
              axios.get("http://localhost:8000/masterapp/locations/")
              .then((res) => {
              res.data.map(data => {
        //alert(data.id)
              optionsNew.push({ value: data.id, label: data.name });
              });
              axios.get("http://localhost:8000/masterapp/customer/")
              .then((res2) => {
                  res2.data.map(data2 => {
                      // alert(data2.id)
                  optionsNewcustomer.push({ value: data2.id, label: data2.name });
                  });              
              setData2(res1.data);
              createRows3(res1.data);
              })
              })
          })
  
  
         
  
  
      }

        // const getShipporeport = (e) => {
        //   e.preventDefault();
        //   console.log("clicked");
        //   //alert(address);
        
        
        
          
        //   //     alert(startdate)
        //       axios
        //         .post('http://localhost:8000/masterapp/ShippoauditReportdate/', 
               
        //         {
        //                       "datefrom":startdate,  
        //                       "dateto":enddate,
        //         },
                
        //         )
               
        //                       // alert("8445")
        //                       // alert(res.data)
        //                       .then((res)=>{
               
        //                       //  alert("anu");
        //                        setHeadwidget("Shipping Audit Report")             
        //                       setData3(res.data);
        //                       createRows3(res.data);
        //                         })              
          
        //     }
    

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
  label={<h4 ><pre>   <h4 style={{color:"white"}}><font face="times new roman" size="6"> {headwidget} </font></h4></pre></h4>}
         
   
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
      label={<h4 ><pre><h4 style={{color:"white"}}><font face="times new roman" size="6">                                                          {headwidget} </font></h4></pre></h4>}
     

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
          label={<h4 ><pre><h4 style={{color:"white"}}>{headwidget} </h4></pre></h4>}
         
   
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

                        // autoTable(doc, {
                        //   head: [['Name', 'Email', 'Country']],
                        //   body: [
                        //     // ['David', 'david@example.com', 'Sweden'],
                        //     // ['Castille', 'castille@example.com', 'Spain'],
                        //     // ...
                        //     // getProductionreport()
                        //   ],
                        // })
                        
                        // doc.save('table.pdf')   
                        const navigateToCreatepage = () => {
                          navigate("/shippingauditreport");
                        };  
                        const navigateToUseauditreportpage = () => {
                          navigate("/userauditreport");
                        };                               
  return (
    <>
    <Navebar/>
    <Box sx={{ display: 'flex' }} > 

{/* <Sidebar/> */}


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
          <button onClick={getProductionreport} className="btn btn-success">                                              
          Production Audit Report</button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {/* <button onClick={autoTable} className="btn btn-success">                                              
          Production Report pdf</button> */}
         
          <button onClick={getData}  className="btn btn-success">                                               
          User Report</button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={getShipporeport} className="btn btn-success">                                              
          Shipping Report</button> 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="btn btn-success" onClick={ generatePDF}>PDF</button>   
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


        {/* <div class="container-fluid" >
          <div class="card shadow mb-4" id="auditfullcard"> 
            <div class="card-header py-3" id="customercardhead">
              <div className='row'>
                <div className='col-10' id="customerhead">
                            
                  {userheadwidget}
                </div>

              </div>
                                                        
            </div>

            <div class="card-body">  
              <br></br>
              <br></br>
              <Box id="productionboxbox"
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 2, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <br></br> 
              </Box> 
              <hr></hr>    
            </div>
          </div>
        </div>  */}


        {/* <div class="container-fluid" >
          <div class="card shadow mb-4" id="shippingreportfullcard"> 
            <div class="card-header py-3" id="customercardhead">
              <div className='row'>
                <div className='col-10' id="customerhead">
                  {shippingheadwidget}
                </div>

              </div>
                                                        
            </div>

            <div class="card-body">  
              <br></br>
              <br></br>
      
      
      
              <Box id="productionboxbox"
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 2, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >

                <br></br>
              
            
                
              </Box> 
              <hr></hr>    
            </div>
          </div>
        </div>  */}
 </Box>
</Box>
   </div>
   </div>
</Box>
</Box>
 </>
  )
}

export default AuditReportRead

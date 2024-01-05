import axios from "axios";
import React, { useState, useEffect,useRef } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
// import Sidebar from "../../components/Sidnav/Sidebar";
import Select from "react-select";
 import * as  AiIcons from "react-icons/ai";
import { Alert } from "bootstrap";
import moment from "moment";
import { Box, Button, TextField,useTheme  } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import {MdOutlineSave } from 'react-icons/md';
import { Grid, } from '@material-ui/core';
// import { useForm,Form } from "../../components/useForm";
import Controls from "../../Controls";
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
// import { tokens } from "../../../theme";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { useReactToPrint } from "react-to-print";
import Navebar from "../../Navigation/Navebar";

function ShippingReport() {

const [id,setId]=useState("");
const [shipping_order_name,setShippingname]=useState("");
const [process_order_number,setProcesordernumber]=useState("");
const [shipping_date, setShipingDate] = useState("");
const [created_by, setCreatedby] = useState("");
const [batch_for_export, setExport] = useState("");
const [destination_location,setDestinationLoc] = useState("");
const [sourcelocationlabel,setSourcelocationlabel]=useState("");
const [subject_name,setSubjectname]=useState("")

const[sourcelabel,setSourceLabel]=useState("");
const[sourcevalue,setSourceValue]=useState("");

const[destinationlabel,setDestinationLabel]=useState("");
const[destinationvalue,setDestinationvalue]=useState("")

const[subjectlabel,setSubjectLabel]=useState("");
const[subjectvalue,setSubjectvalue]=useState("");

const[sourcelocation_name,setSoName]=useState("");
const[sourcelocation_address,setSoAddress]=useState("");
const[sourcelocation_state,setSoState]=useState("");
const[sourcelocation_city,setSoCity]=useState("");
const[sourcelocation_zip,setSoZip]=useState("");
const[sourcelocation_gln,setSoGln]=useState("");

const[destination_name,setDesName]=useState("");
const[destination_address,setDesAddress]=useState("");
const[destination_state,setDesState]=useState("");
const[destination_city,setDesCity]=useState("");
const[destination_zip,setDesZip]=useState("");
const[destination_gln,setDesGln]=useState("");


const { operation } = useParams();
const {processnumber}=useParams();
const{uniqueID}=useParams();
const conponentPDF= useRef();
let optionsNew=[]
let optionsNewDes=[]

function getShippingOrderdata(){
        axios
        .get("http://localhost:8000/masterapp/shippoint/"+process_order_number+"/") 
        .then((res)=>{
                    // alert("hi")
                    // alert(res.data[0].source_location)
              setShippingname(res.data[0].shipping_order_name) 
              setDestinationLoc(res.data[0].destination_location)
              setSourcelocationlabel(res.data[0].source_location)
              setSubjectname(res.data[0].subject_name)
              setExport(res.data[0].batch_for_export)
              setShipingDate(res.data[0].shipping_date)
              getSourcelocationSelecteddata(res.data[0].source_location)
              getDestlocationsSelecteddata(res.data[0].destination_location)
              getSubjectSelecteddata(res.data[0].subject_name)
        })         
}



  function getDestlocationsSelecteddata(destinationlocparam) {
    axios
      .get("http://localhost:8000/masterapp/locations/",
      
      )
      .then((res) => {
        // let batchNumberOptionsInitial = "";
        // alert("anu")
        res.data.map(data => {
       if(data.id==destinationlocparam){
       setDestinationLabel(data.name)
        setDestinationvalue(data.id)

        
        setDesName(data.name);
        setDesAddress(data.address);
        setDesState(data.state);
        setDesCity(data.city);
        setDesZip(data.zip);
        setDesGln(data.loc_gln);

       }
      });
        
     
    });
  }

  


function getSourcelocationSelecteddata(sourcelocationparm) {
    axios
      .get("http://localhost:8000/masterapp/locations/",
      
      )
      .then((res) => {
        // let batchNumberOptionsInitial = "";
       
      res.data.map(data => {
      if(data.id==sourcelocationparm){
        alert(data.address)
        setSourceLabel(data.name);
        setSourceValue(data.id);
        setSoName(data.name);
        setSoAddress(data.address);
        setSoState(data.state);
        setSoCity(data.city);
        setSoZip(data.zip);
        setSoGln(data.loc_gln)

            }
      });
        
     
    });
  }

  function getSubjectSelecteddata(subjectparam) {
    axios
      .get("http://localhost:8000/masterapp/customer/",
      
      )
      .then((res) => {
        // let batchNumberOptionsInitial = "";
        // alert("anu")
      res.data.map(data => {
       if(data.id ==subjectparam){
        setSubjectLabel(data.name);
        setSubjectvalue(data.id);
       }
      });
        
     
    });
  }

  const generatePDF= useReactToPrint({
    content: ()=>conponentPDF.current,
    documentTitle:"Userdata",
    // onAfterPrint:()=>alert("Data saved in PDF")
  });



var headwidget=

    <Box
        component="form"
        sx={{
          width: 500,
          maxWidth: '100%',
          
          
        }}
        noValidate
        ref={conponentPDF}
        autoComplete="off"
  ><Controls.Input 
    disabled
    // fullWidth
    
          id="outlined-Company Prefix"
          label={<h4 ><pre><h4 style={{color:"white"}}><font face="times new roman" size="6">                                                         Shipping Order Report </font></h4></pre></h4>}
         
   
 />
 
 </Box>
 var powidget=
 <TextField required
     label="Po Number"
     ref={conponentPDF}
     id="outline-Po Number"
//      value={process_order_number}
     onChange={(e) => setProcesordernumber(e.target.value)}
 /> 
   
var fetchwidget=  <button className="btn btn-info"
    onClick={() => getShippingOrderdata()}>Get Data
   
</button> 
  var shippingname=
              <TextField required
                  label="Shipping Name"
                  id="outline-Experi"
                  ref={conponentPDF}
                  value={shipping_order_name}
                  onChange={(e) => setShippingname(e.target.value)}
              /> 
                        // var hjwidget=<label className="form-label">Batch Number</label> 
  var sourcelocationwidget=
              <TextField required
              label="Source Location"
              ref={conponentPDF}
              id="outline-Lot Number"
              value={sourcelabel}
            //   label={sourcelabel}
              onChange={(e) => setSourcelocationlabel(e.target.value)}
             
          /> 
                    
  var destinationwidget=
                <TextField required
                label="DestinationLocation"
                id="outline-gtin"
                ref={conponentPDF}
                value={destinationlabel}
                onChange={(e) => setDestinationLoc(e.target.value)}
            /> 

var subjectwidget = 
            <TextField required
            label="Subject Name"
            id="outline-type"
            ref={conponentPDF}
            value={subjectlabel}
            onChange={(e) => setSubjectname(e.target.value)}
           /> 

var exportwidget = 
           <TextField required
           label="Batch For export"
           id="outline-type"
           ref={conponentPDF}
           value={batch_for_export}
           onChange={(e) => setExport(e.target.value)}
          /> 
          
var shippingdatewidget = 
          <TextField required
          label="Shipping Date"
          id="outline-type"
          ref={conponentPDF}
          value={shipping_date}
          onChange={(e) => setShipingDate(e.target.value)}
         /> 
         

         
  var sourcelocaddresswidget=  
                            <TextField required
                            label="Address"
                            id="outline-Address"
                            ref={conponentPDF}
                            value={sourcelocation_address}
                            onChange={(e) => setSoAddress(e.target.value)}
                            /> 
         
  var sourcelocstatewidget=  
                              <TextField required
                                        label="State"
                                        id="outline-State"
                                        ref={conponentPDF}
                                        value={sourcelocation_state}
                                        onChange={(e) => setSoState(e.target.value)}
                                        /> 

  var sourceloccityswidget=  
                              <TextField required 
                                        label="City"
                                        id="outline-City"
                                        ref={conponentPDF}
                                        value={sourcelocation_city}
                                        onChange={(e) => setSoCity(e.target.value)}
                                        /> 

  var sourcelocnamewidget=  
                              <TextField required
                                    label="Name"
                                    id="outline-Name"
                                    ref={conponentPDF}
                                    value={sourcelocation_name}
                                    onChange={(e) => setSoName(e.target.value)}
                              /> 

  var sourceloczipwidget=  
                            <TextField required
                                    label="Zip"
                                    id="outline-Zip"
                                    ref={conponentPDF}
                                    value={sourcelocation_zip}
                                    onChange={(e) => setSoZip(e.target.value)}
                            /> 

  var sourcelocglnwidget=  
                          <TextField required
                                label="Gln"
                                id="outline-Gln"
                                ref={conponentPDF}
                                value={sourcelocation_gln}
                                onChange={(e) => setSoGln(e.target.value)}
                          />                     
        

  var destinationlocaddresswidget=  
                        <TextField required
                                label="Address"
                                id="outline-Address"
                                ref={conponentPDF}
                                value={destination_address}
                                onChange={(e) => setDesAddress(e.target.value)}
                        /> 
             
  var destinationlocstatewidget=  
                                  <TextField required
                                            label="State"
                                            id="outline-State"
                                            ref={conponentPDF}
                                            value={destination_state}
                                            onChange={(e) => setDesState(e.target.value)}
                                  /> 
    
  var destinationloccityswidget=  
                                  <TextField required 
                                          label="City"
                                          id="outline-City"
                                          ref={conponentPDF}
                                          value={destination_city}
                                          onChange={(e) => setDesCity(e.target.value)}
                                  /> 
    
  var destinationlocnamewidget=  
                                  <TextField required
                                        label="Name"
                                        id="outline-Name"
                                        ref={conponentPDF}
                                        value={destination_name}
                                        onChange={(e) => setDesName(e.target.value)}
                                  /> 
    
  var destinationloczipwidget=  
                                <TextField required
                                      label="Zip"
                                      id="outline-Zip"
                                        
                                      value={destination_zip}
                                      onChange={(e) => setDesZip(e.target.value)}
                                /> 

  var destinationlocglnwidget=  
                        <TextField required
                          label="Gln"
                          id="outline-Gln"
                          ref={conponentPDF}
                          value={destination_gln}
                          onChange={(e) => setDesGln(e.target.value)}
                        /> 
            



  return (
  <>
   
    <Box sx={{ display: 'flex' }} >
       
      {/* <Sidebar/>        */}
        <div class="container-fluid" id="shippingreportfullpage">
        <Navebar/>  
          <div class="card shadow mb-4" id="shippingreportfullcard"> 
            <div class="card-header py-3" id="customercardhead">
              <div className='row'>
                <div className='col-10' id="customerhead">
                  {headwidget}
                 
                </div>
              </div>
                                                    
            </div>
            <div class="card-body"  ref={conponentPDF}  >  
              <br></br>
              <div id="shippingreportbox"
                component="form"
                sx={{
                '& .MuiTextField-root': { m: 2, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
              <div id="shippingreportcontent">
                <br></br>
              <div>
              {powidget}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {fetchwidget}
            </div>
            <br></br>
            <div>
              {sourcelocationwidget}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {destinationwidget}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {shippingname}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
            </div>
            <div>
           
           
            </div>
          
          
            <br></br>
            <div>
              {subjectwidget}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {exportwidget}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {shippingdatewidget}
            <div>
          
          </div>
           
        </div>
        
          
        <br></br>
        <br></br>
          
          
             
           
          
           
          
          
          
          
          
      </div>
      <div id="shipreportpdf">
        <button className="btn btn-success" onClick={ generatePDF}>Save As PDF</button>   
      </div> 
      <hr></hr> 
      <div id="sourcelocationbox">
        <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Source Location Details</h3>
      <div>
        {sourcelocnamewidget}&nbsp;&nbsp;
        {sourcelocaddresswidget}
      </div>
      <br></br>
    <div>
    {sourcelocstatewidget}&nbsp;&nbsp;
    {sourceloczipwidget}
    </div>
      <br></br>
          {sourcelocglnwidget}
          {/* {sourceloccityswidget} */}
    </div>

    <div id="destinationlocationbox">
      <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Destination Location Details</h3>
    <div>
      {destinationlocnamewidget}&nbsp;&nbsp;
      {destinationlocaddresswidget}

           
    </div>
    <br></br>
    <div>
      {destinationlocstatewidget}&nbsp;&nbsp;
      {destinationloczipwidget}
    </div>
      <br></br>
        {destinationlocglnwidget}
      </div>
      </div>
    </div>
    </div>
      </div>  
    </Box>
  </>
  )
}

export default ShippingReport

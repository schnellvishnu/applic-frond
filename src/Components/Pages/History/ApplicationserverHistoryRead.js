
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import * as  MdIcons from "react-icons/md";
// import Sidebar from "../../../components/Sidnav/Sidebar";
import { Box,useTheme  } from "@mui/material";
import { tokens } from "../../../theme";
import { FcSettings } from 'react-icons/fc';
import { SiAddthis } from 'react-icons/si';
import { MdAddLink } from 'react-icons/md';
import { RiInsertRowTop } from 'react-icons/ri';
// import { SidebarData } from "../../components/SidebarData";
import { DataGrid, GridToolbar, GridApi, GridCellValue, GridToolbarContainer, GridToolbarColumnsButton, 
GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport } from '@material-ui/data-grid';

const ApplicationserverHistoryRead=(props)=> {
const theme = useTheme();
const colors = tokens(theme.palette.mode);
const [data, setData] = useState([]);
const [tabledark, setTableDark] = useState("");

const [DataGri,setDataGri]=useState();
                  
const [userDataRows, setUserDataRows] = useState([]);
                  
                    ///   For navigate function
const navigate = useNavigate();
                  
  function logout() {
                      window.localStorage.removeItem("username");
                      window.localStorage.removeItem("password");
                  
                    navigate("/account/login");
                }
                  
                  
                 
                
  let userDataColumns = [
                          { field: 'id', headerName: 'Id', width:110,headerClassName: "MuiDataGrid-columnHeaders", },
                          { field: 'modelname',headerName: 'Model Name', width: 180,headerClassName: "MuiDataGrid-columnHeaders", },
                          { field: 'savedid', headerName: 'savedID ', width: 220,headerClassName: "MuiDataGrid-columnHeaders", },
                          { field: 'operationdone', headerName: 'operationDone', width: 250,headerClassName: "MuiDataGrid-columnHeaders", },
                          { field: 'donebyuser', headerName: 'doneByUser', width: 170,headerClassName: "MuiDataGrid-columnHeaders", },
                          { field: 'donebyuserrole', headerName: 'doneByUserRole', width: 170,headerClassName: "MuiDataGrid-columnHeaders", },
                          { field: 'donedatetime', headerName: 'doneDateTime', width: 160,headerClassName: "MuiDataGrid-columnHeaders", },
                          //{ field: 'donebyemployeeid', headerName: 'donebyemployeeid', width: 170,headerClassName: "MuiDataGrid-columnHeaders", },
                      // {
                      //   field: 'edit',
                      //   headerName: 'Edit',
                      //   sortable: false,
                      //   renderCell: (params) => {
                      //     const onClick = (e) => {
                      //       e.stopPropagation(); // don't select this row after clicking
                    
                      //       const api: GridApi = params.api;
                      //       const thisRow: Record<string, GridCellValue> = {};
                    
                      //       api
                      //         .getAllColumns()
                      //         .filter((c) => c.field !== '__check__' && !!c)
                      //         .forEach(
                      //           (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
                      //         );
                      //       //alert(thisRow.name);
                    
                      //       setToLocalStorage(
                      //         thisRow.id,
                      //         thisRow.model_name,
                      //         thisRow.history_event,
                      //         thisRow.history_message,
                      //         thisRow.history_date,
                      //       );
                    
                      //       //return alert(JSON.stringify(thisRow, null, 4));
                      //     };
                    
                      //     //alert(currentUserrole);
                  
                  
                      //     if(currentUserrole == 'admin') {
                      //       return <Link to="/audit/auditcreate/edit"><button
                      //         className="btn btn-primary" 
                      //         onClick={onClick}>Edit</button></Link>;
                           
                      //     }
                      //     else {
                      //       return <button
                      //         className="btn btn-primary" 
                      //         disabled="true"
                      //         onClick={onClick}>Edit</button>;
                      //     }
                      //   },
                      // },
            {                             
                field: 'delete',
                headerName: 'Delete',
                headerClassName: "MuiDataGrid-columnHeaders",
                                                                             
                sortable: false,
                renderCell: (params) => {
                const onClick = (e) => {
                                        e.stopPropagation(); // don't select this row after clicking
                                                                          
                                        const api: GridApi = params.api;
                                        const thisRow: Record<string, GridCellValue> = {};
                                          api
                                                .getAllColumns()
                                                .filter((c)=>c.field!=='__check__'&&!!c)
                                                .forEach(
                                                (c)=>(thisRow[c.field]=params.getValue(params.id,c.field)),
                                );
                                                                        
                                                                                //   api
                                                                                //     .getAllColumns()
                                                                                //     .filter((c) => c.field !== '__check__' && !!c)
                                                                                //     .forEach(
                                                                                //       (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
                                                                                //     );
                                                                                  //alert(thisRow.id);
                                                                            
                                                                                  //return alert(JSON.stringify(thisRow, null, 4));
                                                                        
                    const confirmBox = window.confirm(
                                                        "Do you really want to delete this user?"
                                                      )
                    if (confirmBox === true) {
                                                axios
                                                  .delete(`http://127.0.0.1:8000/accounts/history/delete/${thisRow.id}`,
                                                          {
                                                          data: { 
                                                            "Name" : thisRow.name,
                                                          "email" : thisRow.email,
                                                          "userRole" : thisRow.userRole,
                                                          "loggedInUsername": window.localStorage.getItem('loggedInUsername'),
                                                          "loggedInUserrole": window.localStorage.getItem('loggedInUserrole')
                                                          }
                                  })
                                    .then(() => {
                                                  getData();
                                                          //alert("anju");
                                                          //navigate("/account/read");
                                                      window.location.reload();
                                                });
                                            }
                                                                                  
                                                                        
                                    };
                          const api2: GridApi = params.api;
                          const thisRow2: Record<string, GridCellValue> = {};
                              api2
                                    .getAllColumns()
                                    .filter((c)=>c.field!=='__check__'&&!!c)
                                    .forEach(
                                              (c)=>(thisRow2[c.field]=params.getValue(params.id,c.field)),
                                          );
                                        
                                        if(props.deleteButtonStatus === "enabled" ) {
                                          return <button
                                                  className="btn btn-danger" 
                                                  onClick={onClick}><MdIcons.MdDelete size={23}/></button>;
                                              }
                                              else if(props.deleteButtonStatus === "disabled" ) {
                                                return <button
                                                  className="btn btn-danger" 
                                                  disabled = "true"
                                                  onClick={onClick}><MdIcons.MdDelete size={23}/></button>;
                                              }
                                          },
                                    },
                    ];  
                  
                  
      function createRows(rowDatas) {
                      //alert(rowDatas.length);
            



                  let tempArrayFunction = [];
                  let editButton = <button></button>;  
                  
                    rowDatas.map(rowData => {


                    tempArrayFunction.push({'id':rowData.id,'modelname':rowData.modelname,
                                                'savedid':rowData.savedid,
                                                'operationdone':rowData.operationdone,
                                                'donebyuser':rowData.donebyuser,
                                                'donebyuserrole':rowData.donebyuserrole ,
                                                'donedatetime':rowData.donedatetime,
                                                'description':rowData.description,
                                               // 'donebyemployeeid':rowData.donebyemployeeid
                                        })
                        //alert(rowData.id);
//                         setUserDataRows( userDataRows => [
//                           ...userDataRows,
//                           {'id':rowData.id,'modelname':rowData.modelname,
//                           'savedid':rowData.savedid,
//         'operationdone':rowData.operationdone,
//         'donebyuser':rowData.donebyuser,
//         'donebyuserrole':rowData.donebyuserrole ,
//         'donedatetime':rowData.donedatetime,
//         'description':rowData.description,
        
//       },
//                         ]);
                  
                      })
          setDataGri(<div  id="historycard">
                    <div class="card shadow mb-4"> 
                        <div class="card-header py-3">
                            <h2 class="m-0 font-weight-bold text-success">AuditLog</h2>                         
                        </div>
            
                        
                        <div class="card-body">  
                            <div className="prr" style={{ height: 650, width: '40%',height:600}} >
                                <DataGrid rows={tempArrayFunction} columns={userDataColumns} pageSize={10} components={{ Toolbar: CustomToolbar }}/>
                            </div>
                        </div>
                    </div>
                </div>);
                     
                    }
      let donebyuserrole="operator"            
  function getData() {
                    //   alert("anu");
    axios
      .get("http://127.0.0.1:8000/accounts/historyindividualoperator/"+donebyuserrole+"/",
                          
    )
    .then((res) => {
                    //       alert(res.data.length);
      setData(res.data);
      createRows(res.data);
    });
  }
                  
                  
                    // const navigateToCreatePage = () => {
                    //   navigate("/audit/auditcreate/new");
                    // };
                  
    useEffect(() => {
                      //console.log('i fire once');
                     
      getData();
                    
                      
                      //alert("anu");
    }, []);
                    
  function CustomToolbar() {

    return (
      <GridToolbarContainer>
        &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      <GridToolbarColumnsButton />
        &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      <GridToolbarFilterButton />
        &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      <GridToolbarDensitySelector />
        &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      <GridToolbarExport />
        &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      </GridToolbarContainer>
   );
  }  
                  
  return (
    <>
                 
    <Box sx={{ display: 'flex' }}>    
      {/* <Sidebar/>      */}
      <Box component="main" sx={{ flexGrow: 3, p: 7 }}>              
        <div style={{ height: 700, width:"240%" }} id="history">              
          <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
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
              {DataGri}
              
            </Box>
          </Box>
                         
        </div>
      </Box>
    </Box>
  </>
  );
}

export default ApplicationserverHistoryRead

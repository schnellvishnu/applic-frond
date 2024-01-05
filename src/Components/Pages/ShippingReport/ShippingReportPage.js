import React, { useEffect, useState } from 'react';

import ShippingReportLoginCheck from './ShippingReportLoginCheck';
// import Loading from '../Common/Loading';
import Loading from '../../Loading';
import { useNavigate } from "react-router";
import { Box } from '@mui/material'
import ShippingReport from './ShippingReport';

function ShippingReportPage() {
                    const [selectedDIV, setSelectedDIV] = useState(<Loading/>);

                    const navigate = useNavigate();   
                                    //  alert(window.localStorage.getItem('loggedInUsername'))
                      useEffect(() => {     
                          if(window.localStorage.getItem('loggedInUsername') != null) {
                            setSelectedDIV(<ShippingReport/>);
                          }
                          else {
                            navigate("/");
                          }
                        }, []);
                                       
                        return (
                            <>
                              <Box sx={{ display: 'flex' }}>
                                {selectedDIV}
                              </Box>
                            </>
                        )
}

export default ShippingReportPage

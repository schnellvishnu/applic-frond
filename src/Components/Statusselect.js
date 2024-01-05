import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link ,useParams} from "react-router-dom";
import { useNavigate } from "react-router";
import { Box, Button, TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import {MdOutlineSave } from 'react-icons/md';
import { Grid, } from '@material-ui/core';
import { useForm,form } from "./useForm";

function Statusselect() {
                    const customerstatusfield = [
                                        {
                                          value: 'Confirmed',
                                          label: 'Confirmed',
                                        },
                                        {
                                          value: 'Not Confirmed',
                                          label: 'Not Confirmed',
                                        },
                                      ];
  return (
    <div>
     <Grid item xs={12}>
{customerstatusfield.map((option1) => (
  <MenuItem key={option1.value} value={option1.value}>
    {option1.label}
  </MenuItem>
))}

</Grid>
    </div>
  )
}

export default Statusselect

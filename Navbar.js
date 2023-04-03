import { Badge, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import {  ProductionQuantityLimits} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
function Navbar(){
   var navi = useNavigate();
   function add(){
    navi('/cart');
   }

  
  
  

    return(
        <div style={{margin:"10px"}}>
            <Grid container style={{ display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          
                <Grid lg={3} sm={2} md={1} xs={12}>
                    <img src="http://retabajri.in/image/catalog/logo-2.png" alt="image"/>
                </Grid>
           
            
                <Grid lg={3} sm={1} md={1} xs={12}  style={{width:""}}>
                <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password" >Search</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
          
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  
                  edge="end"
                >
                 <SearchIcon/>
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
                </Grid>
                <Grid lg={2} sm={3} md={1} xs={7}>
                <Button variant="contained"  size="large" color="warning" startIcon={<ShoppingCartIcon />} onClick={add}>
  Add Items

</Button>
                </Grid>

            
                
               

            </Grid>

          
      
        </div>
    )
}

export default Navbar;
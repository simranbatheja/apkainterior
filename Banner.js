import { Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import React from "react";
import bloom from "./bloom.jpg";
import tub from "./tub.jpg";

function Banner(){
    return(
        <div style={{margin:"10px"}}>

      

           <Grid container >
          
          <Grid lg={8} xs={12} md={6} sm={12}>
              <img className="set" src="http://retabajri.in/image/cache/catalog/Supplified/Banner/cctv-1140x380.jpg" alt="image" width={800} height={300}/>
          </Grid>
     
      
          <Grid lg={4} xs={12} md={6} sm={6} style={{paddingLeft:"5px"}}>
          <img  className="set" src={bloom} alt="image" width={800} height={150}/>
          <img className="set" src={tub} alt="image" width={800} height={145}/>
          </Grid>
        
      </Grid>


        </div>
    )
}

export default Banner;
import { Grid, Link } from "@mui/material";
import React from "react";
import bed from "./bed.jpg";
import sofa from "./sofa.jpg";
import chair from "./chair.jpg";
import tank from "./tank.jpg";
import cement from "./cement.jpg";
import plant from "./plants.jpg";


function Furniture(){
    return(
        <div style={{margin:"10px"}}>
            <h1>Innovation Material</h1>
            
            <Grid container style={{display:"flex", justifyContent:"space-between"}}>
        <Grid lg={3} sm={4} md={6} xs={12}  style={{margin:"10px"}}>
        <Link href="#" style={{color:"black", textDecoration:"none", fontSize:"20px",boxShadow:"1px 2px 1px  grey"}}>
                        <img src={bed} width={335}/> 
                      <p style={{textAlign:"center"}}>Shop Bed</p>
                    </Link>
        </Grid>
           
        <Grid lg={3} sm={4} md={6} xs={12} style={{margin:"10px"}}>
        <Link href="#" style={{color:"black", textDecoration:"none", fontSize:"20px",boxShadow:"1px 2px 1px  grey"}}>
                        <img src={sofa} height={335} width={335}/> 
                      <p style={{textAlign:"center"}}>Shop Sofa</p>
                    </Link>
        </Grid>
        <Grid lg={3}  sm={4} md={6} xs={12} style={{margin:"10px"}}>
        <Link href="#" style={{color:"black", textDecoration:"none", fontSize:"20px",boxShadow:"1px 2px 1px  grey"}}>
                        <img src={chair} width={340} height={335}/> 
                      <p style={{textAlign:"center"}}>Shop Chair</p>
                    </Link>
        </Grid>
            </Grid>

{/* second */}
            <Grid container style={{display:"flex", justifyContent:"space-between"}}>
        <Grid lg={3} sm={4} md={6} xs={12}  style={{margin:"10px"}}>
        <Link href="#" style={{color:"black", textDecoration:"none", fontSize:"20px",boxShadow:"1px 2px 1px  grey"}}>
                        <img src={plant} width={335}/> 
                      <p style={{textAlign:"center"}}>Indoor Plants</p>
                    </Link>
        </Grid>
           
        <Grid lg={3} sm={4} md={6} xs={12} style={{margin:"10px"}}>
        <Link href="#" style={{color:"black", textDecoration:"none", fontSize:"20px",boxShadow:"1px 2px 1px  grey"}}>
                        <img src={cement} height={335} width={335}/> 
                      <p style={{textAlign:"center"}}>Shop Cement</p>
                    </Link>
        </Grid>
        <Grid lg={3}  sm={4} md={6} xs={12} style={{margin:"10px"}}>
        <Link href="#" style={{color:"black", textDecoration:"none", fontSize:"20px",boxShadow:"1px 2px 1px  grey"}}>
                        <img src={tank} width={340} height={335}/> 
                      <p style={{textAlign:"center"}}>Water Tank</p>
                    </Link>
        </Grid>
            </Grid>

        </div>
    )
}

export default Furniture;
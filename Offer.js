import { Grid, Link } from "@mui/material";
import React from "react";


function Offer(){
    return(
        <div >
            <Grid container style={{display:"flex", justifyContent:"space-between"}}>
        <Grid lg={3} sm={4} md={6} xs={12} className="sim" style={{margin:"10px",boxShadow:"1px 2px 1px  grey"}}>
            <Link href="#" style={{color:"white", textDecoration:"none", textAlign:"center"}}>
                <h1>Building Material</h1>
            </Link>
        </Grid>
           
        <Grid lg={3} sm={4} md={6} xs={12} className="off" style={{margin:"10px",boxShadow:"1px 2px 1px  grey"}}>
            <Link href="#" style={{color:"white", textDecoration:"none", textAlign:"center"}}>
                <h1>Plants & More</h1>
            </Link>
        </Grid>
        <Grid lg={3}  sm={4} md={6} xs={12} className="offf" style={{margin:"10px",boxShadow:"1px 2px 1px  grey"}}>
            <Link href="#" style={{color:"black", textDecoration:"none", textAlign:"center"}}>
                <h1>Electical</h1>
            </Link>
        </Grid>
            </Grid>

        </div>
    )
}

export default Offer;
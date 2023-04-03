import { Grid, Link, Typography } from "@mui/material";
import React from "react";

function Footer(){
    return(
        <div style={{backgroundColor:"#3c3c3c", color:"white"}}>
           
            <Grid container>
                <Grid lg={12} sm={12} md={12} xs={12} style={{display:"flex", marginLeft:"10px"}}>
                <Link href="#" style={{color:"white", textDecoration:"none"}}>
                <Typography variant="body1" component="h2" style={{ margin:'10px'}}>
                      Privacy Policy
                    </Typography>
                    </Link>
                    <Link href="#" style={{color:"white", textDecoration:"none"}}>
                    <Typography variant="body1" component="h2" style={{ margin:'10px'}}>
                      Return Policy
                    </Typography>
                    </Link>
                    <Link href="#" style={{color:"white", textDecoration:"none"}}>
                    <Typography variant="body1" component="h2" style={{ margin:'10px'}}>
                     Terms & Conditions
                    </Typography>
                    </Link>
                    <Link href="#" style={{color:"white", textDecoration:"none"}}>
                    <Typography variant="body1" component="h2" style={{ margin:'10px'}}>
                     Shipping Policy
                    </Typography>
                    </Link>
                </Grid>
            </Grid>
            <hr/>

            <Grid container style={{textAlign:"center"}}>
                <Grid lg={12}>
                Powered By AVR Shell
AVR Store © 2023
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer;
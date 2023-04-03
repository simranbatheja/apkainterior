import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
import facebook from './facebook.svg';
import insta from './instagram.svg';
import twitter from './twitter.svg';
import ln from './linkedin.svg';

function Contact() {
    return (
        <div style={{backgroundColor:"#3c3c3c", color:"white"}}>
            <Grid container style={{display:"flex", justifyContent:"space-between"}}>
                <Grid lg={2} md={4} xs={6} sm={4} style={{margin:"20px"}}>
                    <Typography variant="p" component="h2">
                        Information
                    </Typography>
                    <Link href="#" style={{textDecoration:"none", color:"white"}}>
                    <Typography variant="body1" component="h2">
                      About Us
                    </Typography>
                    </Link>
                    <Link href="#" style={{textDecoration:"none", color:"white"}}>
                    <Typography variant="body1" component="h2">
                       Delivery Information
                    </Typography>
                    </Link>
                    <Link href="#" style={{textDecoration:"none", color:"white"}}>
                    <Typography variant="body1" component="h2">
                     Privacy Policy
                    </Typography>
                    </Link>
                    <Link href="#" style={{textDecoration:"none", color:"white"}}>
                    <Typography variant="body1" component="h2">
                      Terms & Conditions
                    </Typography>
                    </Link>
                </Grid>

                <Grid lg={2} md={4} xs={6} sm={4} style={{margin:"20px"}}>
                    <Typography variant="p" component="h2">
                      Customer Service
                    </Typography>
                    <Link href="#" style={{textDecoration:"none", color:"white"}}>
                    <Typography variant="body1" component="h2">
                      Contact Us
                    </Typography>
                    </Link>
                    <Link href="#" style={{textDecoration:"none", color:"white"}}>
                    <Typography variant="body1" component="h2">
                     Returns
                    </Typography>
                    </Link>
                    <Link href="#" style={{textDecoration:"none", color:"white"}}>
                    <Typography variant="body1" component="h2">
                   Site Map
                    </Typography>
                   </Link>
                </Grid>

                <Grid lg={2} md={4} xs={6} sm={4} style={{margin:"20px"}}>
                    <Typography variant="p" component="h2">
                     Extras
                    </Typography>
                    <Link href="#" style={{textDecoration:"none", color:"white"}}>
                    <Typography variant="body1" component="h2">
                  Brands
                    </Typography>
                    </Link>
                    <Link href="#" style={{textDecoration:"none", color:"white"}}>
                    <Typography variant="body1" component="h2">
                Gift Vouchers
                    </Typography>
                    </Link>
                    <Link href="#" style={{textDecoration:"none", color:"white"}}>
                    <Typography variant="body1" component="h2">
                  Specials
                    </Typography>
                    </Link>
                    <Link href="#" style={{textDecoration:"none", color:"white"}}>
                    <Typography variant="body1" component="h2">
                  Affiliates
                    </Typography>
                    </Link>
                </Grid>
                

                <Grid lg={2} md={4} xs={6} sm={4} style={{margin:"20px"}}>
                    <Typography variant="p" component="h2">
                    My Account
                    </Typography>
                    <Link href="#" style={{textDecoration:"none", color:"white"}}>
                    <Typography variant="body1" component="h2">
                  Order History
                    </Typography>
                    </Link>
                    <Link href="#" style={{textDecoration:"none", color:"white"}}>
                    <Typography variant="body1" component="h2">
               Wish List
                    </Typography>
                    </Link>
                    <Link href="#" style={{textDecoration:"none", color:"white"}}>
                    <Typography variant="body1" component="h2">
                 Newsletter
                    </Typography>
                    </Link>
                </Grid>
              
            </Grid>
           
       
          
        </div>
    )
}
export default Contact;
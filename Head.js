import React from "react";
import { Grid, Breadcrumbs, Typography, AvatarGroup, Avatar } from '@mui/material';

import { Link } from "react-router-dom";
import facebook from './facebook.svg';
import insta from './instagram.svg';
import twitter from './twitter.svg';
import ln from './linkedin.svg';


function Head() {
  return (
    <div>

      <Grid lg={12} md={12} sm={12} xs={12} style={{ backgroundColor: "#3c3c3c", color: "white", padding: "2px",width:"100%", display:"flex", justifyContent:"flex-end"}}>
        <Breadcrumbs aria-label="breadcrumb" style={{ color: "white" }}>
          <Link underline="hover" color="inherit" href="/" style={{ color: "white", textDecoration: "none"}}>
            Blog
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            style={{ color: "white", textDecoration: "none"}}
          >
            Cart
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            style={{ color: "white", textDecoration: "none" }}
          >
            Log In
          </Link>
          
        
         
          <Link href="#" style={{ textDecoration: "none", color: "orangered" }}>
            <img src={facebook}/> &nbsp;
            <img src={twitter} />&nbsp;
            <img src={ln} />&nbsp;
            <img src={insta} />
          </Link>

        </Breadcrumbs>
      </Grid>
    </div>
  );
}

export default Head;


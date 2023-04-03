import { Grid, Link } from "@mui/material";
import React from "react";
import pro from "./high.jpg";

import price from "./price.jpg";
import sale from "./sale.jpg";
import pre from "./100.jpg";
function List(){
    return(
        <div>
            <Grid lg={12} sm={2} xs={2} md={2} style={{display:"flex", justifyContent:"center",border:"1px solid lightgrey"}}>
                <Link href="#" style={{display:"flex", justifyContent:"center"}}>
                <img src={pro} className="sett"/>
                </Link>         
                <hr/>
                <Link href="#"style={{display:"flex", justifyContent:"center"}} >
                <img src={price} className="sett"/>
                </Link>
                <hr/>
                <Link href="#"style={{display:"flex", justifyContent:"center"}} >
                <img src={sale} className="sett"/>
                </Link>
                <hr/>
                <Link href="#" style={{display:"flex", justifyContent:"center"}}>
                <img src={pre} className="sett"/>
                </Link>
            </Grid>
        </div>
    )
}
export default List;
import { Grid } from "@mui/material";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import tub from "./tub.jpg";

import bloom from "./bloom.jpg";
import greeny from "./greeny.jpg";
import led from "./led.jpg";
import bomm from './bomm.jpg';

function NewSlider(){
    return(
        <div style={{margin:"0px 20px"}}>
            <h1 style={{textAlign:"center"}}>Exclusive Décor Products</h1>
            <Grid container style={{display:"flex", justifyContent:"center"}}>
            <Grid lg={12} md={10} sm={10} xs={12}>
          <Carousel  showArrows={true} showThumbs={false} autoPlay={true} infiniteLoop={true} interval={3000}>

<div>
    <img width="50%" height="400px"  src={bomm}/>
</div>

<div>
    <img width="50%" height="400px" src={bloom}/>
</div>
<div>
    <img width="50%" height="400px" src="http://retabajri.in/image/cache/catalog/Supplified/Banner/cctv-1140x380.jpg"/>
</div>
<div>
    <img width="50%" height="400px" src={tub}/>
</div>
<div>
    <img width="50%" height="400px" src={greeny}/>
</div>
<div>
    <img width="50%" height="400px" src={led}/>
</div>



</Carousel>

</Grid>
</Grid>
<br/>

        </div>
    )
}

export default NewSlider;
import { Badge, Breadcrumbs, Button, ButtonGroup, CardContent, Fab, Grid, Link, Typography } from "@mui/material";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import plant from './image/plants.jpg';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';


import { Category, LocalShipping, Mood, ProductionQuantityLimits, ShoppingCart, StarBorder } from "@mui/icons-material";
function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const breadcrumbs = [
  <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
    Plants
  </Link>,
  <Link
    underline="hover"
    key="2"
    color="inherit"
    href="/material-ui/getting-started/installation/"
    onClick={handleClick}
  >
    Indoor Plant
  </Link>,
  <Typography key="3" color="text.primary">
    Kind
  </Typography>,
];

function Detail() {

  function add() {
                alert("added to cart");   
  }

  var navi = useNavigate();
  function my() {
    navi("/Cart");
}

  return (
    <div style={{ margin: "5px" }}>

      <Grid container>
        <Grid lg={4} md={12} sm={12} xs={12}>
          <CardContent >
            <Carousel thumbWidth={100} showThumbs={true} autoPlay={true} infiniteLoop={true} interval={3000}>
              <div>
                <img src={plant}/>
              </div>
              <div>
                <img src={plant}/>
              </div>
              <div>
                <img src={plant}/>
              </div>
            </Carousel>
          </CardContent>
          <Button variant="contained" fullWidth size="large" onClick={(e) => add()}>Add To Cart</Button>
         
  </Grid>

        <Grid lg={5} sm={5} md={5} xs={12} style={{ margin: "20px" }}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>

          <h1>Kuberaa Areca Palm Air Purifier</h1>
          <p>Brand: <Link href="#"> Generic</Link></p>
          <p>Product Code: Air Purifier,easy to grow plant</p>
          <p>Reward Points: 100</p>
          <p>Availability: In Stock</p>
          <p style={{ fontSize: "24px" }}>Rs.315</p>
          <p>Ex Tax: Rs315</p>
          <p>Price in reward points: 200</p>
          {/* <Button variant="contained" size="large" onClick={(e) => add()} fullWidth>Add To Cart</Button> */}
          <h3>Product Description</h3>
          <p>Kuberaa Areca Palm Air Purifier Natural Live Plant with White Pot and Pebbles for Outdoor & Indoors Home</p>
          <h3>Key Features</h3>
          <p>Air Purifier, Low Maintenance and easy to grow plant </p>
          <p>This is one of the most useful Palms of the tropics the world around</p>
          <p>This plant is used as the ornamental purpose and Fertilizer added</p>
          <p>Areca Palm Plant Very easy to grow and care Perfect plant for outdoor garden and sunny balcony</p>
          <p>You can use it:- Home decoration garden, balcony, Outdoor/Indoors. with Air Purifier, Low Maintenance</p>
        </Grid>
      
      <Grid lg={2} md={3} sm={3} xs={12} style={{ margin: "60px 0px 0px 20px" }}>
      <Card sx={{ maxWidth: 345 }} style={{textAlign:"center"}}>
      <CardActionArea>
        <LocalShipping  sx={{ fontSize: 40 }} color="warning"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Fast Delivery
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
<br/>
    <Card sx={{ maxWidth: 345 }} style={{textAlign:"center"}}>
      <CardActionArea>
        <StarBorder  sx={{ fontSize: 40 }} color="warning"/>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Quality Assurance
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
<br/>
    <Card sx={{ maxWidth: 345 }} style={{textAlign:"center"}}>
      <CardActionArea>
        <Mood  sx={{ fontSize: 40 }} color="warning"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Hassel Free Shop
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>

      </Grid>

      {/* <Grid container>
        <Grid lg={6} sm={6} md={6} xs={12} style={{ marginLeft: "20px" }}>
          <h3>Product Description</h3>
          <p>Kuberaa Areca Palm Air Purifier Natural Live Plant with White Pot and Pebbles for Outdoor & Indoors Home</p>
          <h3>Key Features</h3>
          <p>Air Purifier, Low Maintenance and easy to grow plant </p>
          <p>This is one of the most useful Palms of the tropics the world around</p>
          <p>This plant is used as the ornamental purpose and Fertilizer added</p>
          <p>Areca Palm Plant Very easy to grow and care Perfect plant for outdoor garden and sunny balcony</p>
          <p>You can use it:- Home decoration garden, balcony, Outdoor/Indoors. with Air Purifier, Low Maintenance</p>
        </Grid>
      </Grid> */}

<Fab
              color="primary"
              onClick={my}
              style={{ position: "fixed", right: "20px", bottom: "20px" }}
            >
              <Badge badgeContent='' color="secondary">
                <ProductionQuantityLimits />
              </Badge>
            </Fab>

         
    </div>
  )
}

export default Detail;
import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Link } from "@mui/material";
import plant from './plants.jpg';
import bomm from './bomm.jpg';
import led from "./led.jpg";
import ware from "./ware.jpg";
import tank from "./tank.jpg";
import cement from "./cement.jpg";
import Carousel from 'better-react-carousel';



function Slider(){

    
     
    return(
        <div>
            <h1 style={{margin:"10px 0px 0px 20px"}}>Ready-Set-Shop</h1>


{/* <Grid container > */}

    {/* <Grid lg={2} style={{margin:"20px", boxShadow:"1px 2px 1px  grey"}}>
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <Link href="/productdetails" style={{textDecoration:"none"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={plant}
      />
      <CardContent>
       
        <Typography variant="body2" color="text.secondary">
        Red & Golden Dual Tone Metal Pot 5"
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">7 Left</Button>
        <Button size="small">Rs.747</Button>
      </CardActions>
      </Link>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid lg={2} style={{margin:"20px",boxShadow:"1px 2px 1px  grey"}}>
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
    <Link href="/productdetails" style={{textDecoration:"none"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={tank}
      />
      <CardContent>
       
        <Typography variant="body2" color="text.secondary">
        Red & Golden Dual Tone Metal Pot 5"
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">7 Left</Button>
        <Button size="small">Rs.747</Button>
      </CardActions>
      </Link>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid lg={2} style={{margin:"20px",boxShadow:"1px 2px 1px  grey"}}>
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
    <Link href="/productdetails" style={{textDecoration:"none"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={cement}
      />
      <CardContent>
       
        <Typography variant="body2" color="text.secondary">
        Red & Golden Dual Tone Metal Pot 5"
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">7 Left</Button>
        <Button size="small">Rs.747</Button>
      </CardActions>
      </Link>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid lg={2} style={{margin:"20px",boxShadow:"1px 2px 1px  grey"}}>
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
    <Link href="/productdetails" style={{textDecoration:"none"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={led}
      />
      <CardContent>
       
        <Typography variant="body2" color="text.secondary">
        Red & Golden Dual Tone Metal Pot 5"
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">7 Left</Button>
        <Button size="small">Rs.747</Button>
      </CardActions>
      </Link>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid lg={2} style={{margin:"20px",boxShadow:"1px 2px 1px  grey"}}>
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
    <Link href="/productdetails" style={{textDecoration:"none"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={ware}
      />
      <CardContent>
       
        <Typography variant="body2" color="text.secondary">
        Red & Golden Dual Tone Metal Pot 5"
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">7 Left</Button>
        <Button size="small">Rs.747</Button>
      </CardActions>
      </Link>
      </CardActionArea>
    </Card>
    </Grid> */}
     <Carousel cols={5} rows={1} gap={1} loop>
    
      <Carousel.Item>
      <Grid lg={2} style={{margin:"20px", boxShadow:"1px 2px 1px  grey"}}>
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <Link href="/productdetails" style={{textDecoration:"none"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={plant}
      />
      <CardContent>
       
        <Typography variant="body2" color="text.secondary">
        Red & Golden Dual Tone Metal Pot 5"
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">7 Left</Button>
        <Button size="small">Rs.747</Button>
      </CardActions>
      </Link>
      </CardActionArea>
    </Card>
    </Grid>
      </Carousel.Item>

      <Carousel.Item>
      <Grid lg={2} style={{margin:"20px", boxShadow:"1px 2px 1px  grey"}}>
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <Link href="/productdetails" style={{textDecoration:"none"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={ware}
      />
      <CardContent>
       
        <Typography variant="body2" color="text.secondary">
        Red & Golden Dual Tone Metal Pot 5"
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">7 Left</Button>
        <Button size="small">Rs.747</Button>
      </CardActions>
      </Link>
      </CardActionArea>
    </Card>
    </Grid>
      </Carousel.Item>
      <Carousel.Item>
      <Grid lg={2} style={{margin:"20px", boxShadow:"1px 2px 1px  grey"}}>
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <Link href="/productdetails" style={{textDecoration:"none"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={led}
      />
      <CardContent>
       
        <Typography variant="body2" color="text.secondary">
        Red & Golden Dual Tone Metal Pot 5"
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">7 Left</Button>
        <Button size="small">Rs.747</Button>
      </CardActions>
      </Link>
      </CardActionArea>
    </Card>
    </Grid>
        {/* <img width="100%" src="https://picsum.photos/800/600?random=1" /> */}
      </Carousel.Item>
      <Carousel.Item>
      <Grid lg={2} style={{margin:"20px", boxShadow:"1px 2px 1px  grey"}}>
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <Link href="/productdetails" style={{textDecoration:"none"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={tank}
      />
      <CardContent>
       
        <Typography variant="body2" color="text.secondary">
        Red & Golden Dual Tone Metal Pot 5"
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">7 Left</Button>
        <Button size="small">Rs.747</Button>
      </CardActions>
      </Link>
      </CardActionArea>
    </Card>
    </Grid>
      </Carousel.Item>
      <Carousel.Item>
      <Grid lg={2} style={{margin:"20px", boxShadow:"1px 2px 1px  grey"}}>
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <Link href="/productdetails" style={{textDecoration:"none"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={cement}
      />
      <CardContent>
       
        <Typography variant="body2" color="text.secondary">
        Red & Golden Dual Tone Metal Pot 5"
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">7 Left</Button>
        <Button size="small">Rs.747</Button>
      </CardActions>
      </Link>
      </CardActionArea>
    </Card>
    </Grid>
      </Carousel.Item>
      <Carousel.Item>
      <Grid lg={2} style={{margin:"20px", boxShadow:"1px 2px 1px  grey"}}>
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <Link href="/productdetails" style={{textDecoration:"none"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={plant}
      />
      <CardContent>
       
        <Typography variant="body2" color="text.secondary">
        Red & Golden Dual Tone Metal Pot 5"
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">7 Left</Button>
        <Button size="small">Rs.747</Button>
      </CardActions>
      </Link>
      </CardActionArea>
    </Card>
    </Grid>
      </Carousel.Item>
      <Carousel.Item>
      <Grid lg={2} style={{margin:"20px", boxShadow:"1px 2px 1px  grey"}}>
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <Link href="/productdetails" style={{textDecoration:"none"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={cement}
      />
      <CardContent>
       
        <Typography variant="body2" color="text.secondary">
        Red & Golden Dual Tone Metal Pot 5"
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">7 Left</Button>
        <Button size="small">Rs.747</Button>
      </CardActions>
      </Link>
      </CardActionArea>
    </Card>
    </Grid>
      </Carousel.Item>
      <Carousel.Item>
      <Grid lg={2} style={{margin:"20px", boxShadow:"1px 2px 1px  grey"}}>
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <Link href="/productdetails" style={{textDecoration:"none"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={tank}
      />
      <CardContent>
       
        <Typography variant="body2" color="text.secondary">
        Red & Golden Dual Tone Metal Pot 5"
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">7 Left</Button>
        <Button size="small">Rs.747</Button>
      </CardActions>
      </Link>
      </CardActionArea>
    </Card>
    </Grid>
      </Carousel.Item>
 
    </Carousel>
    


    <Grid container >
      <Grid lg={12}>
        <img src={bomm} style={{width:"100%", height:"500px"}}/>
 
      </Grid>
      </Grid>
           
 
           
        </div>
    )
}

export default Slider;
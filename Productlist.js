import React from "react";
import Head from "../Component/Head";
import Navbar from "../Component/Navbar";
import Dropdown from "../Component/Dropdown";
import Contact from "../Component/Contact";
import Footer from "../Component/Footer";
import { Breadcrumbs, Button, Card, CardActionArea, CardContent, CardMedia, Checkbox, FormControlLabel, FormGroup, Grid, Slider, TextField, Typography } from "@mui/material";

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from "react-router-dom";
import ac from './image/ac.jpg';
import world from "./image/world.jpg";
import shree from "./image/shree.jpg";

import jk from "./image/jk.jpg";
import ppc from "./image/ppc.jpg";
import sagara from './image/sagara.jpg';
import raasi from './image/raasi.jpg';
import ramco from './image/ramco.jpg';


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick} style={{ textDecoration: "none" }}>
        Building Material
    </Link>,
    <Link
        underline="hover"
        key="2"
        color="inherit"
        href="/material-ui/getting-started/installation/"
        onClick={handleClick}
        style={{ textDecoration: "none" }}
    >
        <Typography color="text.primary">
            Cement
        </Typography>
    </Link>

];



function Productlist() {

    return (
        <div>
            <Head />
            <Navbar />
            <Dropdown />

            <Grid container>
                <Grid lg={12} sm={12} md={12} xs={12} style={{ marginLeft: "20px" }}>
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" />}
                        aria-label="breadcrumb"
                    >
                        {breadcrumbs}
                    </Breadcrumbs>
                </Grid>
            </Grid>


{/* side bar */}
            <Grid container>
                <Grid lg={2} md={3} sm={3} xs={12} style={{ margin: "0px 0px 10px 20px" }}>
                    <h3>FILTERS <Link href="#" style={{ float: "right", color: "orangered", textDecoration: "none" }}>RESET ALL</Link></h3>
                    <Slider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" color="warning" />
                    <p>150 ₹ <span href="#" style={{ float: "right" }}>102000₹</span></p>
                     <div style={{ border: "1px solid lightgrey" }}>
                        <p>Cement Type</p>
                        <hr style={{ color: "lightgrey" }} />
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="PPC" />
                            <FormControlLabel control={<Checkbox />} label="OPC" />
                        </FormGroup>
                        <hr style={{ color: "lightgrey" }} />
                        <p>Cement Brand</p>
                        <hr style={{ color: "lightgrey" }} />
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="PPC" />
                            <FormControlLabel control={<Checkbox />} label="ACC" />
                            <FormControlLabel control={<Checkbox />} label="Bangur" />
                            <FormControlLabel control={<Checkbox />} label="UltraTech" />
                            <FormControlLabel control={<Checkbox />} label="JK Lakshmi" />
                            <FormControlLabel control={<Checkbox />} label="Shree Jung Rodhak" />
                        </FormGroup>
                    </div>

                </Grid>

{/* product lists */}
                <Grid lg={2} md={7} sm={6} xs={12} style={{ margin: "20px" }}>
                    <Card sx={{ maxWidth: 335 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={ac}
                            />
                            <CardContent>

                                <Typography variant="body2" color="text.secondary">
                                    Fabric 2 Seater Sofa Grey Color
                                </Typography>
                                <Typography variant="p" color="black">
                                    ₹38,940
                                </Typography>
                                <Typography variant="p" color="white" style={{ backgroundColor: "#FFBA00", float: "right" }}>
                                    <del> ₹45,000 </del>
                                </Typography>
                                <br />
                                <Typography variant="p" color="orange" >
                                    Offer Available
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

<br/>
                    <Card sx={{ maxWidth: 335 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={world}
                            />
                            <CardContent>

                                <Typography variant="body2" color="text.secondary">
                                    Fabric 2 Seater Sofa Grey Color
                                </Typography>
                                <Typography variant="p" color="black">
                                    ₹38,940
                                </Typography>

                                <Typography variant="p" color="white" style={{ backgroundColor: "#FFBA00", float: "right" }}>
                                    <del> ₹45,000 </del>
                                </Typography>
                                <br />
                                <Link href="#" style={{ textDecoration: "none" }}>
                                    <Typography variant="p" color="orange" >
                                        Offer Available
                                    </Typography>
                                </Link>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                </Grid>

                <Grid lg={2} sm={12} md={12} xs={12} style={{ margin: "20px" }}>
                    <Card sx={{ maxWidth: 335 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={jk}
                            />
                            <CardContent>

                                <Typography variant="body2" color="text.secondary">
                                    Fabric 2 Seater Sofa Grey Color
                                </Typography>
                                <Typography variant="p" color="black">
                                    ₹38,940
                                </Typography>

                                <Typography variant="p" color="white" style={{ backgroundColor: "#FFBA00", float: "right" }}>
                                    <del> ₹45,000 </del>
                                </Typography>
                                <br />
                                <Typography variant="p" color="orange" >
                                    Offer Available
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
<br/>
                    <Card sx={{ maxWidth: 335 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={sagara}
                            />
                            <CardContent>

                                <Typography variant="body2" color="text.secondary">
                                    Fabric 2 Seater Sofa Grey Color
                                </Typography>
                                <Typography variant="p" color="black">
                                    ₹38,940
                                </Typography>

                                <Typography variant="p" color="white" style={{ backgroundColor: "#FFBA00", float: "right" }}>
                                    <del> ₹45,000 </del>
                                </Typography>
                                <br />
                                <Link href="#" style={{ textDecoration: "none" }}>
                                    <Typography variant="p" color="orange" >
                                        Offer Available
                                    </Typography>
                                </Link>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                </Grid>

                <Grid lg={2} sm={12} md={12} xs={12} style={{ margin: "20px" }}>
                    <Card sx={{ maxWidth: 335 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={shree}
                            />
                            <CardContent>

                                <Typography variant="body2" color="text.secondary">
                                    Fabric 2 Seater Sofa Grey Color
                                </Typography>
                                <Typography variant="p" color="black">
                                    ₹38,940
                                </Typography>

                                <Typography variant="p" color="white" style={{ backgroundColor: "#FFBA00", float: "right" }}>
                                    <del> ₹45,000 </del>
                                </Typography>
                                <br />
                                <Typography variant="p" color="orange" >
                                    Offer Available
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
<br/>
                    <Card sx={{ maxWidth: 335 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={ppc}
                            />
                            <CardContent>

                                <Typography variant="body2" color="text.secondary">
                                    Fabric 2 Seater Sofa Grey Color
                                </Typography>
                                <Typography variant="p" color="black">
                                    ₹38,940
                                </Typography>

                                <Typography variant="p" color="white" style={{ backgroundColor: "#FFBA00", float: "right" }}>
                                    <del> ₹45,000 </del>
                                </Typography>
                                <br />
                                <Link href="#" style={{ textDecoration: "none" }}>
                                    <Typography variant="p" color="orange" >
                                        Offer Available
                                    </Typography>
                                </Link>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                </Grid>


                <Grid lg={2} sm={12} md={12} xs={12} style={{ margin: "20px" }}>
                    <Card sx={{ maxWidth: 335 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={ramco}
                            />
                            <CardContent>

                                <Typography variant="body2" color="text.secondary">
                                    Fabric 2 Seater Sofa Grey Color
                                </Typography>
                                <Typography variant="p" color="black">
                                    ₹38,940
                                </Typography>

                                <Typography variant="p" color="white" style={{ backgroundColor: "#FFBA00", float: "right" }}>
                                    <del> ₹45,000 </del>
                                </Typography>
                                <br />
                                <Link href="#" style={{ textDecoration: "none" }}>
                                    <Typography variant="p" color="orange" >
                                        Offer Available
                                    </Typography>
                                </Link>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <br/>
                    <Card sx={{ maxWidth: 335 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={raasi}
                            />
                            <CardContent>

                                <Typography variant="body2" color="text.secondary">
                                    Fabric 2 Seater Sofa Grey Color
                                </Typography>
                                <Typography variant="p" color="black">
                                    ₹38,940
                                </Typography>

                                <Typography variant="p" color="white" style={{ backgroundColor: "#FFBA00", float: "right" }}>
                                    <del> ₹45,000 </del>
                                </Typography>
                                <br />
                                <Link href="#" style={{ textDecoration: "none" }}>
                                    <Typography variant="p" color="orange" >
                                        Offer Available
                                    </Typography>
                                </Link>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                </Grid>



                

            

               
            </Grid>




            <Contact />
            <Footer />
        </div>
    )
}

export default Productlist;
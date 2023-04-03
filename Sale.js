import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Link, Typography } from "@mui/material";
import React from "react";
import wall from './wall.jpg';
import bed from "./bed.jpg";
import sofa from "./sofa.jpg";
import chair from "./chair.jpg";
import tank from "./tank.jpg";
import cement from "./cement.jpg";
import plant from "./plants.jpg";
import led from "./led.jpg";
import ware from "./ware.jpg";
import AddIcon from '@mui/icons-material/Add';

function Sale() {
    return (
        <div>
            <Grid container >
                <Grid lg={12} sm={12} md={12} xs={12}>
                    <Link href="#">
                        <img src={wall} width="100%" height={500} />
                    </Link>
                </Grid>
            </Grid>
            <h1 style={{margin:"20px"}}>Summer Sale</h1>
            {/* <hr style={{margin:"20px"}}/> */}
            <Grid container>
                <Grid lg={2} sm={12} md={12} xs={12} style={{ margin: "20px" }}>
                    <Card sx={{ maxWidth: 335 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={sofa}
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

                </Grid>

                <Grid lg={2} sm={12} md={12} xs={12} style={{ margin: "20px" }}>
                    <Card sx={{ maxWidth: 335 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={tank}
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

                </Grid>


                <Grid lg={2} sm={12} md={12} xs={12} style={{ margin: "20px" }}>
                    <Card sx={{ maxWidth: 335 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={plant}
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
                            image={cement}
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
                            image={bed}
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
                            image={chair}
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
                            image={ware}
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
                            image={led}
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

            <Grid container style={{textAlign:"center"}}>
                <Grid lg={12} sm={12} md={12} xs={12}>
                    <Button variant="outlined" size="large" endIcon={<AddIcon />}>
                       View More
                    </Button>
                </Grid>
            </Grid>
            <br/>
        </div>
    )
}

export default Sale;
import React, { useState } from "react";
import Head from "../Component/Head";
import Navbar from "../Component/Navbar";
import Dropdown from "../Component/Dropdown";
import Contact from "../Component/Contact";
import Footer from "../Component/Footer";
import { Breadcrumbs, Button, ButtonGroup, Grid, Link, Paper, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, Typography } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Home } from "@mui/icons-material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import plant from './image/plants.jpg';
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick} style={{ textDecoration: "none" }}>
        <Home fontSize="small" />
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
            ShoppingCart
        </Typography>
    </Link>

];

function AddtoCart() {
    const [count, setCount] = useState(0); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

    function increment() {
        //setCount(prevCount => prevCount+=1);
        setCount(function (prevCount) {
            return (prevCount += 1);
        });
    }

    function decrement() {
        setCount(function (prevCount) {
            if (prevCount > 0) {
                return (prevCount -= 1);
            } else {
                return (prevCount = 0);
            }
        });
    }
    function remove() {
        if (window.confirm("Are you sure you want to delete this task?")) {
            alert("data deleted");
        }

    }

    // tab
    function a11yProps(index: number) {
        return {
          id: `full-width-tab-${index}`,
          'aria-controls': `full-width-tabpanel-${index}`,
        };
      }

      
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index: number) => {
      setValue(index);
    };

    // checkout
    var navi = useNavigate();
function checkout(){
    
    navi('/checkout');
}


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

          

            <Grid container>
                <Grid lg={8} sm={12} md={12} xs={12}>
                <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          sx={{bgcolor: 'background.paper' }}
        >
          <Tab label="Cart Items" {...a11yProps(0)} />
          <Tab label="Removed Items" {...a11yProps(1)} />
       
        </Tabs>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Image</TableCell>
                                    <TableCell align="left">Product Name</TableCell>
                                    <TableCell align="left">Model</TableCell>
                                    <TableCell align="center">Quantity</TableCell>
                                    <TableCell align="center">Unit Price</TableCell>
                                    <TableCell align="center">Total</TableCell>
                                    <TableCell align="center">Remove Item</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                <TableRow>
                                    <TableCell align="center" component="th" scope="row">
                                        <img src={plant} width={100} />
                                    </TableCell>
                                    <TableCell align="left">Bangur PPC Cement </TableCell>
                                    <TableCell align="left">Bangur PPC Cement</TableCell>
                                    <TableCell align="center">
                                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                            <Button onClick={decrement}>-</Button>
                                            <Button>{count}</Button>
                                            <Button onClick={increment}>+</Button>
                                        </ButtonGroup>
                                    </TableCell>
                                    <TableCell align="center">Rs285</TableCell>
                                    <TableCell align="center">Rs285</TableCell>
                                    <TableCell align="center">
                                        <Button onClick={() => remove()} variant="text">
                                            Remove Item
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" component="th" scope="row">
                                        <img src={plant} width={100} />
                                    </TableCell>
                                    <TableCell align="left">Bangur PPC Cement </TableCell>
                                    <TableCell align="left">Bangur PPC Cement</TableCell>
                                    <TableCell align="center">
                                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                            <Button onClick={decrement}>-</Button>
                                            <Button>{count}</Button>
                                            <Button onClick={increment}>+</Button>
                                        </ButtonGroup>
                                    </TableCell>
                                    <TableCell align="center">Rs285</TableCell>
                                    <TableCell align="center">Rs285</TableCell>
                                    <TableCell align="center">
                                        <Button onClick={() => remove()} variant="text">
                                            Remove Item
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" component="th" scope="row">
                                        <img src={plant} width={100} />
                                    </TableCell>
                                    <TableCell align="left">Bangur PPC Cement </TableCell>
                                    <TableCell align="left">Bangur PPC Cement</TableCell>
                                    <TableCell align="center">
                                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                            <Button onClick={decrement}>-</Button>
                                            <Button>{count}</Button>
                                            <Button onClick={increment}>+</Button>
                                        </ButtonGroup>
                                    </TableCell>
                                    <TableCell align="center">Rs285</TableCell>
                                    <TableCell align="center">Rs285</TableCell>
                                    <TableCell align="center">
                                        <Button onClick={() => remove()} variant="text">
                                            Remove Item
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            {/* </Grid>

            <Grid container style={{ display: "flex", justifyContent: "flex-end" }}> */}
                <Grid lg={3} sm={12} md={12} xs={12} style={{ margin: "50px", border:"1px solid lightgrey", padding:"10px" }}>
                  
                    <h1>Order Summary</h1>
                    <Typography variant="p" style={{fontWeight:"bold"}}>Sub-Total:</Typography>
                    <Typography variant="p" style={{float:"right"}}>345</Typography>
                    <br/>
                    <Typography variant="p" style={{fontWeight:"bold"}}>CGST Tax:</Typography>
                    <Typography variant="p" style={{float:"right"}}>0.00</Typography>
<br/>
<Typography variant="p" style={{fontWeight:"bold"}}>SGST Tax:</Typography>
                    <Typography variant="p" style={{float:"right"}}>0.00</Typography>
<br/>
                    <Typography variant="p" style={{fontWeight:"bold", fontSize:"20px"}}>Total:</Typography>
                    <Typography variant="p" style={{float:"right",fontSize:"20px"}}>3345</Typography>
                    <Button variant="contained" size="large" onClick={checkout} fullWidth>Checkout</Button>
                </Grid>
            </Grid>


            <Grid container >
                <Grid lg={12} sm={12} md={12} xs={12} style={{ margin: "20px" }}>
                    <Button variant="outlined">Continue Shopping</Button>
                </Grid>
               
            </Grid>

            <Contact />
            <Footer />
        </div>
    )
}

export default AddtoCart;
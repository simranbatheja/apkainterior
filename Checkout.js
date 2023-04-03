// import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from "@mui/material";
// import React from "react";
// import Dropdown from "../../Component/Dropdown";
// import Head from "../../Component/Head";
// import Navbar from "../../Component/Navbar";
// import MuiAccordionSummary, {
//     AccordionSummaryProps,
//   } from '@mui/material/AccordionSummary';

// const Accordion = styled((props) => (
//     <MuiAccordion disableGutters elevation={0} square {...props} />
//   ))(({ theme }) => ({
//     border: `1px solid ${theme.palette.divider}`,
//     '&:not(:last-child)': {
//       borderBottom: 0,
//     },
//     '&:before': {
//       display: 'none',
//     },
//   }));
  
//   const AccordionSummary = styled((props: AccordionSummaryProps) => (
//     <MuiAccordionSummary
//       expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
//       {...props}
//     />
//   ))(({ theme }) => ({
//     backgroundColor:
//       theme.palette.mode === 'dark'
//         ? 'rgba(255, 255, 255, .05)'
//         : 'rgba(0, 0, 0, .03)',
//     flexDirection: 'row-reverse',
//     '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
//       transform: 'rotate(90deg)',
//     },
//     '& .MuiAccordionSummary-content': {
//       marginLeft: theme.spacing(1),
//     },
//   }));
  
//   const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
//     padding: theme.spacing(2),
//     borderTop: '1px solid rgba(0, 0, 0, .125)',
//   }));
  
 
   

// function Checkout(){
//     const [expanded, setExpanded] = React.useState<string | false>('panel1');
  
//     const handleChange =
//       (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
//         setExpanded(newExpanded ? panel : false);
//       };
//     return(
//         <div>
//            <Head/>
//            <Navbar/>
//            <Dropdown/>
//            <h1 style={{margin:"10px"}}>Checkout</h1>
//            <Grid container>
//             <Grid lg={5} sm={5} md={5} xs={12}>
//            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
//         <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
//           <Typography>Collapsible Group Item #1</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
//             sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
//             sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
//         <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
//           <Typography>Collapsible Group Item #2</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
//             sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
//             sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
//         <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
//           <Typography>Collapsible Group Item #3</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
//             sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
//             sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       </Grid>
//       </Grid>
//         </div>
//     )
// }

// export default Checkout;

import * as React from 'react';

import Dropdown from "../../Component/Dropdown";
import Head from "../../Component/Head";
import Navbar from "../../Component/Navbar";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Button, Card, CardActionArea, CardContent, Checkbox, FilledInput, FormControl, FormControlLabel, Grid, InputAdornment, InputLabel, TextField } from '@mui/material';
import Footer from '../../Component/Footer';
import Contact from '../../Component/Contact';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));
  
  export default function Checkout() {
    const [expanded, setExpanded] = React.useState('panel1');

  
    const handleChange =
      (panel) => (event, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
      };
  
    return (
      <div>
        <Head/>
        <Navbar/>
        <Dropdown/>
        <Grid container>
            <Grid lg={8} sm={5} md={5} xs={12} style={{margin:"20px"}}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>LOGIN</Typography>
          </AccordionSummary>
          <Grid lg={5}> 
          <AccordionDetails  >
            <Typography variant='h5'>
             Login or SignUp
            </Typography>
            <FormControl sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Phone-Number</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            startAdornment={<InputAdornment position="start">+91</InputAdornment>}
          />
        </FormControl>
        <Typography>By continuing, I agree to the Terms of Use & Privacy Policy</Typography>
          <Button variant='contained' fullWidth color='warning' size='large'>Send OTP</Button>
          </AccordionDetails>
          </Grid>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>DELIVERY ADDRESS</Typography>
          </AccordionSummary>
         <Grid lg={4} md={4} sm={4} xs={12}>
          <AccordionDetails>
           
       
          <Typography gutterBottom variant="h5" component="div">
            Add Address
          </Typography>
          <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth/> <br/> <br/>
          <TextField id="outlined-basic" label="Phone-Number" variant="outlined" fullWidth/> <br/> <br/>
          <TextField id="outlined-basic" label="House no. " variant="outlined" fullWidth/> <br/> <br/>
          <TextField id="outlined-basic" label="City" variant="outlined" fullWidth/>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Set as Default Address" />
        <Button variant='contained' color='warning' size='large' fullWidth>Save Address</Button>
          </AccordionDetails>
          </Grid>
          
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>ORDER SUMMARY</Typography>
          </AccordionSummary>
          
          <AccordionDetails>
         
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>PAYMENT MODE</Typography>
          </AccordionSummary>
          
          <AccordionDetails>
         
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        </Grid>
        </Grid>
        <Contact/>
        <Footer/>
      </div>
    );
  }
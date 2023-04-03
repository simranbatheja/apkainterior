import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function Dropdown() {
  const [anchorEl, setAnchorEl] = React.useState('');
  const open = Boolean(anchorEl);
  var navi = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
   
  };
  const handleClose = () => {
    setAnchorEl(null);
    navi('/product');
  };

  return (
    <div style={{margin:"10px"}}>
     
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{color:"black"}}
      >
        Building Material
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Cement</MenuItem>
        <MenuItem onClick={handleClose}>Steel</MenuItem>
        <MenuItem onClick={handleClose}>Shuttering</MenuItem>
      </Menu>

      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{color:"black"}}
    
      >
        Plants And More
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Cement</MenuItem>
        <MenuItem onClick={handleClose}>Steel</MenuItem>
        <MenuItem onClick={handleClose}>Shuttering</MenuItem>
      </Menu>
      

      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{color:"black"}}
      >
      Electrical
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
         <MenuItem onClick={handleClose}>Cement</MenuItem>
        <MenuItem onClick={handleClose}>Steel</MenuItem>
        <MenuItem onClick={handleClose}>Shuttering</MenuItem>
      </Menu>


      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{color:"black"}}
      >
     Bathroom
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
         <MenuItem onClick={handleClose}>Cement</MenuItem>
        <MenuItem onClick={handleClose}>Steel</MenuItem>
        <MenuItem onClick={handleClose}>Shuttering</MenuItem>
      </Menu>
      <hr/>
     
    </div>
  );
}
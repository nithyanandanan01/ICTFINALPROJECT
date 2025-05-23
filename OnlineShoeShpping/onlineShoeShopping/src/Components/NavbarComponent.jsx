import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MatchingNavbar = () => {
  return (
    <Box sx={{ flexGrow: 1 , width: '100vw'}}>
      <AppBar position="static" sx={{width:"100vw", backgroundColor: "#17a2b8", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)" }}>
  <Toolbar>
    <Typography variant="h6" sx={{ flexGrow: 1, color: "black", fontSize: "30px", fontFamily: "fantasy", fontWeight: "6" ,mr:2}}>
      ShoeHUB
    </Typography>
    <Link to="/login" style={{ textDecoration: "none" }}>
      <Button sx={{ fontSize: "18px", color: "white", fontFamily: "cursive", border: "1px solid black", borderColor: "black", mr: 2 }}>
        Login
      </Button>
    </Link>
    <Link to="/signUp" style={{ textDecoration: "none" }}>
      <Button sx={{ fontSize: "18px", color: "white", fontFamily: "cursive", border: "1px solid black", borderColor: "black", mr: 2 }}>
        Sign Up
      </Button>
    </Link>
    <Link to="/home" style={{ textDecoration: "none" }}>
      <Button sx={{ fontSize: "18px", color: "white", fontFamily: "cursive", border: "1px solid black", borderColor: "black", mr: 2 }}>
        Home
      </Button>
    </Link>
    <Link to="/login" style={{ textDecoration: "none" }}>
      <Button sx={{ fontSize: "18px", color: "white", fontFamily: "cursive", border: "1px solid black", borderColor: "black", mr: 2 }}>
        Logout
      </Button>
    </Link> 
  </Toolbar>
</AppBar>
    </Box>
  );
};

export default MatchingNavbar;

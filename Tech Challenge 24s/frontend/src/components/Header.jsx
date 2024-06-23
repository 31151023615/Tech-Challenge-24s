import React, { useEffect } from "react";
import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Paper } from "@mui/material"; 
import "../styles/Header.scss";

function Header() {
  
  const navigate = useNavigate();
 
  return (
    
      <Box display="flex" justifyContent="space-center" alignItems="center" margin ="20px 20px">
        <Link to="/">
          <Box component="img" src={logo} alt="" height="48px" />
        </Link>
        
      </Box>

  );
}

function HeaderButton({ to, label }) {
  return (
    <Link to={to}>
      <Button size="large" style={{ textTransform: "none", color: "black" }}>
        {label}
      </Button>
    </Link>
  );
}

export default Header;

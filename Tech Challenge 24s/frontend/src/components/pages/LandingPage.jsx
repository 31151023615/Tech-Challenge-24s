import React, { useState } from "react";
import {
  Grid,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import "../../styles/LandingPage.scss";

import { useNavigate } from "react-router-dom"; // Import useNavigate


function LandingPage() {
  const [accessibilities, setAccessibilities] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  const accessibilityOptions = [
    "Visual Impairment",
    "Hearing Impairment",
    "Motor Impairment",
    "Cognitive Impairment",
  ];

  const handleAccessibilityChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setAccessibilities((prev) => [...prev, value]);
    } else {
      setAccessibilities((prev) => prev.filter((item) => item !== value));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("Car and auction created successfully!");
    navigate("/myauctions"); // Redirect to myauctionspage
  };

  return (
    <div>
      <div className="pageHeading">Personalise Your Journey</div>
      <Box
        component="form"
        className="auctionACarContainer"
        sx={{ padding: "20px 40px", maxWidth: "100%" }}
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="paragraph"> Please choose the option that best describes your accessibility requirement:</div>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className="aboutCarField">
            <FormGroup>
              {accessibilityOptions.map((option) => (
                <FormControlLabel
                  key={option}
                  control={
                    <Checkbox
                      checked={accessibilities.includes(option)}
                      onChange={handleAccessibilityChange}
                      value={option}
                    />
                  }
                  label={option}
                />
              ))}
            </FormGroup>
          </div>
        </Grid>

        <div className="aboutEventContainer">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="secondaryButton"
          >
            Submit
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default LandingPage;

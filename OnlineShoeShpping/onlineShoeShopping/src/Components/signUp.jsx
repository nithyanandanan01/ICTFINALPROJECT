import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, Paper, Typography, Snackbar, Alert } from "@mui/material";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    id: 0,
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.name === "id" ? parseInt(e.target.value, 10) || 0 : e.target.value,
    });
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://localhost:7064/api/Shoes/register", formData);
      if (response.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      console.error("Registration failed.:", error);
      setErrorMessage("Registration failed! Please try again.");
      setOpenSnackbar(true);
    }
  };

  return (
    <Container maxWidth="100vw" sx={{
      width: "100vw",
      height:"100vh",
      borderRadius: 0,
      backgroundColor: "#aed6f1", // Teal card background
      color: "#82ccdd",
      boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.5)",
      justifyContent: "center", 
      display: "flex",// Centers children horizontally
    alignItems: "center",
    }}>
      <Paper elevation={3} style={{ padding: "20px", textAlign: "center",width: 400,height:400,backgroundColor:"#17a2b8",justifyContent: "center", 
    alignItems: "center", borderRadius: "20px"}}>
        <Typography variant="h5" gutterBottom sx={{ color: "#f8f9fa",fontFamily:'cursive' }}>SIGN UP</Typography>
        <form onSubmit={handleSubmit}>
          <TextField label="ID" type="number" name="id" value={formData.id} onChange={handleChange} fullWidth margin="normal" required style={{backgroundColor:"#aed6f1",color:"black"}} InputLabelProps={{ style: { color: "black" } }}/>
          <TextField label="Username" type="text" name="username" value={formData.username} onChange={handleChange} fullWidth margin="normal" required style={{backgroundColor:"#aed6f1",color:"black"}} InputLabelProps={{ style: { color: "black" } }} />
          <TextField label="Password" type="password" name="password" value={formData.password} onChange={handleChange} fullWidth margin="normal" required style={{backgroundColor:"#aed6f1",color:"black"}} InputLabelProps={{ style: { color: "black" } }} />
          <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: "15px",color: "#f8f9fa",fontFamily:'cursive',backgroundColor:"#2c3e50",fontSize: "18px",borderRadius:12 }}>SIGN UP</Button>
        </form>
        
      </Paper>
      <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={() => setOpenSnackbar(false)}>
        <Alert severity="error">{errorMessage}</Alert>
      </Snackbar>
    </Container>
  );
};

export default Signup;

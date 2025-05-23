import React, { useState } from "react";
import { Container, TextField, Button, Typography, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginMatchingSignup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("https://localhost:7064/api/Shoes/login", formData);

      if (response.status === 200) {
        const role = response.data.role;
        role === "User" ? navigate("/home") : navigate("/Admin");
      }
    } catch (err) {
      setError("Incorrect username or password");
    }
  };

  return (
    <Container
      maxWidth="false"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width : "100vw",
        backgroundColor: "#aed6f1", // Dark blue background
      }}
    >
      <Card
        sx={{
          padding: 4,
          maxWidth: 400,
          width: "100%",
          width:"100%",
          borderRadius: 3,
          backgroundColor: "#17a2b8", // Teal card background
          color: "#82ccdd",
          boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.5)",
        }}
      >
        <Typography variant="h5" align="center" gutterBottom sx={{ color: "#f8f9fa",fontFamily:'cursive' }}>
          LOGIN
        </Typography>
        <form onSubmit={(e) => e.preventDefault()}>
          <TextField
            fullWidth
            name="username"
            label="Username"
            value={formData.username}
            onChange={handleChange}
            required
            margin="normal"
            sx={{
              backgroundColor: "#aed6f1", // Dark blue text field
              borderRadius: 2,
              input: { color: "black" },
              label: { color: "black" },

            }}
          />
          <TextField
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            margin="normal"
            sx={{
              backgroundColor: "#aed6f1",
              borderRadius: 2,
              input: { color: "black" },
              label: { color: "black" },
            }}
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#2c3e50", // Darker blue button
              color: "#f8f9fa",
              fontSize: "18px",
              fontFamily:'cursive',
              borderRadius: 3,
              marginTop: 2,
              "&:hover": { backgroundColor: "#3c6382" }, // Slightly lighter hover effect
            }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default LoginMatchingSignup;

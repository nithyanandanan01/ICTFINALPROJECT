import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from "@mui/material";

const AdminPage = () => {
  const [shoeses, setShoes] = useState([]);
  const [formData, setFormData] = useState({ shoeid: "", shoename: "", price: "", size: "", photo: "" });

  useEffect(() => {
    fetchShoes();
  }, []);

  const fetchShoes = async () => {
    try {
      const response = await axios.get("https://localhost:7064/api/Shoes");
      setShoes(response.data);
    } catch (error) {
      console.error("Error fetching shoes:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://localhost:7064/api/Shoes/admin", formData);
      fetchShoes();
    } catch (error) {
      console.error("Error adding shoes:", error);
    }
  };

//   const handleEdit = async (id) => {
//     try {
//       await axios.put(`https://localhost:7260/api/Values/updatedressdetails/${id}`, formData);
//       fetchDresses();
//     } catch (error) {
//       console.error("Error updating dress:", error);
//     }
//   };
const handleEdit = async (shoeid) => {
  try {
    await axios.put(`https://localhost:7064/api/Shoes/updateshoedetails?shoeid=${shoeid}`, formData, {
      headers: { "Content-Type": "application/json" } // Ensuring correct request format
    });
    fetchShoes();
  } catch (error) {
    console.error("Error updating Shoe:", error.response?.data || error.message);
  }
};

const handleDelete = async (shoeid) => {
  try {
    await axios.delete(`https://localhost:7064/api/Shoes/deletedetails?shoeid=${shoeid}`);
    fetchShoes();
  } catch (error) {
    console.error("Error deleting shoe:", error.response?.data || error.message);
  }
};

  return (
    <Container  style={{backgroundColor:"#aed6f1",height:"100vh",width:"100vw",}}>
      <h2 style={{fontFamily:"cursive",}}>Admin Workspace</h2>
      <form onSubmit={handleSubmit}>
        
        {/* <TextField label="Shoe ID" type="number" name="shoeid" value={formData.shoeid} onChange={handleChange} required /> */}
        <TextField style={{marginLeft:"20px"}} label="Shoe Name" type="text" name="shoename" value={formData.shoename} onChange={handleChange} required />
        <TextField label="Price" type="number" name="price" value={formData.price} onChange={handleChange} required />
        <TextField label="Size" type="text" name="size" value={formData.size} onChange={handleChange} required />
        <TextField label="Photo URL" type="text" name="photo" value={formData.photo} onChange={handleChange} required />
       <><br /></> <Button style={{backgroundColor:"#2c3e50",fontFamily:"cursive",marginTop: "20px"}}type="submit" variant="contained" color="primary" st>Add Shoe</Button>
      </form>

      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Size</TableCell>
              <TableCell>Photo</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shoeses.map((shoes) => (
              <TableRow key={shoes.shoeid}>
                <TableCell>{shoes.shoeid}</TableCell>
                <TableCell>{shoes.shoename}</TableCell>
                <TableCell>{shoes.price}</TableCell>
                <TableCell>{shoes.size}</TableCell>
                <TableCell><img src={shoes.photo} alt={shoes.shoename} width="50" /></TableCell>
                <TableCell>
                  <Button style={{backgroundColor:"#2c3e50",fontFamily:"cursive",width:60}}variant="contained" color="secondary" onClick={() => handleEdit(shoes.shoeid)}>Edit</Button>
                  <Button style={{backgroundColor:"red",fontFamily:"cursive",width:60,marginLeft: '10px'}}variant="contained" color="error" onClick={() => handleDelete(shoes.shoeid)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AdminPage;

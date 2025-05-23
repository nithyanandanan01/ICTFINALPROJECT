import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const { orderId } = useParams();
    const [bookingDetails, setBookingDetails] = useState({
        orderId: '', // String instead of number
        name: '',
        address: '',
        pincode: '',
        phoneNo: ''
    });

    const handleChange = (e) => {
        setBookingDetails({
            ...bookingDetails,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const bookingData = { ...bookingDetails };

        try {
            const response = await axios.post('https://localhost:7064/api/Shoes/shoeOrder', bookingData);
  

            console.log('Booking Confirmed:', response.data);
            alert('Order Confirmed!');
        } catch (error) {
            console.error('Error confirming booking:', error);
            alert('Failed to confirm booking. Please try again.');
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px',backgroundColor:"#aed6f1",width:"97vw",height:"100vh" }}>
            <h1 style={{fontFamily:"cursive"}}>Order Details{orderId}</h1>
            <p>Just fill in the necessary details to finalize your booking.</p>

            <form 
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} 
                onSubmit={handleSubmit}
            >
                
                <input 
                    type="text" name="orderId" placeholder="*Order ID"
                    style={{ padding: '10px', margin: '10px', width: '250px',borderRadius:0 }} 
                    value={bookingDetails.orderId} onChange={handleChange}
                />
                <input 
                    type="text" name="name" placeholder="*Name"
                    style={{ padding: '10px', margin: '10px', width: '250px' }} 
                    value={bookingDetails.name} onChange={handleChange}
                />
                <input 
                    type="text" name="address" placeholder="*Address"
                    style={{ padding: '10px', margin: '10px', width: '250px' }} 
                    value={bookingDetails.address} onChange={handleChange}
                />
                <input 
                    type="text" name="pincode" placeholder="*Pincode"
                    style={{ padding: '10px', margin: '10px', width: '250px', }} 
                    value={bookingDetails.pincode} onChange={handleChange}
                />
                <input 
                    type="text" name="phoneNo" placeholder="*Mobile Number"
                    style={{ padding: '10px', margin: '10px', width: '250px' }} 
                    value={bookingDetails.phoneNo} onChange={handleChange}
                />
                <button 
                    type="submit"
                    style={{
                        backgroundColor: '#2c3e50',
                        fontFamily:"cursive",
                        color: '#fff',
                        padding: '10px 15px',
                        fontSize: '14px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        marginTop: '10px'
                    }}
                >
                    CONFIRM ORDER
                </button>
            </form>
        </div>
    );
};

export default Booking;

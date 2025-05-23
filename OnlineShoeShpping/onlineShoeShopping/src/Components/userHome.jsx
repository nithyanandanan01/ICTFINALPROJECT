import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const HomepageComponent = () => {
    const [shoeses, setShoes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:7064/api/Shoes');
                setShoes(response.data);
            } catch (err) {
                setError('Error fetching data');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <p style={{ textAlign: 'center' }}>Loading...</p>;
    if (error) return <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>;

    return (
        <div style={{ textAlign: 'center', padding: '20px',backgroundColor:"#aed6f1",width:"97vw",height:"100vh" }}>
            <h1 style={{fontSize:40,color:"black",fontFamily:"cursive"}}>Latest Shoe Trends</h1>
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '20px', 
                justifyContent: 'center' 
            }}>
                {shoeses.map((shoe) => (
                    <div 
                        key={shoe.shoeid} 
                        style={{ 
                            borderRadius: '10px', 
                            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)', 
                            padding: '20px', 
                            background: 'white', 
                            textAlign: 'center', 
                            transition: 'transform 0.3s ease',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <img src={shoe.photo} alt={shoe.shoename} style={{ 
                            width: '100%', 
                            height: '200px', 
                            objectFit: 'cover', 
                            borderRadius: '8px' 
                        }} />
                        <h3 style={{ marginTop: '10px', fontWeight: 'bold' }}>{shoe.shoename}</h3>
                        <p style={{ margin: '5px 0', fontSize: '14px' }}>Size: {shoe.size}</p>
                        <p style={{ margin: '5px 0', fontSize: '16px', fontWeight: 'bold', color: '#17a2b8' }}>₹{shoe.price}</p>
                        <button 
                            onClick={() => navigate(`/booking?`)}
                            style={{
                                backgroundColor: '#2c3e50',
                                color: '#fff',
                                fontFamily:'cursive',
                                padding: '10px 15px',
                                fontSize: '14px',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                marginTop: '10px'
                            }}
                        >
                            SHOP NOW
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomepageComponent;

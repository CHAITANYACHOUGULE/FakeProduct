import React, { useState, useEffect } from 'react';

// URL for the Fake Store API (latest version)
const API_URL = 'https://fakestoreapi.com/products';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch product data when component mounts
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            margin: '20px',
            border: '1px solid #ddd',
            padding: '10px',
            width: '200px',
            textAlign: 'center',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: '100%',
              height: '150px',
              objectFit: 'cover',
              marginBottom: '10px',
              borderRadius: '4px',
            }}
          />
          <h3 style={{ fontSize: '1.1em', color: '#333' }}>{product.title}</h3>
          <p style={{ fontWeight: 'bold', color: '#007BFF' }}>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
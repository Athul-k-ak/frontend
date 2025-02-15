import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container className="text-center mt-5">
      <h1>Welcome to Our eCommerce Store</h1>
      <p>Find the best products at the best prices.</p>
      <Button variant="primary" onClick={() => navigate('/products')}>
        Shop Now
      </Button>
    </Container>
  );
};

export default Home;

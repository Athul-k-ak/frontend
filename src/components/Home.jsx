import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/home.css";

const Home = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication on component mount
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []); // Runs only once when the component mounts

  return (
    <div className="home-container">
      <h1>Welcome to Our eCommerce Platform</h1>
      <p>Find the best products at the best prices.</p>
    
    </div>
  );
};

export default Home;

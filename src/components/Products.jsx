import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("auth");
        const response = await fetch("http://localhost:3000/products", {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token for authentication
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <div className="products-page">
      {/* Navbar */}
      {/* <header className="navbar">
        <h1 className="brand">ShopEase</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </header> */}

      {/* Products Section */}
      <div className="products-container">
        <h2 className="section-title">Explore Our Collection</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <img src={product.url} alt={product.name} className="product-image" />
              <h3 className="product-title">{product.name}</h3>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <button className="buy-btn">Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

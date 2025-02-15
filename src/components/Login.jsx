import React, { useState } from "react";
import {
  Button,
  Form,
  Card,
  Container,
  Row,
  Col,
  FormControl,
} from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./../styles/login.css"; // Import the new styles

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setErrorMessage("Please enter a valid email");
      return;
    }
    if (!password || password.length < 5) {
      setErrorMessage("Enter a valid password (min. 5 characters)");
      return;
    }

    const data = { email, password };

    try {
      const response = await axios.post("http://localhost:3000/login", data);
      alert(response.data.message);
      onLogin();
      navigate("/products");
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-page">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Row>
          <Col>
            <Card className="login-card">
              <Card.Body>
                <h3 className="text-center mb-4">Welcome Back!</h3>
                {errorMessage && (
                  <div className="alert alert-danger">{errorMessage}</div>
                )}
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <FormControl
                      type="email"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input-field"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <FormControl
                      type="password"
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="input-field"
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="login-btn">
                    Login
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;

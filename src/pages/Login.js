import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Card, H1 } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // set configuration
  const configuration = {
    method: "post",
    url: "http://localhost:5000/login",
    data: {
      email,
      password,
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios(configuration)
      .then((result) => {
        if (Object.entries(result.data).length > 2) {
          navigate("/homepage");
        } else {
          setError(result.data.message);
        }
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card
              style={{
                width: `30rem`,
                padding: `3rem`,
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: `3rem`,
              }}
            >
              <div
                className="d-flex align-items-center"
                style={{ marginBottom: "1rem" }}
              >
                <img
                  src="/KuyResto.png"
                  style={{
                    width: `2rem`,
                    display: "inline",
                  }}
                />
                <span
                  style={{
                    display: "inline",
                    fontWeight: "bold",
                    fontSize: "1.8rem",
                  }}
                >
                  uyResto!
                </span>
              </div>
              <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Text>
                    Didn't have account yet?{" "}
                    <Link to="/register" className="text-primary">
                      Register
                    </Link>
                  </Form.Text>
                </Form.Group>
                {error && (
                  <span className="text-danger" style={{ fontSize: "12px" }}>
                    {error}
                  </span>
                )}
                <br />
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

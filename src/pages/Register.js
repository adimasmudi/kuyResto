import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Card, H1 } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVerified, setPasswordverified] = useState(true);

  const [error, setError] = useState("");

  const navigate = useNavigate();

  // set configuration
  const configuration = {
    method: "post",
    url: "http://localhost:5000/register",
    data: {
      fullname,
      email,
      phone,
      address,
      password,
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      setPasswordverified(true);
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
    } else {
      setPasswordverified(false);
    }
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
                  src="/images/KuyResto.png"
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
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Fullname</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your fullname"
                    name="fullname"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
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
                <Form.Group className="mb-3" controlId="formBasicPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Address</Form.Label>
                  <br></br>
                  <textarea
                    name="address"
                    id="address"
                    cols="50"
                    rows="5"
                    className="form-control"
                    placeholder="e.g Perum Tellang Indah Blok A No.2, Tellang, Kamal,Bangkalan"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  ></textarea>
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
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  {error.length > 0 ? (
                    <span className="text-danger" style={{ fontSize: "12px" }}>
                      {error}
                    </span>
                  ) : (
                    !passwordVerified && (
                      <span
                        className="text-danger"
                        style={{ fontSize: "12px" }}
                      >
                        Password is not same, check again!
                      </span>
                    )
                  )}
                </Form.Group>
                <Form.Group>
                  <Form.Text>
                    Already have account?{" "}
                    <Link to="/login" className="text-primary">
                      Login
                    </Link>
                  </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Register
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

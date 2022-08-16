import React from "react";
import { Container, Col, Nav, Navbar, Dropdown } from "react-bootstrap";

export default function index() {
  return (
    <Navbar
      expand="lg"
      style={{
        boxShadow: "1px 1px 1px gray",
        width: "100%",
      }}
    >
      <Container fluid>
        <Col xs={12} sm={12} md={5} lg={5}>
          <Navbar.Brand href="/homepage">
            <img
              src="/images/kuyResto.png"
              alt="logo"
              style={{ width: "2rem" }}
            />
            <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
              uyResto
            </span>
          </Navbar.Brand>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={3}
          lg={3}
          className=" d-flex justify-content-end"
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Transaction</Nav.Link>
              <Nav.Link href="#link">Notification</Nav.Link>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Profil</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Setting</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Container>
    </Navbar>
  );
}

import React, { useState, useEffect } from "react";

// react bootstrap
import { Container, Row, Col, Button } from "react-bootstrap";

// components
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import Card from "../components/Card";
import Cart from "../components/Cart";

// data
import homepage from "../json/homepage.json";

export default function Homepage() {
  const [showCart, setShowCart] = useState(false);
  const [category, setCategory] = useState("");

  useEffect(() => {
    return;
  }, [showCart, category]);

  const handleCheck = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <Container fluid>
        <Row>
          <Col xs={10} sm={3} md={3} lg={3}>
            <Filter handleCheck={handleCheck} />
          </Col>
          <Col xs={10} sm={7} md={7} lg={7}>
            {category !== "semua"
              ? homepage.products.map((data) => {
                  if (data.category === category) {
                    return <Card data={data} type="card" />;
                  }
                })
              : homepage.products.map((data) => (
                  <Card data={data} type="card" />
                ))}
          </Col>
          <Col
            xs={2}
            sm={2}
            md={2}
            lg={2}
            className=" d-flex justify-content-end"
          >
            <Button
              style={{ height: "3rem", zIndex: "900" }}
              onClick={() => setShowCart(!showCart)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </Button>
            {showCart && <Cart data={homepage.cart} />}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

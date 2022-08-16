import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

export default function Index({ data, type }) {
  return (
    <Card
      style={{
        width: "80%",
        margin: "1rem",
        boxShadow: "1px 1px 4px 1px gray",
      }}
      className="d-flex"
    >
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Card.Img
            variant="top"
            src={data.image}
            style={{ borderRadius: "5px" }}
          />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            {data.description && <Card.Text>{data.description}</Card.Text>}
            <div className="d-flex flex-column">
              {data.discount ? (
                <div>
                  <span className="d-inline">
                    Rp. {data.price - data.discount}
                  </span>{" "}
                  <del className="text-danger ">{data.price}</del>
                </div>
              ) : (
                <span>Rp. {data.price}</span>
              )}
              <span className={data.qty > 0 ? "text-success" : "text-danger"}>
                {data.qty > 0 ? `Tersisa ${data.qty}` : "Sudah habis"}
              </span>
            </div>

            <Container fluid style={{ margin: 0 }}>
              <Row>
                <Col xs={12} sm={12} md={6} lg={6}>
                  <Button
                    className="btn w-100 mb-2"
                    style={{
                      background: "#EF2F2F",
                      border: "none",
                      outline: "none",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-wallet2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                    </svg>
                  </Button>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                  <Button
                    className="btn w-100"
                    style={{
                      background: "none",
                      border: "1px solid #EF2F2F",
                    }}
                  >
                    {type === "card" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-cart-plus"
                        viewBox="0 0 16 16"
                        color="#EF2F2F"
                      >
                        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-cart-x"
                        viewBox="0 0 16 16"
                        color="#EF2F2F"
                      >
                        <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z" />
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                    )}
                  </Button>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

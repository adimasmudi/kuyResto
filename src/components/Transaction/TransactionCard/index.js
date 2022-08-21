import React from "react";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Link } from "react-router-dom";

export default function index({ status, data }) {
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
            <Card.Title>
              <Link
                to={`/details-menu/${data.id}`}
                style={{ color: "black", textDecoration: "none" }}
              >
                {data.name}
              </Link>
            </Card.Title>
            {data.description && <Card.Text>{data.description}</Card.Text>}

            <Button>
              {status === "Belum diproses"
                ? "Ingatkan Admin"
                : status === "Diproses"
                ? "Konfirmasi Selesai"
                : "Hapus"}
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

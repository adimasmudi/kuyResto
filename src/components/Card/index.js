import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Link } from "react-router-dom";

// import Button Group
import BuyCartButtonGroup from "../BuyCartButtonGroup";

export default function Index({ data, type, addToChart, cartHandle }) {
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

            <BuyCartButtonGroup
              type={type}
              idItem={data.id}
              cartHandle={cartHandle}
              addToChart={addToChart}
            />
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

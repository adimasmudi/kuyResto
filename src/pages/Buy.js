import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

// component
import Navbar from "../components/Navbar";

// data json
import details_menu from "../json/details_menu.json";

export default function Buy() {
  const [amountOrder, setAmountOrder] = useState(1);

  const handleClick = (type) => {
    switch (type) {
      case "dec":
        if (amountOrder > 1) {
          setAmountOrder(amountOrder - 1);
        }
        break;
      case "inc":
        if (amountOrder < details_menu.qty) setAmountOrder(amountOrder + 1);
    }
  };
  return (
    <div>
      <Navbar />
      <h2 className="text-center">Pembelian</h2>
      <Container>
        <Row>
          <Col>
            <img
              src={details_menu.image}
              alt={details_menu.name}
              style={{ borderRadius: "5px" }}
            />
          </Col>
          <Col>
            <Container>
              <Row>
                <Col>Nama Makanan : {details_menu.name}</Col>
              </Row>
              <Row>
                <Col>Harga : {details_menu.price}</Col>
              </Row>
              <Row>
                <Col>Sisa : {details_menu.qty}</Col>
              </Row>
              <Row>
                <Col>Discount : {details_menu.discount}</Col>
              </Row>

              <hr />
              <Row>
                <Col>Nama Pemesan : {"Masmudi"}</Col>
              </Row>
              <Row>
                <Col>Jumlah Pesanan : {amountOrder}</Col>
              </Row>
              <Row>
                <Col>
                  Total :{" "}
                  {(details_menu.price - details_menu.discount) * amountOrder}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    onClick={() => handleClick("dec")}
                    className="bg-danger"
                  >
                    -
                  </Button>
                  <input
                    type="text"
                    disabled
                    value={amountOrder}
                    style={{ textAlign: "center" }}
                  />
                  <Button
                    onClick={() => handleClick("inc")}
                    className="bg-success"
                  >
                    +
                  </Button>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Upload Bukti Transfer</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button>Submit</Button>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

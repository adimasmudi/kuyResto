import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// import card
import Card from "../Card";

export default function Index({ data, cartHandle }) {
  return (
    <Container
      className="md-3"
      style={{
        position: "absolute",
        zIndex: "9999",

        marginLeft: "0.3rem",
        marginTop: "3.3rem",
      }}
    >
      <Row className="justify-content-end">
        <Col
          md={5}
          lg={5}
          xs={10}
          sm={10}
          style={{ background: "#D9D9D9", borderRadius: "5px" }}
        >
          <h3>Cart</h3>
          {data.length > 0 ? (
            data.map((item) => (
              <Card
                data={item}
                type="cart"
                addToChart={false}
                cartHandle={cartHandle}
              />
            ))
          ) : (
            <p>Tidak ada data di keranjang</p>
          )}
        </Col>
      </Row>
    </Container>
  );
}

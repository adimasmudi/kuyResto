import React, { useState, useEffect } from "react";

// react bootstrap
import { Container, Row, Col } from "react-bootstrap";

// import component
import Navbar from "../components/Navbar";
import Panel from "../components/Transaction/Panel";
import TransactionCard from "../components/Transaction/TransactionCard";

// import json
import transaksi from "../json/transaksi.json";

export default function Transaction() {
  const [active, setActive] = useState("Belum diproses");

  const handleClick = (val) => {
    setActive(val);
  };
  return (
    <div>
      <Navbar />
      <Panel active={active} onClick={(e) => handleClick(e)} />
      {transaksi.length > 0 && (
        <Container>
          {transaksi.map((data) => {
            if (data.status === active) {
              return (
                <Row className="d-flex justify-content-center">
                  <Col
                    xs={10}
                    sm={10}
                    md={8}
                    lg={6}
                    className="d-flex justify-content-center"
                  >
                    <TransactionCard status={active} data={data} />
                  </Col>
                </Row>
              );
            }
          })}
        </Container>
      )}
    </div>
  );
}

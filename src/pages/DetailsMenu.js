import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

// component
import Navbar from "../components/Navbar";
import Cart from "../components/Cart";
import BuyCartButtonGroup from "../components/BuyCartButtonGroup";

// data json
import details_menu from "../json/details_menu.json";
import homepage from "../json/homepage.json";

export default function DetailsMenu() {
  const [showCart, setShowCart] = useState(false);
  const [dataOnCart, setDataOnCart] = useState(homepage.cart);

  useEffect(() => {
    return;
  }, [showCart]);

  const cartHandle = (id, addToChart) => {
    if (addToChart) {
      let isExist = dataOnCart.filter((dt) => dt.id === details_menu.id);

      isExist.length === 0 &&
        setDataOnCart([
          ...dataOnCart,

          {
            id: details_menu.id,
            name: details_menu.name,
            price: details_menu.price,
            discount: details_menu.discount,
            qty: details_menu.qty,
            image: details_menu.image,
          },
        ]);
    } else {
      setDataOnCart([...dataOnCart.filter((dt) => dt.id !== id)]);
    }
  };

  return (
    <>
      <Navbar />
      <Container fluid>
        <Row>
          <Col xs={11} sm={11} md={11} lg={11}>
            <Container fluid className="mt-4">
              <Row>
                <Col
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  className="d-flex justify-content-center mx-auto"
                >
                  <img
                    src={details_menu.image}
                    alt="gambar makanan"
                    style={{ width: "80%", borderRadius: "5px" }}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <h1 style={{ textAlign: "center", fontSize: "4rem" }}>
                    {details_menu.name}
                  </h1>
                </Col>
              </Row>
              <Row className="justify-content-evenly">
                <Col xs={12} sm={12} md={4} lg={4}>
                  {details_menu.description}
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <span style={{ display: "inline" }}>Harga : </span>
                  {details_menu.discount ? (
                    <div style={{ display: "inline" }}>
                      <span className="d-inline">
                        Rp. {details_menu.price - details_menu.discount}
                      </span>{" "}
                      <del className="text-danger ">{details_menu.price}</del>
                    </div>
                  ) : (
                    <span>Rp. {details_menu.price}</span>
                  )}
                  <br></br>
                  qty <span>{details_menu.qty}</span>
                </Col>
              </Row>
              <Row className="mt-3 justify-content-evenly">
                <Col xs={12} sm={12} md={4} lg={4}>
                  <h5>Komposisi:</h5>
                  <ul>
                    {details_menu.komposisi.map((komp) => (
                      <li>{komp}</li>
                    ))}
                  </ul>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <BuyCartButtonGroup
                    type={"card"}
                    addToChart={true}
                    idItem={details_menu.id}
                    cartHandle={cartHandle}
                  />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col
            xs={1}
            sm={1}
            md={1}
            lg={1}
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
            {showCart && <Cart data={dataOnCart} cartHandle={cartHandle} />}
          </Col>
        </Row>
      </Container>
    </>
  );
}

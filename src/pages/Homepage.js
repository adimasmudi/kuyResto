import React, { useState, useEffect } from "react";

// react bootstrap
import { Container, Row, Col, Form, Button } from "react-bootstrap";

// components
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import Card from "../components/Card";
import Cart from "../components/Cart";

// data
import homepage from "../json/homepage.json";

export default function Homepage() {
  const [showCart, setShowCart] = useState(false);
  const [category, setCategory] = useState("semua");
  const [displayBySearch, setDisplayBySearch] = useState("");
  const [dataOnCart, setDataOnCart] = useState(homepage.cart);

  const [homepageData, setHomepageData] = useState(homepage.products);
  let data;
  useEffect(() => {
    if (category !== "semua") {
      data = homepage.products.filter((data) => data.category === category);
    } else {
      data = homepage.products;
    }
    if (displayBySearch !== "") {
      data = homepage.products.filter((data) => {
        return (
          data.name.toLowerCase().includes(displayBySearch.toLowerCase()) ||
          data.description.toLowerCase().includes(displayBySearch.toLowerCase())
        );
      });
    }
    setHomepageData(data);
  }, [showCart, category, displayBySearch, dataOnCart]);

  const handleCheck = (e) => {
    setCategory(e.target.value);
  };

  const cartHandle = (id, addToChart) => {
    let dataCart;

    if (addToChart) {
      dataCart = data.filter((dt) => dt.id === id);
      let isExist = dataOnCart.filter((dt) => dt.id === dataCart[0].id);

      isExist.length === 0 &&
        setDataOnCart([
          ...dataOnCart,

          {
            id: dataCart[0].id,
            name: dataCart[0].name,
            price: dataCart[0].price,
            discount: dataCart[0].discount,
            qty: dataCart[0].qty,
            image: dataCart[0].image,
          },
        ]);
    } else {
      dataCart = dataOnCart.filter((dt) => dt.id !== id);
      setDataOnCart([...dataCart]);
    }
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
            <div className="mt-4">
              <Row>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="cari makanan"
                    onChange={(e) => setDisplayBySearch(e.target.value)}
                  />
                </Col>
              </Row>
            </div>
            {homepageData.map((data) => (
              <Card
                data={data}
                type="card"
                addToChart={true}
                cartHandle={cartHandle}
              />
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
            {showCart && <Cart data={dataOnCart} cartHandle={cartHandle} />}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

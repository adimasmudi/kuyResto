import React from "react";
import { Card, Form } from "react-bootstrap";

export default function Index({ handleCheck }) {
  return (
    <div>
      <h1>Filter By:</h1>
      <p>All displayed if nothing checked!</p>
      <Card style={{ width: "90%" }}>
        <Card.Body>
          <Form>
            <div className="mb-3">
              <Form.Check
                type={"radio"}
                id={"category"}
                label={"semua"}
                name={"category"}
                value={"semua"}
                defaultChecked
                onChange={(e) => handleCheck(e)}
              />
              <Form.Check
                type={"radio"}
                id={"category"}
                label={"makanan"}
                name={"category"}
                value={"makanan"}
                onChange={(e) => handleCheck(e)}
              />
              <Form.Check
                type={"radio"}
                id={"category"}
                label={"minuman"}
                name={"category"}
                value={"minuman"}
                onChange={(e) => handleCheck(e)}
              />
              <Form.Check
                type={"radio"}
                id={"category"}
                label={"camilan"}
                name={"category"}
                value={"camilan"}
                onChange={(e) => handleCheck(e)}
              />
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

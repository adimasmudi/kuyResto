import React from "react";
import "./index.css";

// react-bootstrap
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function Index({ active, onClick }) {
  console.log(active);
  const style = {
    border: "none",
    width: "10rem",
  };

  return (
    <div className="mt-4 d-flex justify-content-center">
      <ButtonGroup aria-label="Panel">
        <Button
          style={{ ...style, backgroundColor: "#F05E5E" }}
          className={active === "Belum diproses" ? `bg-danger` : ""}
          onClick={(e) => onClick("Belum diproses")}
        >
          Belum diproses
        </Button>
        <Button
          style={{ ...style, backgroundColor: "#F05E5E" }}
          className={active === "Diproses" ? `bg-danger` : ""}
          onClick={(e) => onClick("Diproses")}
        >
          Diproses
        </Button>
        <Button
          style={{ ...style, backgroundColor: "#F05E5E" }}
          className={active === "Selesai" ? `bg-danger` : ""}
          onClick={(e) => onClick("Selesai")}
        >
          Selesai
        </Button>
      </ButtonGroup>
    </div>
  );
}

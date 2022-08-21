import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DetailsMenu from "./pages/DetailsMenu";
import Buy from "./pages/Buy";
import Transaction from "./pages/Transaction";

function App() {
  const loggedIn = false;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            loggedIn ? <Navigate to="/homepage" /> : <Navigate to="/login" />
          }
        ></Route>

        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/homepage" element={<Homepage />}></Route>
        <Route exact path="/details-menu/:id" element={<DetailsMenu />}></Route>
        <Route exact path="/buy/:id" element={<Buy />}></Route>
        <Route exact path="/transaction" element={<Transaction />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

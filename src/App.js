import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";

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
        <Route exact path="/homepage" element={<Homepage />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

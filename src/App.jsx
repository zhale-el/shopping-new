import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { Container } from "react-bootstrap";
import Shop from "./pages/Shop";

const App = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Shop />} />
      </Routes>
    </Container>
  );
};

export default App;

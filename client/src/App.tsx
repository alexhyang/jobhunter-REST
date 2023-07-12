import React from "react";
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

import { Nav, Footer } from "components";
import { Home, Skills, Notes, NewPosting } from "pages";


function App() {
  return (
    <div className="App">
      <Nav />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="notes" element={<Notes />} />
          <Route path="add_posting" element={<NewPosting />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;

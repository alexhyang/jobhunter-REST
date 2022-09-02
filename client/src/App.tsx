import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "./components/TopNav";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Notes from "./components/Notes";
import NewPosting from "./components/NewPosting";

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
    </div>
  );
}

export default App;

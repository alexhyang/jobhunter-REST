import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

import { Nav, Footer } from "components";
import { Home, Skills, Notes, Posting, NewPosting } from "pages";
import { IListing } from "interfaces";

import { fetchPostings } from "utils/APIs";
import Test from "pages/Test";

function App() {
  const [data, setData] = useState<IListing[]>();

  useEffect(() => {
    fetchPostings().then((listings) => setData(listings));
  }, []);

  return (
    <div className="App">
      <Nav />
      <Container>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/posting" element={<NewPosting />} />
          <Route path="/posting/:id" element={<Posting data={data} />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;

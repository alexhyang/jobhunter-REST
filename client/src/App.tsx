import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "./components/Nav";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import Notes from "./pages/Notes/Notes";
import NewPosting from "./pages/NewPosting/NewPosting";

interface IListing {
  [key: string]: string;
}

async function getPostings() {
  try {
    const response = await fetch(
      "http://alexhyang.herokuapp.com/jobhunter-app/fetch_all_postings"
    );
    return response.json();
  } catch (err) {
    console.log(err);
  }
}

function App() {
  const [data, setData] = useState<IListing[]>([]);
  useEffect(() => {
    getPostings().then((value) =>
      setData(
        value.sort(
          (a: IListing, b: IListing) => parseInt(b.id) - parseInt(a.id)
        )
      )
    );
  }, []);

  /*
  useEffect(() => {
    localStorage.setItem('postings', JSON.stringify(data));
    console.log(localStorage.getItem('postings'));
  }, [data]);
  */

  return (
    <div className="App">
      <Nav />
      <Container>
        <Routes>
          <Route path="/" element={<Home data={data}/>} />
          <Route path="skills" element={<Skills />} />
          <Route path="notes" element={<Notes data={data}/>} />
          <Route path="add_posting" element={<NewPosting />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;

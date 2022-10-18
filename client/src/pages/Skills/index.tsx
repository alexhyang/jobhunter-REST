import React, { useState, useEffect } from "react";
import WordCloud from "./WordCloud";
import "./skills.css";

import { fetchSkills } from "utils/APIs";

export default function Skills() {
  const [data, setData] = useState<{ [key: string]: number }>({});
  useEffect(() => {
    fetchSkills().then((value) => setData(value));
  }, []);

  return (
    <>
      <h1>Skills</h1>
      {data ? <WordCloud data={data} /> : <p>Loading...</p>}
    </>
  );
}

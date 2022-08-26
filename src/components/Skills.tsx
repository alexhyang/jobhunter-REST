import React, { useState, useEffect } from "react";
import WordCloud from "./WordCloud";

async function getSkills() {
  try {
    let response = await fetch(
      "http://alexhyang.herokuapp.com/jobhunter-app/skills/fetch"
    );
    return response.json();
  } catch (err) {
    console.log(err);
  }
}

export default function Skills() {
  const [data, setData] = useState<{ [key: string]: number }>({});
  useEffect(() => {
    getSkills().then((value) => setData(value));
  }, []);

  return (
    <>
      <h1>Skills</h1>
      <WordCloud data={data} />
    </>
  );
}

import React, { useState, useEffect } from "react";
import ListingTable from "./ListingTable";

interface IListing {
  [key: string]: string;
}

async function getPostings() {
  try {
    let response = await fetch(
      "http://alexhyang.herokuapp.com/jobhunter-app/fetch_all_postings"
    );
    return response.json();
  } catch (err) {
    console.log(err);
  }
}

export default function Home() {
  const [data, setData] = useState<IListing[]>([]);
  useEffect(() => {
    getPostings().then((value) =>
      setData(
        value.sort((a: IListing, b: IListing) =>
          parseInt(a.id) > parseInt(b.id) ? -1 : 1
        )
      )
    );
  }, []);

  return (
    <>
      <h1>Postings List ({data.length} in total)</h1>
      <ListingTable data={data} />
    </>
  );
}

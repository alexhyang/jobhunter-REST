import React, { useState, useEffect } from "react";
import ListingTable from "./ListingTable";

import { IListing } from "interfaces";
import { sortListings } from "utils/sortListings";
import { fetchPostings } from "utils/APIs";

export default function Home() {
  const [data, setData] = useState<IListing[]>();
  useEffect(() => {
    fetchPostings().then((listings) => setData(sortListings(listings)));
  }, []);

  return (
    <>
      <h1>Postings List {data ? `(${data.length} in total)` : null}</h1>
      {data ? <ListingTable data={data} /> : <p>Loading...</p>}
    </>
  );
}

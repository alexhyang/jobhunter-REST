import React, { useState, useEffect } from "react";
import ListingTable from "./ListingTable";

interface IListing {
  [key: string]: string;
}

export default function Home(props: {data: IListing[]}) {
  return (
    <>
      <h1>Postings List ({props.data.length} in total)</h1>
      <ListingTable data={props.data} />
    </>
  );
}

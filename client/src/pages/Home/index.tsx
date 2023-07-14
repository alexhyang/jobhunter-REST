import React, { useState, useEffect } from "react";
import ListingTable from "./ListingTable";

import { IListing } from "interfaces";

export default function Home(props: { data: IListing[] | undefined }) {
  return (
    <>
      <h1>
        Postings List {props.data ? `(${props.data.length} in total)` : null}
      </h1>
      {props.data == undefined ? (
        <p>No Posting found</p>
      ) : props.data ? (
        <ListingTable data={props.data} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

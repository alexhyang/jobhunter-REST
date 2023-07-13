import React, { useState, useEffect } from "react";
import { IListing } from "../../interfaces";
import { sortListings } from "../../utils/sortListings"

export default function ListingTable(props: { data: IListing[] }) {
  // TODO: add order by id button
  const data = sortListings(props.data);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Position</th>
          <th>Level</th>
          <th>Company</th>
          <th>Location</th>
          <th>{"Due Date"}</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {data.map((posting) => (
          <tr key={posting._id}>
            <td>{posting._id}</td>
            <td>
              <a href={posting.postingUrl}>{posting.jobTitle}</a>
            </td>
            <td>{posting.jobLevel}</td>
            <td>{posting.company}</td>
            <td>{posting.location}</td>
            <td>{posting.applicationDueDate.toString()}</td>
            <td>{posting.other ? "YES" : ""}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

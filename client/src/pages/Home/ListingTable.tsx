import React, { useState, useEffect } from "react";

interface IListing {
  [key: string]: string;
}

export default function ListingTable(props: { data: IListing[] }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Position</th>
          <th>Level</th>
          <th>Company</th>
          <th>Location</th>
          <th>Due Date</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((posting) => (
          <tr>
            <td>{parseInt(posting.id)}</td>
            <td><a href={posting.url}>{posting.position}</a></td>
            <td>{posting.level}</td>
            <td>{posting.company}</td>
            <td>{posting.location}</td>
            <td>{posting.due_date}</td>
            <td>{posting.other ? "YES" : ""}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

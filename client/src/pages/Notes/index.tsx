import React, { useState, useEffect } from "react";
import { IListing } from "interfaces";
import { fetchPostings } from "utils/APIs";
import { sortListings } from "utils/sortListings";

export default function Notes() {
  const [data, setData] = useState<IListing[]>();
  useEffect(() => {
    fetchPostings().then((listings) => setData(sortListings(listings)));
  }, []);

  return (
    <div>
      <h1>Notes</h1>
      {data ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Position</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {data.map((posting) =>
              posting.other ? (
                <tr key={posting._id}>
                  <td>{posting._id}</td>
                  <td>
                    <a href={posting.postingUrl}>{posting.jobTitle}</a>
                  </td>
                  <td>{posting.other}</td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

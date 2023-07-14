import React from "react";
import PostingCard from "./PostingCard";
import { useParams } from "react-router-dom";
import { IListing } from "../../interfaces";
import { getPostingById } from "../../utils/queryPostings";

export default function Posting(props: { data: IListing[] | undefined }) {
  const { id } = useParams<string>();
  const errorMessage = <div>Error occurs when fetching posting</div>;

  if (props.data == undefined) {
    return errorMessage;
  } else if (id == undefined) {
    return errorMessage;
  } else {
    const idNum = parseInt(id);
    if (idNum > -1) {
      const posting = getPostingById(idNum, props.data);
      return <PostingCard data={posting} />;
    } else {
      return <div>Posting page</div>;
    }
  }
}

import { IListing } from "../interfaces";

export function sortListings(listings: IListing[], descend = true) {
  return listings.sort((a: IListing, b: IListing) =>
    descend ? b._id - a._id : a._id - b._id
  );
}

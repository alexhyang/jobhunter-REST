import { IListing } from "../interfaces";

export function sortListings(listings: IListing[], descend = true) {
  return listings.sort((a: IListing, b: IListing) =>
    descend ? parseInt(b.id) - parseInt(a.id) : parseInt(a.id) - parseInt(b.id)
  );
}

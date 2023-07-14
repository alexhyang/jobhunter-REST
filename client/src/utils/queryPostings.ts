import { IListing } from "../interfaces";
export function getPostingById(id: number, data: IListing[]): IListing {
  for (let i = 0; i < data.length; i++) {
    if (id == data[i]._id) {
      return data[i];
    }
  }
  // TODO: error handling
  return data[0];
}

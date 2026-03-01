import { usePaginateRequest } from "../../../shared";
import { fetchCharacters } from "./api";

export const useCharacters = (page) => {
  return usePaginateRequest(fetchCharacters, page);
};

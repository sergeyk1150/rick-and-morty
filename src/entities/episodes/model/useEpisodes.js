import { usePaginateRequest } from "../../../shared";
import { fetchEpisodes } from "./api";

export const useEpisodes = (page) => {
  return usePaginateRequest(fetchEpisodes, page);
};

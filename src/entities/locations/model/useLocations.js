import { usePaginateRequest } from "@/shared";
import { fetchLocations } from "./api";

export const useLocations = (page) => {
  return usePaginateRequest(fetchLocations, page);
};

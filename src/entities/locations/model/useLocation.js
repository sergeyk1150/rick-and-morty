import { useSearchCategory } from "../../../shared";
import { fetchLocation } from "./api";

export function useLocation(id) {
  return useSearchCategory(fetchLocation, id);
}

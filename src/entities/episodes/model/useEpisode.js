import { useSearchCategory } from "../../../shared";
import { fetchEpisode } from "./api";

export function useEpisode(id) {
  return useSearchCategory(fetchEpisode, id);
}

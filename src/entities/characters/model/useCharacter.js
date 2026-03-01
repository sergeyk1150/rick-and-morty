import { useSearchCategory } from "../../../shared";
import { fetchCharacter } from "./api";

export function useCharacter(id) {
  return useSearchCategory(fetchCharacter, id);
}

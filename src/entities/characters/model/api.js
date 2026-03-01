import { apiInstance, URL_PARAMS } from "../../../shared";

export const fetchCharacters = (page, signal) =>
  apiInstance.get(URL_PARAMS.CHARACTER, { params: { page }, signal });

export const fetchCharacter = (id) =>
  apiInstance.get(`${URL_PARAMS.CHARACTER}/${id}`);

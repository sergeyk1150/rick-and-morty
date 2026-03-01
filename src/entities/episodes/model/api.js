import { apiInstance, URL_PARAMS } from "../../../shared";

export const fetchEpisodes = (page, signal) =>
  apiInstance.get(URL_PARAMS.EPISODE, { params: { page }, signal });

export const fetchEpisode = (id) =>
  apiInstance.get(`${URL_PARAMS.EPISODE}/${id}`);

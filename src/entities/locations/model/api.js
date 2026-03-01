import { apiInstance, URL_PARAMS } from "@/shared";

export const fetchLocations = (page, signal) =>
  apiInstance.get(URL_PARAMS.LOCATION, { params: { page }, signal });

export const fetchLocation = (id) =>
  apiInstance.get(`${URL_PARAMS.LOCATION}/${id}`);

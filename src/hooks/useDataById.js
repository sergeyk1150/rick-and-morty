import { useParams } from "react-router";

export const useDataById = (data) => {
  const { id } = useParams();
  const entity = data.find((el) => {
    return el.id === Number(id);
  });
  return entity;
};

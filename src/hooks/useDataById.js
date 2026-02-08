import { useParams } from "react-router";

export const useDataById = (data) => {
  const { id } = useParams();
  return data.find((el) => {
    return el.id === Number(id);
  });
};

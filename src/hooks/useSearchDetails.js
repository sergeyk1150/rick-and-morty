import axios from "axios";
import { useEffect, useState } from "react";

export function useSearchDetails(category, id) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [details, setDetails] = useState({});

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      method: "GET",
      url: `/api/${category}/${id}`,
    })
      .then((res) => {
        setDetails(res.data);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) {
          return;
        }
        setError(true);
        console.error(e);
      });
  }, [category, id]);
  return { loading, error, details };
}

import { useEffect, useState } from "react";

export const useSearchCategory = (requestFn, id) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [details, setDetails] = useState({});

  useEffect(() => {
    setLoading(true);
    setError(false);
    requestFn(id)
      .then((res) => {
        setDetails(res.data);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
        console.error(e);
      });
  }, [requestFn, id]);
  return { loading, error, details };
};

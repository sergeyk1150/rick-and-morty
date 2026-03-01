import { useState, useEffect } from "react";
import axios from "axios";

export const usePaginateRequest = (requestFn, page) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [lastPage, setLastPage] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    const controller = new AbortController();
    requestFn(page, controller.signal)
      .then((res) => {
        setLastPage(res.data.info.pages);
        setData((prev) => [...prev, ...res.data.results]);
      })
      .catch((e) => {
        if (axios.isCancel(e)) {
          return;
        }
        setError(true);
        console.error(e);
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {
      controller.abort();
    };
  }, [requestFn, page]);
  return { data, loading, error, lastPage };
};

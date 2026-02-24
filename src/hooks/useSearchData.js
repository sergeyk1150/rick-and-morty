import axios from "axios";
import { useEffect, useState } from "react";

export function useSearchData(category, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [lastPage, setLastPage] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: `/api/${category}`,
      params: { page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setLastPage(res.data.info.pages);
        setData((prev) => [...prev, ...res.data.results]);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) {
          return;
        }
        setError(true);
        console.error(e);
      });
    return () => cancel();
  }, [category, pageNumber]);
  return { loading, error, data, lastPage };
}

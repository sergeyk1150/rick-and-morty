import { useRef, useCallback } from "react";

export const useObserver = (loading, lastPage, setPageNumber, pageNumber) => {
  const observer = useRef();
  const lastNodeRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && lastPage !== pageNumber) {
          setPageNumber((prevState) => prevState + 1);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, lastPage, pageNumber, setPageNumber],
  );
  return { lastNodeRef, pageNumber };
};

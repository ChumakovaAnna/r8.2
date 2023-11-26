import { useEffect, useState, useRef } from "react";

export default function useJsonFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  const fetchNews = () => {
    fetch(url)
      .then(setLoading(true))
      .then(res => res.json())
      .then(res => setData(res))
      .then(setLoading(false))
      .catch(err => setError(err))
  }

  useEffect(()=> {
    fetchNews(url)
  }, [])
  return [{data, loading, error}]
}

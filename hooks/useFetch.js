import { useState, useEffect } from "react";


export default function useFetch(url) {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState({});


  useEffect(() => {
    const fetchData = async () => {
      setStatus("fetching");
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setStatus("fetched...");
    };
    fetchData();
  }, []);

  return { status, data };
}




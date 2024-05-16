import { useEffect, useState } from "react";
import { client } from "../sanity/client";

export const useFetch = (query) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      try {
        if(!loading) setLoading(true);
        const products = await client.fetch(query);
        setData(products);
      } catch (error) {
        setError(error);
        console.error("Error occured", error);
      }
      setLoading(false);
    }

    getProducts();
  }, [query]);


  return {data, loading, error};
};

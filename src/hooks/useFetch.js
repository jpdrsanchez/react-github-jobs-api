import { useCallback, useState } from 'react';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (url) => {
      let response;
      let json;

      try {
        setError(null);
        setLoading(true);
        response = await fetch(url);
        json = await response.json();
        if (!response.ok) throw new Error('An error has occurred');
        json = JSON.parse(json.contents);
      } catch (error) {
        json = null;
        setError(error.message);
      } finally {
        setData(json);
        setLoading(false);
      }

      return { response, json };
    },
    [setLoading],
  );

  return { data, loading, error, request };
};

export default useFetch;

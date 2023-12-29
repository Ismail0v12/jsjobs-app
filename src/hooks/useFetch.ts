import {useEffect, useMemo, useState} from 'react';
import axios from 'axios';

export const useFetch = () => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const options = useMemo(
    () => ({
      method: 'GET',
      url: 'https://jsearch.p.rapidapi.com/search',
      params: {
        query: 'Python developer in Texas, USA',
        page: '1',
        num_pages: '1',
      },
      headers: {
        'X-RapidAPI-Key': '972cd51b53mshb15833c78b7b7dap11b49ajsnf3ce0474647b',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
      },
    }),
    [],
  );

  useEffect(() => {
    setIsLoading(true);
    axios
      .request(options)
      .then(res => setData(res.data))
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
  }, [options]);

  return {data, error, isLoading};
};

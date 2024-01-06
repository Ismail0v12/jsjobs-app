import {useEffect, useMemo, useState} from 'react';
import axios from 'axios';
import {Alert} from 'react-native';
import Config from 'react-native-config';
import {IBase} from '../types';

export const rapidApiKey =
  Config.RAPID_API_KEY ?? '972cd51b53mshb15833c78b7b7dap11b49ajsnf3ce0474647b';

export function useFetch<T>(endpoint: string, query?: Record<string, any>) {
  const [data, setData] = useState<T>();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const options = useMemo(
    () => ({
      method: 'GET',
      url: `https://jsearch.p.rapidapi.com/${endpoint}`,
      headers: {
        'X-RapidAPI-Key': rapidApiKey,
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
      },
      params: {...query},
    }),
    [],
  );

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request<IBase<T>>(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (err) {
      setError(err as any);
      Alert.alert('Error', err as string);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetchData = () => {
    setIsLoading(true);
    fetchData();
  };
  return {data, error, isLoading, refetchData};
}

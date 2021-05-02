import { useCallback, useState } from 'react';
import apiFetch from '../../data/fetchData';

export default function useFetchBeers() {
  const [fetchState, setFetchState] = useState({
    isLoading: false,
    isSuccess: false,
    isFailed: false,
    data: null,
    error: null,
  });

  const fetchData = useCallback(async () => {
    const URL = 'http://localhost:5000/getBeers';

    try {
      setFetchState({
        isLoading: true,
        isSuccess: false,
        isFailed: false,
        error: null,
        data: null,
      });
      const result = await apiFetch(URL);
      setFetchState({
        isLoading: false,
        isSuccess: true,
        isFailed: false,
        error: null,
        data: result,
      });
      return result;
    } catch (error) {
      setFetchState({
        isLoading: false,
        isSuccess: false,
        isFailed: true,
        error,
        data: null,
      });
      return false;
    }
  }, []);

  return [fetchState, fetchData];
}

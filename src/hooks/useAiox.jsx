import axios from 'axios';
import React, { useState, useEffect } from 'react';

const useAiox = (param) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [error, setError] = useState('');

  axios.defaults.baseURL ='https://api.unsplash.com/';

  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const res = await axios(url);
      setResponse(res.data.results);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(param);
  }, [param]);

  return {
    response,
    isLoading,
    error,
    fetchData: (url) => fetchData(url),
  };
};

export default useAiox;

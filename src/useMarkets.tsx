import { useEffect, useState } from 'react';
import { slide } from './types';

const useMarkets = (value: string) => {
  const [market, setMarket] = useState<slide[]>([]);
  useEffect(() => {
    fetch(`./mocks/${value}/home.json`, { mode: 'no-cors' })
      .then((response) => {
        return response.json();
      })
      .then((data) => setMarket(data.slides));
  }, [value]);

  return { market };
};

export default useMarkets;

'use client';

import { useState, useEffect } from 'react';

function useLocalStorage(key: string, initialValue: string) {
  const [storedValue, setStoredValue] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const item = window.localStorage.getItem(key);
      return item ? item : initialValue;
    }
    return initialValue;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, storedValue);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}

export default useLocalStorage;

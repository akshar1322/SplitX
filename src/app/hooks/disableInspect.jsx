"use client";
import { useEffect } from 'react';

// Custom hook to disable inspect element
const useDisableInspect = () => {
  useEffect(() => {
    const preventKeys = (e) => {
      if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
      }
    };

    document.addEventListener('keydown', preventKeys);

    return () => {
      document.removeEventListener('keydown', preventKeys);
    };
  }, []);
};

export default useDisableInspect;

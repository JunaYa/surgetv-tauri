// 自定义hooks
import { useEffect } from 'react';

export const useHello = () => {
  useEffect(() => {
    console.log('hello');
  }, []);
};

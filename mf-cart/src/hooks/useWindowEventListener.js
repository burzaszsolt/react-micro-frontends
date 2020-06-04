import { useEffect } from 'react';

const useWindowEventListener = (eventName, eventHandler) => {
  useEffect(() => {
    window.addEventListener(eventName, eventHandler);
    return () => window.removeEventListener(eventName, eventHandler, false);
  }, []);
};

export default useWindowEventListener;

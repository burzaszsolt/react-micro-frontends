import { useEffect, useState } from 'react';

const useMicrofrontend = (id, url) => {
  const scriptId = `${id}Bundle`;
  const [isLoaded, setLoaded] = useState(window[id]);

  const handleLoad = () => setLoaded(true);

  useEffect(() => {
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.addEventListener('load', handleLoad);

      return () => existingScript.removeEventListener('load', handleLoad);
    }
    const script = document.createElement('script');

    script.id = scriptId;
    script.src = url;

    document.body.appendChild(script);
    script.onload = handleLoad;
  }, []); // eslint-disable-line
  return { isLoaded, [id]: window[id] };
};

export default useMicrofrontend;
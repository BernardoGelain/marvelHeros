import md5 from "md5";
import axios from "axios";

export const marvelApi = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_PUBLIC_MARVEL_API_URL,
});
console.log(import.meta.env.VITE_REACT_APP_PUBLIC_MARVEL_PRIVATE_API_KEY);
marvelApi.interceptors.request.use((config) => {
  const timestamp = new Date().getTime();
  const hash = md5(
    timestamp +
      String(import.meta.env.VITE_REACT_APP_PUBLIC_MARVEL_PRIVATE_API_KEY) +
      import.meta.env.VITE_REACT_APP_PUBLIC_MARVEL_PUBLIC_API_KEY
  );
  config.params = {
    ...config.params,
    apikey: import.meta.env.VITE_REACT_APP_PUBLIC_MARVEL_PUBLIC_API_KEY,
    ts: timestamp,
    hash,
  };

  return config;
});

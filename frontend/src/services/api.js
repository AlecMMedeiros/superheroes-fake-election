import axios from 'axios';

export const instanceAxios = axios.create({
  baseURL: 'http://localhost:3001/',
});

export const getAPI = (url) => {
  const { data } = axios.get(url);
  return data;
}
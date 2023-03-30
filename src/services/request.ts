import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const requestData = async (endPoint: string) => {
  const { data } = await api.get(endPoint);
  return data;
};

export default api;

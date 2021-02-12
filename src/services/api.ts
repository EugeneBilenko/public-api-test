import axios from 'axios';

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const getEntities = () => http.get('/beers');
export const getEntity = (id: string) => http.get(`/beers/${id}`);

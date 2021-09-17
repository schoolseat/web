import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.100.211:3333/api',
});

export default api;

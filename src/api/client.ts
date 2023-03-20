import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:5000/api/steam?path=',
  headers: { 'Content-Type': 'application/json' }
});

export default client;

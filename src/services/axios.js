import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.strava.com',
});

export default instance;

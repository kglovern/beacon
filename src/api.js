import axios from 'axios'

/* Default API */
export const API = axios.create({
  baseURL: 'https://api.beaconds.cc/v1',
  // baseURL: 'http://localhost:3000/v1', //FFor testing
  timeout: 4000
})

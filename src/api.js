import axios from 'axios'

export const API = axios.create({
  baseURL: 'http://api.beaconds.cc/v1',
  timeout: 1000
})